# Regelwerk-Quiz Klettern

Lern- und Prüfungsquiz für Schiedsrichterinnen und Schiedsrichter. Vor dem Start wählt man, aus welchen Regelwerken Fragen kommen:

- **Nationales Regelwerk Klettern 2027 (DAV)** – Fragen auf Deutsch (`data/lead.js`, `boulder.js`, `speed.js`, `teamspeed.js`, `allgemein.js`)
- **World Climbing Rules 2026** (Competition Rules, Event Regulations v3, Errata 1 April 2026) – Fragen auf Englisch (`data/wc_*.js`)
- **World Climbing Europe 2026** (Youth Series und Youth Championship Regulations) – Fragen auf Englisch (`data/wce.js`)

- **Lernen:** sofortige Auflösung mit Erklärung und Regelverweis
- **Prüfung:** Bereiche, Anzahl, Zeitlimit und Bestehensgrenze frei wählbar
- **Schwächen wiederholen:** zuletzt falsch beantwortete Fragen gezielt üben (gespeichert nur im eigenen Browser)

Bereiche: Lead, Boulder, Speed, Team Speed und Allgemeine Regeln.

Die Fragen liegen in `data/*.js`. Jede Frage hat Antwortoptionen (`o`), die Indizes der richtigen Antworten (`a`), eine Erklärung (`e`) und einen Regelverweis (`r`).

Jede Frage hat zusätzlich das Regelwerk (`rb`: `dav`, `wc`, `wce`; Standard `dav`).

Inoffizielles Lernangebot. Verbindlich sind allein die jeweils veröffentlichten Regelwerke.
