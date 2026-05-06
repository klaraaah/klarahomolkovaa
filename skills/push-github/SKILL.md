# Skill: push-github

Tento skill popisuje standardní postup pro commit a push změn na GitHub pro projekt **klarahomolkova.cz**.

---

## Pravidla (vždy platí)

1. **Větev:** Commituje se vždy na větev **`master`**. Žádné jiné větve se nevytvářejí ani nepoužívají.
2. **Remote:** `origin` → `https://github.com/klaraaah/klarahomolkova.git`
3. **Commit zprávy:** Musí dodržovat naming convention (viz níže).
4. **Před commitem:** Zkontroluj, že neodesíláš citlivé informace (API klíče, hesla, tokeny).

---

## Naming convention pro commit zprávy

Formát:

```
<typ>: <stručný popis v češtině nebo angličtině>
```

### Typy commitů

| Typ       | Kdy použít                                                        |
|-----------|-------------------------------------------------------------------|
| `feat`    | Nová funkčnost nebo nová stránka                                  |
| `fix`     | Oprava chyby nebo broken linku                                    |
| `style`   | Vizuální změny (CSS, barvy, layout) bez funkční změny            |
| `content` | Změna textového obsahu, cen, kontaktních údajů                   |
| `seo`     | Úpravy meta tagů, sitemap, robots.txt, JSON-LD schémat           |
| `docs`    | Změny v README.md, CLAUDE.md nebo jiné dokumentaci               |
| `chore`   | Technická údržba (oprava překlepů v kódu, cleanup, refactoring)  |
| `skill`   | Přidání nebo úprava lokálního skill souboru                      |

### Příklady správných commit zpráv

```
feat: přidat stránku podmínky-užívání.html
fix: opravit broken odkaz na podmínky v patičce
style: upravit barvu hover efektu na kartách služeb
content: aktualizovat ceny v ceníku pro rok 2026
seo: přidat podmínky-užívání do sitemap.xml
docs: vytvořit README.md s instrukcemi pro vývojáře
docs: aktualizovat CLAUDE.md – přidat sekci design systém
chore: odstranit zakomentovaný kód z index.html
skill: přidat lokální skill push-github
```

### Co NEDĚLAT

```
# ❌ Špatně – příliš vágní
git commit -m "update"
git commit -m "changes"
git commit -m "fix"
git commit -m "wip"

# ❌ Špatně – chybí typ
git commit -m "nová stránka podmínky"

# ❌ Špatně – příliš dlouhé (nad 72 znaků v předmětu)
git commit -m "feat: přidat novou kompletní stránku podmínek užívání webu"
```

---

## Postup: commit a push

### 1. Zkontroluj stav repozitáře

```bash
git status
```

### 2. Přidej soubory ke commitu

Všechny změněné soubory:
```bash
git add .
```

Nebo konkrétní soubory:
```bash
git add index.html podmínky-užívání.html sitemap.xml
```

### 3. Vytvoř commit

```bash
git commit -m "typ: stručný popis změny"
```

Příklad:
```bash
git commit -m "feat: přidat stránku podmínky-užívání.html"
```

### 4. Pushni na GitHub (větev master)

```bash
git push origin master
```

---

## Postup: více změn v jednom commitu

Pokud upravuješ více souborů najednou (např. přidáváš stránku + aktualizuješ sitemap + aktualizuješ index.html), stačí je dát do jednoho commitu:

```bash
git add .
git commit -m "feat: přidat podmínky-užívání, aktualizovat sitemap a patičku"
git push origin master
```

---

## Postup: oprava poslední commit zprávy (ještě před pushem)

```bash
git commit --amend -m "správný typ: opravená zpráva"
```

---

## Postup: zobrazit historii commitů

```bash
git log --oneline -10
```

---

## Poznámky

- Tento skill soubor je uložen v `skills/push-github/SKILL.md` a je součástí repozitáře — commituje se a pushuje se spolu s ostatními soubory.
- Soubor **není** a **nesmí být** uveden v `.gitignore`.
- Pokud `.gitignore` v projektu neexistuje, nezakládej ho jen kvůli tomuto souboru.
