# SEO Audit — klarahomolkova.cz
**Datum auditu:** 5. května 2026  
**Zpracovala:** Claude (Cowork)

---

## Celkové hodnocení

Web má **solidní základ** — správně nastavené meta tagy, lokální SEO signály, strukturovaná data i sitemap. Ale existuje několik konkrétních chyb, které ti aktivně škodí v hledáčích (zejména příliš dlouhý title a špatný sitemap), a velká skupina příležitostí, které ještě nejsou využité. Nejdůležitější priority jsou opravit tři technické chyby, přidat recenze/reference a razantně posílit blog.

**Největší silná stránka:** Trojkombinace web + AI + marketing je unikátní v regionu — žádný lokální konkurent to nenabízí. To je tvůj hlavní SEO úhel, který je třeba ještě víc vytěžit.

**Top 3 priority:**
1. Opravit title tag na homepage (příliš dlouhý)
2. Vyčistit sitemap.xml (obsahuje neplatné URL)
3. Přidat BlogPosting schema na všechny blogové články

---

## 1. Analýza klíčových slov

### Příležitosti

| Klíčové slovo | Obtížnost | Příležitost | Aktuální pokrytí | Záměr | Doporučený formát |
|---|---|---|---|---|---|
| tvorba webových stránek Třebíč | Střední | **Vysoká** | ✅ Homepage + landing page | Transakční | Landing page |
| web na míru Třebíč | Nízká | **Vysoká** | ✅ Homepage title | Transakční | Landing page |
| webař Třebíč | Nízká | **Vysoká** | ⚠️ Jen částečně | Transakční | Do title tagu |
| tvorba webových stránek Vysočina | Nízká | **Vysoká** | ⚠️ Jen částečně | Transakční | Rozšíření landing page |
| AI konzultant Třebíč | Velmi nízká | **Vysoká** | ❌ Chybí | Transakční | Nová landing page |
| AI automatizace malé firmy | Střední | **Vysoká** | ❌ Pouze stránka služeb | Informační/transakční | Blog + landing page |
| redesign webu cena | Střední | **Střední** | ❌ Chybí | Informační | Blog post |
| kolik stojí web 2026 | Střední | **Střední** | ✅ Blog post | Informační | ✅ Pokryto |
| web pro živnostníka | Střední | **Střední** | ❌ Chybí | Transakční | Landing page nebo blog |
| WordPress web Třebíč | Nízká | **Střední** | ⚠️ Jen zmínka | Transakční | Dedikovaná stránka |
| marketingová strategie malé firmy | Střední | **Střední** | ❌ Jen stránka služeb | Transakční | Landing page |
| webové stránky Jihlava | Nízká | **Střední** | ❌ Chybí | Transakční | Geo-landing page |
| jak psát prompty ChatGPT | Střední | **Střední** | ✅ Blog post | Informační | ✅ Pokryto |
| AI pro podnikatele návod | Nízká | **Střední** | ⚠️ Jen částečně | Informační | Blog série |
| webové stránky od 7000 Kč | Nízká | **Nízká** | ✅ Meta description | Transakční | Price page |
| audit webu zdarma | Nízká | **Střední** | ✅ Dedikovaná stránka | Transakční | ✅ Pokryto |
| SEO pro malé firmy | Střední | **Nízká** | ❌ Nenabízíš | Informační | Zvážit |
| n8n automatizace tutorial | Nízká | **Nízká** | ❌ Chybí | Informační | Blog niché |
| redesign webu WordPress | Nízká | **Nízká** | ⚠️ Jen zmínka | Transakční | Blog/stránka |
| webová stránka pro kadeřnictví | Velmi nízká | **Střední** | ❌ Chybí | Transakční | Case study nebo blog |

---

## 2. Audit on-page SEO

### Problémy na stránkách

| Stránka | Problém | Závažnost | Doporučená oprava |
|---|---|---|---|
| **index.html** | Title tag má 78 znaků — překračuje limit 60 | 🔴 Kritická | Zkrátit na: `Tvorba webů Třebíč \| Web na míru – Klára Homolková` |
| **index.html** | JSON-LD pole `sameAs` je prázdné | 🟠 Vysoká | Přidat LinkedIn, Instagram nebo jiné profily |
| **index.html** | Chybí FAQ sekce + FAQ schema | 🟠 Vysoká | Přidat FAQ (viz akční plán), přidat `@type: FAQPage` |
| **index.html** | Žádné recenze/reference zákazníků | 🟠 Vysoká | Přidat sekci s recenzemi + ReviewAggregation schema |
| **index.html** | H1 je dlouhý — není jasně „scannable" | 🟡 Střední | H1 by měl stručně obsahovat primární klíčové slovo dříve |
| **blog/\*.html** | Chybí `BlogPosting` schema na všech 7 článcích | 🔴 Kritická | Přidat JSON-LD s `@type: BlogPosting` + `datePublished`, `author`, `description` |
| **blog/\*.html** | Blogové OG image není nastavena na všech článcích | 🟠 Vysoká | Přidat `og:image` na všechny blog posty |
| **o-mne.html** | Chybí `Person` schema (JSON-LD) | 🟡 Střední | Přidat schema pro autora a konzultantku |
| **tvorba-webu-trebic.html** | Riziko duplicate content s homepage | 🟡 Střední | Ověřit, že obsah je dostatečně odlišný; jinak přidat `canonical` zpět na homepage |
| **portfolio.html** | Chybí v sitemap? Zkontroluj, zda má reálný obsah | 🟡 Střední | Naplnit skutečnými projekty + přidat `CreativeWork` schema |
| **Všechny stránky** | Chybí odkaz na Google My Business / Profil firmy | 🟠 Vysoká | Vytvořit Profil firmy na Google — zásadní pro lokální SEO |
| **Všechny stránky** | Žádné sociální sítě v patičce ani v JSON-LD | 🟡 Střední | Přidat alespoň LinkedIn nebo Instagram |

---

## 3. Technické SEO

### Checklist

| Kontrola | Stav | Detail |
|---|---|---|
| HTTPS | ✅ Pass | Canonical URL je `https://` |
| lang="cs" | ✅ Pass | Správně nastaveno na všech stránkách |
| Viewport meta | ✅ Pass | `width=device-width,initial-scale=1.0` |
| Canonical URL | ✅ Pass | Na všech stránkách |
| robots.txt | ✅ Pass | Správně odkazuje na sitemap |
| Sitemap.xml | ⚠️ Warning | Obsahuje neplatné anchor fragmenty (#services, #pricing, #contact) — Google je indexuje jako samostatné URL, ale nemohou mít vlastní pozici |
| Sitemap — blog changefreq | ⚠️ Warning | Blog články mají `changefreq="yearly"` — změň na `monthly` |
| JSON-LD homepage | ✅ Pass | `ProfessionalService` s adresou, telefon, e-mail, ceník |
| JSON-LD blog | ❌ Fail | Chybí `BlogPosting` schema na článcích |
| Open Graph | ✅ Pass | Kompletní na homepage |
| Open Graph — podstránky | ⚠️ Warning | Některé podstránky nemají `og:image` |
| Twitter Card | ✅ Pass | Nastaveno na homepage |
| Mobilní responzivita | ✅ Pass | Kompletní `@media` breakpointy |
| Navigace — přístupnost | ✅ Pass | `aria-label`, `aria-expanded`, skip link |
| Rychlost načítání | ⚠️ Warning | Google Fonts blokují rendering — zvážit `font-display: swap` nebo preload |
| Core Web Vitals — CLS | ⚠️ Warning | `backdrop-filter: blur()` a fade-in animace mohou způsobit layout shift |
| Interní linking | ⚠️ Warning | Blogové články navzájem nepropojují (chybí `related articles`) |
| Favicon | ⚠️ Warning | Pouze inline SVG — přidat `favicon.ico` pro starší prohlížeče |
| Google Search Console | ❌ Fail | Žádný verification tag — ověřit, zda je napojená |
| Google My Business | ❌ Fail | Klíčový pro lokální SEO — ověřit nebo vytvořit |
| Zpětné odkazy (backlinks) | ❌ Fail | Nejsou vidět žádné backlinky — potřeba linkbuildingová strategie |

---

## 4. Analýza mezer v obsahu

| Téma / klíčové slovo | Proč je to důležité | Doporučený formát | Priorita | Odhadnutý čas |
|---|---|---|---|---|
| **FAQ sekce na homepage** | FAQ schema může získat featured snippet; zodpovídá otázky zákazníků | Sekce na homepage | 🔴 Vysoká | 2 hodiny |
| **Recenze/reference zákazníků** | Sociální důkaz = konverze; ReviewAggregation schema = hvězdičky v Googlu | Sekce na homepage | 🔴 Vysoká | 1 den (sběr recenzí) |
| **AI konzultace Třebíč — landing page** | Nikdo místní to necílí; AI poradenství má exponenciální poptávku | Dedikovaná stránka | 🟠 Vysoká | Půl den |
| **Case study: reálný projekt** | Konkrétní výsledky = důvěryhodnost; pomáhá s long-tail SEO | Stránka/blog post | 🟠 Vysoká | 1 den |
| **Webové stránky Jihlava / Znojmo** | Jihlava je větší město na Vysočině, vyšší vyhledávací objem | Geo landing page | 🟠 Střední | Půl den |
| **Web pro živnostníky (kadeřnice, kosmetička, řemeslník...)** | Niche long-tail s vysokou konverzí; ukázky use-cases | Blog post nebo sekce | 🟡 Střední | 3 hodiny |
| **WordPress vs. web na míru — srovnání** | Informační dotaz s velkou hledaností; buduje autoritu | Blog post | 🟡 Střední | 3 hodiny |
| **Redesign webu — kdy je čas a co stojí** | Přivádí zákazníky s existujícím webem | Blog post | 🟡 Střední | 3 hodiny |
| **AI automatizace: 5 procesů, které ušetří čas** | Informační dotaz, buduje poptávku po AI konzultacích | Blog post | 🟡 Střední | 3 hodiny |
| **Kompletní průvodce: jak nechat postavit web** | Pillar page; přitahuje zákazníky na začátku journey | Dlouhý průvodce | 🟡 Nízká | 1 den |

---

## 5. Srovnání s konkurencí

| Dimenze | klarahomolkova.cz | TrebWebDesign.cz | mcrai.eu | webfusion.cz |
|---|---|---|---|---|
| Lokální přítomnost | ✅ Třebíč | ✅ Třebíč | ✅ Třebíč | ❌ Agentura (ne lokální) |
| Vstupní cena | ✅ 7 000 Kč | ⚠️ 1 500 Kč (velmi nízká) | ❌ Neuvádí | ❌ Neuvádí |
| Rychlost dodání | ✅ 48 hodin | ❌ Neuvádí | ❌ Neuvádí | ❌ Neuvádí |
| AI konzultace | ✅ Ano | ❌ Ne | ❌ Ne | ❌ Ne |
| Marketing strategie | ✅ Ano | ❌ Ne | ❌ Ne | ❌ Ne |
| Blog / obsah | ✅ 7 článků | ❌ Nezjistitelné | ❌ Nezjistitelné | ❌ Nezjistitelné |
| Dedicated landing page | ✅ tvorba-webu-trebic.html | ❌ | ❌ | ✅ Má Třebíč stránku |
| Google My Business | ❓ Neověřeno | ❓ | ❓ | ❓ |
| Recenze online | ❌ Chybí | ❓ | ❓ | ❓ |
| Strukturovaná data | ✅ ProfessionalService | ❓ | ❓ | ❓ |

**Závěr konkurenčního srovnání:** Klára má unikátní pozici — jako jediná v regionu nabízí web + AI + marketing v jednom. Hlavní slabina oproti konkurenci je absence online recenzí a Google Business Profilu, kde lokální firmy sbírají hvězdičkové hodnocení zásadní pro lokální SEO.

---

## 6. Prioritizovaný akční plán

### 🚀 Rychlé výhry — udělej tento týden

| Co udělat | Dopad | Čas | Soubor |
|---|---|---|---|
| **1. Zkrátit title tag na homepage** | 🔴 Vysoký | 5 min | `index.html` řádek 8 |
| **2. Vyčistit sitemap — odstranit anchor fragmenty** | 🔴 Vysoký | 10 min | `sitemap.xml` |
| **3. Přidat BlogPosting JSON-LD na všechny blog posty** | 🔴 Vysoký | 2 hod | Každý `blog/*.html` |
| **4. Změnit blog changefreq z `yearly` na `monthly`** | 🟡 Nízký | 5 min | `sitemap.xml` |
| **5. Doplnit `sameAs` v JSON-LD** | 🟡 Střední | 15 min | `index.html` řádek 60 |
| **6. Ověřit Google Search Console napojení** | 🟠 Vysoký | 15 min | GSC nastavení |
| **7. Přidat FAQ sekci na homepage** | 🟠 Vysoký | 2 hod | `index.html` |

### 📈 Strategické investice — tento kvartál

| Co udělat | Dopad | Čas | Poznámka |
|---|---|---|---|
| **Vytvořit / ověřit Google Profil firmy** | 🔴 Zásadní pro lokální SEO | 1 den (ověření) | Nejdůležitější akce pro lokální viditelnost |
| **Sbírat recenze od zákazníků** | 🔴 Vysoký | Průběžně | Google recenze + přidat na web s ReviewAggregation schema |
| **Přidat landing page: AI konzultace Třebíč** | 🟠 Vysoký | Půl den | Cílit `AI konzultant Třebíč`, `AI pro malé firmy` |
| **Přidat case study s reálným projektem** | 🟠 Vysoký | 1 den | Před/po redesign, výsledky v číslech |
| **Blogové články: min. 1 za 2 týdny** | 🟠 Vysoký | Průběžně | Témata v zásobě výše |
| **Přidat interní linking mezi blog articles** | 🟡 Střední | 2 hod | Každý článek by měl odkazovat na 2-3 relevantní |
| **Geo landing page Jihlava** | 🟡 Střední | Půl den | Vyšší vyhledávací objem než Třebíč |
| **Přidat section s referencemi na homepage** | 🟠 Vysoký | Půl den | I jen 3 reference výrazně zvyšují konverzi |

---

## Konkrétní opravy kódu

### Oprava 1 — Title tag homepage (5 minut)

**Stávající** (78 znaků):
```
Tvorba webových stránek Třebíč | Web na míru, WordPress, AI automatizace & marketing
```

**Navrhovaný** (52 znaků):
```
Tvorba webů Třebíč | Web na míru – Klára Homolková
```

Nebo pokud chceš zahrnout AI:
```
Webař Třebíč – web, AI a marketing | Klára Homolková
```
(54 znaků)

### Oprava 2 — Sitemap (10 minut)

Odstranit tyto 3 záznamy ze sitemap.xml — nejsou to samostatné URL, jen kotvy na homepage:
```xml
<!-- SMAZAT TOTO: -->
<url><loc>https://klarahomolkova.cz/#services</loc>...</url>
<url><loc>https://klarahomolkova.cz/#pricing</loc>...</url>
<url><loc>https://klarahomolkova.cz/#contact</loc>...</url>
```

Také změnit blog changefreq:
```xml
<!-- ZMĚNIT z yearly na monthly: -->
<changefreq>monthly</changefreq>
```

### Oprava 3 — BlogPosting schema (šablona pro každý blog post)

Přidat do `<head>` každého blogového článku:
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "NÁZEV ČLÁNKU",
  "description": "META DESCRIPTION ČLÁNKU",
  "datePublished": "2026-05-01",
  "dateModified": "2026-05-01",
  "author": {
    "@type": "Person",
    "name": "Klára Homolková",
    "url": "https://klarahomolkova.cz/o-mne.html"
  },
  "publisher": {
    "@type": "Person",
    "name": "Klára Homolková",
    "url": "https://klarahomolkova.cz"
  },
  "url": "https://klarahomolkova.cz/blog/SLUG.html",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://klarahomolkova.cz/blog/SLUG.html"
  },
  "image": "https://klarahomolkova.cz/og-image.jpg"
}
```

### Oprava 4 — FAQ sekce + schema na homepage

Přidat před `</body>` v index.html (doporučená témata):

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Kolik stojí tvorba webových stránek?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jednostránkový web stojí od 7 000 Kč, malý web do 3 stran od 9 000 Kč a vícestránkový web 4–10 stran od 14 000 Kč. V ceně je vždy návrh, realizace, mobilní verze a základní SEO."
      }
    },
    {
      "@type": "Question",
      "name": "Jak rychle web postavíte?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jednostránkový web připravím do 48 hodin od schválení obsahu. Složitější projekty domlouváme individuálně."
      }
    },
    {
      "@type": "Question",
      "name": "Jste dostupná osobně v Třebíči?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ano, jsem z Třebíče a osobní schůzka není žádný problém. Konzultace je možná i online."
      }
    }
  ]
}
```

### Oprava 5 — sameAs doplnit

V JSON-LD na homepage, řádek `"sameAs": []` změnit na:
```json
"sameAs": [
  "https://www.linkedin.com/in/VÁŠE-LINKEDIN",
  "https://www.instagram.com/VÁŠE-IG"
]
```

---

*Audit zpracován: 5. května 2026 | klarahomolkova.cz*
