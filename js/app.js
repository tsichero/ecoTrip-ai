function generateTrip() {
  const destination = document.getElementById("destination").value;
  const type = document.getElementById("type").value;
  const result = document.getElementById("result");

  if (!destination) {
    result.innerHTML = "⚠️ Digite um destino primeiro.";
    return;
  }

  const responses = {
    eco: `🌱 Viagem sustentável para ${destination}`,
    luxo: `✨ Viagem de luxo para ${destination}`,
    aventura: `🏔️ Aventura em ${destination}`
  };

  result.innerHTML = responses[type];
}
