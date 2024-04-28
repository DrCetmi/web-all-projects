# Währungsumrechner

In dieser Aufgabe erstellst du einen Währungsumrechner, der die Coinbase API verwendet, um zwischen verschiedenen Kryptowährungen und Fiat-Währungen zu konvertieren.

## Aufgabe:
Deine Aufgabe ist es, eine JavaScript-Anwendung zu entwickeln, die die Eingabe des Benutzers verwendet, um einen bestimmten Betrag einer ausgewählten Kryptowährung in eine andere ausgewählte Währung (z. B. USD, EUR) umzurechnen.

## Anforderungen:

- Deine Anwendung sollte die in `index.html` bereitgestellte Schnittstelle nutzen. Sie enthält ein Auswahl-Dropdown für Kryptowährungen, ein Eingabefeld für den Betrag und eine Schaltfläche **Umrechnen**, um die Umrechnung auszulösen.
- Ändere die Datei `index.html` nicht. Schreibe deinen gesamten Code in der Datei `solution.js`.
- Implementiere deine Logik so, dass beim Drücken der Schaltfläche **Umrechnen** durch den Benutzer, deine Anwendung den Umrechnungskurs von der Coinbase API abruft und das Umrechnungsergebnis dem Benutzer anzeigt.
- Verwende die [Coinbase API](https://docs.cloud.coinbase.com/sign-in-with-coinbase/docs/api-prices#get-spot-price), um den Spotpreis für die gewählte Kryptowährung gegen die ausgewählte Währung abzurufen.

## Anweisungen:

- Führe eine GET-Anfrage an den folgenden Coinbase API-Endpunkt durch, um den Spotpreis abzurufen: `https://api.coinbase.com/v2/prices/{crypto}-{currency}/spot`. Ersetze `{crypto}` durch die ausgewählte Kryptowährung und `{currency}` durch die ausgewählte Währung.
- Denke daran, mögliche Fehler zu behandeln, wie Netzwerkprobleme oder ungültige Benutzereingaben.

Erwartete Ausgabe:
![preview](./demo.gif)

## Punkte, die zu beachten sind:

- Mach dich mit der Coinbase API-Dokumentation vertraut, um zu verstehen, wie du Spotpreise abrufen kannst.
- Beachte die API-Nutzungsbeschränkungen. Zu viele Anfragen in zu kurzer Zeit können deinen Zugang zur API vorübergehend blockieren.

## Viel Erfolg!