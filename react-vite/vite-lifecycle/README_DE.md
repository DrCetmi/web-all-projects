# Betrachter von Organisations-Repos

Diese komplexe Übung handelt von der Praxis der React-Komponenten-Lebenszyklen.

Du wirst eine App fertigstellen, die zunächst eine Liste von GitHub-Organisationsnamen aus einer Textdatei abruft. Sie durchläuft dann die Namen und holt die Organisationsdaten von der GitHub API. Wenn eine Organisation länger als 15 Sekunden betrachtet wird, holt sie eine Liste der öffentlichen Repositories für diese Organisation.

Alle CSS ist bereits fertig und in diesem Repository enthalten.

**Live-Demo** (denke daran, 15+ Sekunden auf die Repo-Liste zu warten) https://digitalcareerinstitute.github.io/SPA-Component-Lifecycle/

## Aufgaben

### Aufgabe 1

- In `App.jsx`
    - Erstelle eine Zustandsvariable; `orgs`

    - Wenn App zum ersten Mal gerendert wird, `fetch` die enthaltene `orgs.csv`
        - Konvertiere die Antwort in ein Array von Strings
        - Speichere das resultierende Array in `orgs`

    - Erstelle eine weitere Zustandsvariable; `currentOrg`
        - Sobald das `orgs` Zustandsvariable-Array Daten hat
            - Nimm das erste Element und speichere es in `currentOrg`

    - Erstelle eine weitere Zustandsvariable; `currentOrgData`
        - Sobald die `currentOrg` Zustandsvariable einen Wert hat
        - Beginne, die Organisationsdaten von GitHub zu holen
            - Zum Beispiel, `GET https://api.github.com/orgs/microsoft`

    - Sobald die `currentOrgData` Zustandsvariable einen Wert hat
        - Rendere es mit der enthaltenen `Organization` Komponente
            - Übergebe folgendes als Props an `Organization`:
                - `orgs`, `currentOrg`, `currentOrgData`, `setCurrentOrg`

### Aufgabe 2

- In `Organization.jsx`
    - Lies den Code
    - Lösche keinen alten Code während der Arbeit

    - Erstelle eine Zustandsvariable; repos

    - Sobald die Komponente gerendert wird, starte einen 15-Sekunden-Timer
    - Nach 15 Sekunden, `fetch` die Repos dieser Organisation
        - Zum Beispiel, `GET https://api.github.com/orgs/microsoft/repos`
        - Speichere das resultierende Array in der Zustandsvariable `repos`

    - Sobald die `repos` Zustandsvariable einen Wert hat
        - Verwende `Array.prototype.map()`
        - Verwende die enthaltene `Repo` Komponente (bereits fertig)

- Teste die Anwendung und prüfe
    - Zeige nur die Repositories der aktuell geöffneten Organisation an
    - Zeige niemals Repositories während der 15 Sekunden Wartezeit an
    - Keine Fehler oder Warnungen in den Entwicklertools `console`
    - Nur eine Anfrage, um Organisationsdetails abzurufen
    - Nur eine Anfrage, um die Organisations-Repo-Liste abzurufen
