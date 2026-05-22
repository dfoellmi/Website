const geheimeTexte = [
  "Gib mir noch zwei Wochen",
  "Okay okay, wir kochen",
  "Noch geheim, aber bald live",
  "Du bist zu früh dran ;)"
];

let aktuellerText = 0;

function aendereText() {
  const text = document.getElementById("text");

  text.textContent = geheimeTexte[aktuellerText];
  text.classList.add("pulse");

  aktuellerText = aktuellerText + 1;

  if (aktuellerText === geheimeTexte.length) {
    aktuellerText = 0;
  }
}

function berechnePace() {
  const distanz = Number(document.getElementById("distanz").value);
  const stunden = Number(document.getElementById("stunden").value);
  const minuten = Number(document.getElementById("minuten").value);
  const ergebnis = document.getElementById("pace-ergebnis");

  const gesamtMinuten = stunden * 60 + minuten;
  const pace = gesamtMinuten / distanz;

  const paceMinuten = Math.floor(pace);
  const paceSekunden = Math.round((pace - paceMinuten) * 60);

  ergebnis.textContent =
    `Du musst ca. ${paceMinuten}:${String(paceSekunden).padStart(2, "0")} min/km laufen.`;
}
