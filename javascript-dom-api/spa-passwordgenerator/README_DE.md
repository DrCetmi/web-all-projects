# Passwort-Generator

[![Statusübersicht-Badge](../../blob/badges/.github/badges/autograding/badge.svg)](#Ergebnisse)

Beschreibung:

- Diese App generiert Passwörter.

- Es sollte eine Schaltfläche "Generate Password" geben, auf die der Nutzer klicken kann, um ein neues Passwort mit allen Buchstaben und verschiedenen Zeichen anzuzeigen.

- In der Standardeinstellung sollte das generierte Passwort gemischte Groß- und Kleinschreibung verwenden.

Erstelle eine Passwortgenerator-WebApp mit den folgenden Anweisungen:

1. Verwende die Konstante "charset" in deiner Funktion (verschiebe sie dorthin). Sie enthält alle zu verwendenden Zeichen.

```javascript
const charset = 'abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:_';
```

2. Deine Funktion sollte 2 Argumente haben:

   - length (Zahl) Die Länge des Kennworts
   - mixedCase (Boolean) Ob gemischte Groß- und Kleinschreibung verwendet werden soll oder nicht.

3. Wenn das zweite Argument wahr ist, wird jedes dritte Zeichen in Großbuchstaben geschrieben.
4. Verwende die Funktion `getRandomInt()`, um Zufallszahlen zu erzeugen, wenn du sie brauchst.
5. Erstelle ein "form"-Element und füge darin ein **input** "id="length"-Feld ein, um die Länge des Passworts festzulegen. Der Standardwert ist "_20_".
6. Füge ein **Kontrollkästchen** (checkbox) `id="mixedCases"` in das Formular ein, um festzulegen, ob das Kennwort gemischte Groß- und Kleinschreibung verwenden soll - der Standardwert ist `true` (gemischte Groß- und Kleinschreibung).
7. Registriere ein _submit_ Formularereignis für das _Formular_, um ein neues Passwort zu generieren.
8. Aktualisiere das generierte Passwort innerhalb des **div** "`id="output"`" Elements.
9. Generiere das erste Passwort, sobald die Seite geladen ist, mit einer Standardlänge von 20.

Beispiele für generierte Passwörter: - 876FocMkcCv98teXc(Ov - %lfXcrLt-#ke3r6R5§-? - Nd1Z\$yRx

> Tipp: Schau dir die folgende Darstellung an, um eine Vorstellung davon zu bekommen, wie dein Ergebnis aussehen sollte.

![demo](demo.gif)
