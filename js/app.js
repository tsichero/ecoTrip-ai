function generateTrip() {
  const destination = document.getElementById("destination").value;
  const type = document.getElementById("type").value;
  const result = document.getElementById("result");

  if (!destination) {
    result.innerHTML = "⚠️ Digite um destino primeiro.";
    return;
  }

  const messages = {
    eco: `🌱 Viagem sustentável para ${destination}: priorize transporte público e hospedagens ecológicas.`,
    luxo: `✨ Viagem de luxo para ${destination}: hotéis premium e experiências exclusivas.`,
    aventura: `🏔️ Aventura em ${destination}: trilhas, natureza e experiências intensas.`
  };

  result.innerHTML = messages[type];
}
