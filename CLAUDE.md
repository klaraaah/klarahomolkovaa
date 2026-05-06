# CLAUDE.md — Projekt klarahomolkova.cz

Tento soubor poskytuje AI (Claude) kontext o projektu, aby mohla správně chápat kód, navrhovat úpravy a dodržovat konvence.

---

## O projektu

**klarahomolkova.cz** je osobní web Kláry Homolkové — freelance webařky, AI konzultantky a marketingové poradkyně z Třebíče.

- **Cílová skupina:** Podnikatelé a malé firmy na Vysočině
- **Hlavní sdělení:** Moderní weby, AI automatizace a marketingová strategie — jednoduše a férově
- **Jazyk webu:** Čeština (cs)
- **Provozovatel:** Klára Homolková, IČO: 17960967, Třebíč, Kraj Vysočina
- **Kontakt:** klarahomolkova@post.cz · 725 771 322

---

## Technologie

- **Čistý HTML/CSS/JS** — žádný framework, žádný build krok
- **Font:** Space Grotesk (Google Fonts)
- **Formulář:** Google Apps Script endpoint (no-cors POST, JSON payload)
- **Hosting/deploy:** GitHub Pages nebo statický hosting, branch `master`
- **Repozitář:** https://github.com/klaraaah/klarahomolkova

---

## Struktura souborů

```
/
├── index.html              # Hlavní jednostránkový web (hero, služby, ceník, kontakt)
├── podmínky-užívání.html   # Stránka s podmínkami užívání služeb
├── sitemap.xml             # XML sitemap pro vyhledávače
├── robots.txt              # Direktivy pro roboty
├── CLAUDE.md               # Tento soubor — kontext pro AI
├── README.md               # Dokumentace projektu pro vývojáře
└── .claude/
    └── skills/
        └── push-github/
            └── SKILL.md    # Lokální skill pro commit a push na GitHub
```

---

## Design systém

Proměnné CSS (definované v `:root` v každém HTML souboru):

| Proměnná          | Hodnota                        | Použití                    |
|-------------------|--------------------------------|----------------------------|
| `--bg`            | `#131313`                      | Pozadí stránky             |
| `--surface`       | `#1C1B1B`                      | Povrch karet               |
| `--surface-glass` | `rgba(28,27,27,.6)`            | Glassmorphism karty        |
| `--accent`        | `#FF007F`                      | Primární akcent (růžová)   |
| `--accent2`       | `#FFB1C4`                      | Světlejší akcent           |
| `--border`        | `rgba(255,0,127,.18)`          | Aktivní ohraničení         |
| `--border-subtle` | `rgba(255,255,255,.07)`        | Jemné ohraničení           |
| `--text`          | `#f0f0f0`                      | Primární text              |
| `--muted`         | `#888`                         | Sekundární / tlumený text  |
| `--radius`        | `6px`                          | Zaoblení rohů              |
| `--glow`          | `0 0 24px rgba(255,0,127,.35)` | Glow efekt (hover)         |
| `--glow-sm`       | `0 0 12px rgba(255,0,127,.2)`  | Jemný glow efekt           |

---

## Konvence a pravidla

- Každá nová HTML stránka musí obsahovat **kompletní navigaci a patičku** (stejný design jako `index.html`).
- V patičce musí být vždy viditelné odkazy: **Zásady ochrany osobních údajů**, **Zásady cookies**, **Podmínky užívání**.
- Navigace na podstránkách odkazuje na `/#services`, `/#why`, `/#pricing`, `/#contact` (kotvy v `index.html`).
- Všechny stránky mají `lang="cs"` a správné `<meta>` tagy (description, canonical, OG).
- Obrázky: OG image je na `https://klarahomolkova.cz/og-image.jpg` (není v repozitáři, hostováno externě).
- Favicon je inline SVG s písmenem „K" a akcent barvou `#FF007F`.

---

## Kontaktní formulář

- Endpoint: Google Apps Script (viz proměnná `FORM_ENDPOINT` v `index.html`)
- Metoda: `POST`, `mode: 'no-cors'`, tělo: JSON jako `text/plain`
- Honeypot pole: `_honey` (skryté, pro anti-spam)
- Po odeslání se formulář resetuje, zobrazí se `#fsuccess`

---

## SEO

- Schéma: `ProfessionalService` (JSON-LD v `index.html`)
- Sitemap: `sitemap.xml`
- Canonical URL: `https://klarahomolkova.cz/`
- Lokální SEO: Třebíč, Kraj Vysočina, CZ

---

## Git workflow

- Větev: **master** (jediná větev, vždy commitovat sem)
- Remote: `origin` → `https://github.com/klaraaah/klarahomolkova.git`
- Viz skill `.claude/skills/push-github/SKILL.md` pro naming convention a postup commitu
