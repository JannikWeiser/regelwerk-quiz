# Regelwerk-Quiz Klettern

Live: https://quiz.comptools.cloud (GitHub Pages, Custom Domain; DNS: CNAME bei Strato auf jannikweiser.github.io)

Lern- und Prüfungsquiz für Schiedsrichterinnen und Schiedsrichter. Oberfläche zweisprachig (DE/EN, Voreinstellung nach Browsersprache); die Fragen bleiben in der Sprache ihres Regelwerks. Vor dem Start wählt man, aus welchen Regelwerken Fragen kommen:

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

## Schwierigkeit

Jede Frage hat `k: [Fundstelle, Denkschritt, Seltenheit]` mit Werten 0–2:

- **Fundstelle:** 0 Haupttext · 1 Anmerkung/Tabelle/Formatdetail · 2 mehrere Stellen, Errata oder Judge Guide
- **Denkschritt:** 0 Regel wiedergeben · 1 auf einen Fall anwenden · 2 Regeln verknüpfen, rechnen oder Ausnahme erkennen
- **Seltenheit in der Praxis:** 0 bei jedem Wettkampf · 1 gelegentlich · 2 selten

Punkte = Fundstelle + Denkschritt + 2 × Seltenheit (0–8). Stufen: 0–2 Grundlagen, 3–5 Fortgeschritten, 6–8 Experte (`LEVEL_LIMITS` in `app.js`). Mehrfachauswahl zählt nicht.
