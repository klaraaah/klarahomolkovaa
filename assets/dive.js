/* Průlet do obrazovky — scroll řídí všechno.
   p = 0..1 je postup scrollu sekcí #hero. Počítač startuje v místě .pc-slot
   a jeho obrazovka se roztáhne přes celý viewport; uvnitř běží tři scény. */
(function(){
  var dive=document.getElementById('hero');
  if(!dive||!dive.classList.contains('dive'))return;
  var stage=dive.querySelector('.dive-stage'),slot=dive.querySelector('.pc-slot'),
      body=dive.querySelector('.pc-body'),stand=dive.querySelector('.pc-stand'),base=dive.querySelector('.pc-base'),
      screen=dive.querySelector('.pc-screen'),world=dive.querySelector('.world'),
      scenes={s0:dive.querySelector('.s0'),a:dive.querySelector('.sA'),b:dive.querySelector('.sB'),c:dive.querySelector('.sC')},
      fin=dive.querySelector('.fin'),flow=dive.querySelector('.flow'),
      typed=[].slice.call(dive.querySelectorAll('[data-type]')),
      finLinks=[].slice.call(dive.querySelectorAll('.fin a'));
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var W=0,H=0,start=null,ticking=false;

  function clamp(v){return v<0?0:v>1?1:v}
  function seg(p,a,b){return clamp((p-a)/(b-a))}
  function ease(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}
  function lerp(a,b,t){return a+(b-a)*t}
  function px(el,l,t,w,h){el.style.left=l+'px';el.style.top=t+'px';el.style.width=w+'px';el.style.height=h+'px'}

  // Výchozí obdélník obrazovky: vejde se do .pc-slot i s rámem a stojanem
  function measure(){
    W=stage.clientWidth;H=stage.clientHeight;
    var s=slot.getBoundingClientRect(),g=stage.getBoundingClientRect();
    var sw=Math.min(s.width/1.16,s.height*.9,620);
    if(sw<60)sw=60;
    var sh=sw/1.4,b=sw*.045,total=sh+8.4*b;
    start={w:sw,h:sh,b:b,x:s.left-g.left+(s.width-sw)/2,y:s.top-g.top+Math.max(0,(s.height-total)/2)+b};
  }

  function render(p){
    var z=ease(seg(p,0,.2));
    var w=lerp(start.w,W,z),h=lerp(start.h,H,z),x=lerp(start.x,0,z),y=lerp(start.y,0,z);
    var b=start.b*(w/start.w);
    px(screen,x,y,w,h);
    px(body,x-b,y-b,w+2*b,h+3.6*b);
    px(stand,x+w*.5-w*.09,y+h+2.6*b-1,w*.18,2*b+1);
    px(base,x+w*.5-w*.24,y+h+4.6*b-1,w*.48,.8*b);
    dive.style.setProperty('--b',b+'px');
    dive.style.setProperty('--p',p.toFixed(4));
    world.style.setProperty('--ws',Math.max(w/W,h/H).toFixed(4));

    var o0=1-seg(p,.12,.19),
        oA=Math.min(seg(p,.16,.21),1-seg(p,.43,.47)),
        oB=Math.min(seg(p,.46,.50),1-seg(p,.69,.73)),
        oC=seg(p,.72,.76);
    show(scenes.s0,o0);show(scenes.a,oA);show(scenes.b,oB);show(scenes.c,oC);
    var tA=seg(p,.20,.42),tB=seg(p,.49,.68),tC=seg(p,.75,.90);
    scenes.a.style.setProperty('--t',tA.toFixed(4));
    scenes.b.style.setProperty('--t',tB.toFixed(4));
    scenes.c.style.setProperty('--t',tC.toFixed(4));
    type(typed[0],seg(p,.17,.24));type(typed[1],seg(p,.47,.53));type(typed[2],seg(p,.73,.78));

    var f=seg(p,.90,.96);
    fin.style.setProperty('--f',f.toFixed(4));
    fin.classList.toggle('on',f>.6);
    finLinks.forEach(function(a){a.tabIndex=f>.6?0:-1});
    flow.style.opacity=(1-f*.65).toFixed(3);
    world.style.setProperty('--wb',seg(p,.16,.22).toFixed(3));
    var inside=p>.06&&p<.985;
    dive.classList.toggle('is-in',inside);
    document.body.classList.toggle('diving',p<.985);
  }
  function show(el,o){el.style.setProperty('--o',o.toFixed(3));el.classList.toggle('on',o>0.001)}
  function type(el,t){
    if(!el)return;var full=el.getAttribute('data-type'),n=Math.round(full.length*t);
    if(el._n!==n){el._n=n;el.textContent=full.slice(0,n)}
  }
  function progress(){
    var r=dive.getBoundingClientRect(),dist=dive.offsetHeight-H;
    return dist>0?clamp(-r.top/dist):0;
  }
  function onScroll(){if(!ticking){ticking=true;requestAnimationFrame(function(){ticking=false;render(progress())})}}

  // Klidová obrazovka: prompt se sám přepisuje
  var idle=document.getElementById('idleType'),words=['postav mi web','zapoj AI','zautomatizuj to'],wi=0,ci=0,dir=1;
  function tick(){
    if(!idle)return;
    var wd=words[wi];ci+=dir;idle.textContent=wd.slice(0,ci);
    var wait=dir>0?70:32;
    if(ci>=wd.length){dir=-1;wait=1500}else if(ci<=0&&dir<0){dir=1;wi=(wi+1)%words.length;wait=300}
    setTimeout(tick,wait);
  }

  function init(){
    measure();
    if(reduce){dive.classList.add('is-static');if(idle)idle.textContent=words[0];render(0);return}
    render(progress());tick();
  }
  window.addEventListener('resize',function(){measure();render(reduce?0:progress())});
  if(!reduce){
    window.addEventListener('scroll',onScroll,{passive:true});
    // klik na obrazovku = vlez dovnitř
    screen.addEventListener('click',function(){
      if(progress()<.05)window.scrollTo({top:dive.offsetTop+(dive.offsetHeight-H)*.23,behavior:'smooth'});
    });
  }
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){measure();render(reduce?0:progress())});
  init();
})();
