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
- **Fonty:** Archivo (variabilní, nadpisy i text) + JetBrains Mono (štítky) — hostované lokálně v `/assets/fonts/`, žádné Google Fonts
- **Sdílený design:** `/assets/site.css` — načítá se na všech stránkách až ZA případným inline `<style>` stránky
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

## Design systém (redesign 11/2026 — „redakční brutalismus")

Jediný zdroj vzhledu je **`/assets/site.css`**. Hlavní stránka nemá žádné inline CSS. Podstránky mají v inline `<style>` už jen svůj layout (gridy, odsazení); barvy, písmo, tlačítka, navigaci, patičku a karty jim přebíjí `site.css`.

Zásady: žádné glow, žádný glassmorphism, žádné zaoblené rohy (`--radius:0`). Tvrdé linky 1–2 px, velké verzálkové nadpisy, hover = posun + tvrdý stín. Jedna akcentní barva.

| Proměnná          | Hodnota                   | Použití                               |
|-------------------|---------------------------|---------------------------------------|
| `--bg`            | `#0A0A0A`                 | Inkoust — výchozí pozadí              |
| `--text`          | `#F4F1EA`                 | Papír — text na tmavé                 |
| `--muted`         | `#A8A49C`                 | Sekundární text                       |
| `--accent`        | `#FF007F`                 | Růžová (text na ní je vždy černý)     |
| `--line`          | `rgba(244,241,234,.18)`   | Linky a ohraničení                    |
| `--font`          | Archivo                   | Vše kromě štítků                      |
| `--mono`          | JetBrains Mono            | Štítky, navigace, meta údaje          |

Tématické třídy na sekci přepnou proměnné: `.t-paper` (světlá), `.t-pink` (růžová), `.t-ink` (tmavá uvnitř jiné). Růžové jsou automaticky i `.cta-box`, `.newsletter-box`, `.article-cta`.

**Úvodní animace „průlet do obrazovky"** (`index.html`, sekce `#hero.dive` + `/assets/dive.js`): sekce je vysoká 520vh s přilepenou scénou; scroll (0–1) zvětší počítač tak, že jeho obrazovka vyplní okno, a uvnitř proběhnou tři scény (web → AI → automatizace). Texty scén jsou přímo v HTML, časování v `dive.js` (funkce `render`). Při `prefers-reduced-motion` se zobrazí jen statický úvod.

Navigace a patička jsou na všech stránkách stejný HTML blok (`nav#nav` + `.mob-menu`, `footer.site-foot`) — při změně upravit ve všech souborech. Právní odkazy v patičce vedou na `/#ochrana-osobnich-udaju` a `/#cookies` (index podle hashe otevře modal).

---

## Konvence a pravidla

- Každá nová HTML stránka musí obsahovat **kompletní navigaci a patičku** (stejný design jako `index.html`).
- V patičce musí být vždy viditelné odkazy: **Zásady ochrany osobních údajů**, **Zásady cookies**, **Podmínky užívání**.
- Navigace na podstránkách odkazuje na `/#services`, `/#why`, `/#pricing`, `/#contact` (kotvy v `index.html`).
- Všechny stránky mají `lang="cs"` a správné `<meta>` tagy (description, canonical, OG).
- Obrázky: OG image je na `https://klarahomolkova.cz/og-image.jpg` (není v repozitáři, hostováno externě).
- Favicon je inline SVG s písmenem „K" a akcent barvou `#FF007F`.
- Emoji v ikonkách se přes CSS převádějí do odstínů šedi; do tlačítek emoji nedávat.

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
