# klarahomolkova.cz

Osobní web **Kláry Homolkové** — webařky, AI konzultantky a marketingové poradkyně z Třebíče.

🌐 **Live:** [klarahomolkova.cz](https://klarahomolkova.cz)  
📦 **Repo:** [github.com/klaraaah/klarahomolkova](https://github.com/klaraaah/klarahomolkova)

---

## O projektu

Jednostránkový marketingový web pro lokální podnikání na Vysočině. Zahrnuje:

- hero sekci s CTA tlačítky
- přehled služeb (weby, AI, marketing)
- ceník
- kontaktní formulář (přes Google Apps Script)
- funkční chatbot bublinu
- cookie banner s GDPR modal
- stránku Podmínky užívání

Technologie: čistý HTML/CSS/JS, žádný build krok ani frameworky.

---

## Struktura souborů

```
/
├── index.html              # Hlavní stránka (jednostránkový web)
├── podmínky-užívání.html   # Podmínky užívání
├── sitemap.xml             # Sitemap pro vyhledávače
├── robots.txt              # Direktivy pro crawlery
├── CLAUDE.md               # Kontext projektu pro AI asistenta
├── README.md               # Tento soubor
└── .claude/
    └── skills/
        └── push-github/
            └── SKILL.md    # Skill pro commit/push workflow
```

---

## Spuštění lokálně

Protože jde o čisté HTML bez build kroků, stačí otevřít soubor v prohlížeči nebo spustit jednoduchý lokální server.

### Varianta 1 — VS Code Live Server

1. Otevři projekt ve VS Code
2. Nainstaluj rozšíření **Live Server**
3. Klikni pravým tlačítkem na `index.html` → „Open with Live Server"

### Varianta 2 — Python HTTP server

```bash
# Python 3
python -m http.server 8080
# Pak otevři http://localhost:8080
```

### Varianta 3 — Node.js (npx serve)

```bash
npx serve .
# Pak otevři http://localhost:3000
```

---

## Deployment

Web je nasazen jako statický web. Stačí pushnout změny na větev `master`:

```bash
git add .
git commit -m "typ: stručný popis změny"
git push origin master
```

Detailní postup viz [`.claude/skills/push-github/SKILL.md`](.claude/skills/push-github/SKILL.md).

---

## Kontaktní formulář

Formulář odesílá data přes Google Apps Script. Endpoint je uložen v proměnné `FORM_ENDPOINT` v `index.html`. Bez přístupu ke Google Apps Script skriptu formulář neodesílá data — to je v pořádku pro lokální vývoj.

---

## Design systém

Web používá vlastní CSS proměnné (bez Tailwindu ani jiného frameworku):

- Primární akcent: `#FF007F`
- Pozadí: `#131313`
- Font: Space Grotesk (Google Fonts)

Viz `CLAUDE.md` pro úplný přehled design tokenů a konvencí.

---

## Kontakt

**Klára Homolková**  
📧 klarahomolkova@post.cz  
📞 725 771 322  
📍 Třebíč, Kraj Vysočina  
IČO: 17960967
