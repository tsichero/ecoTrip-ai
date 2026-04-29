function generateTrip() {
  const destination = document.getElementById("destination").value.trim();
  const type = document.getElementById("type").value;
  const result = document.getElementById("result");

  if (!destination) {
    result.innerHTML = "⚠️ Digite um destino primeiro.";
    return;
  }

  result.innerHTML = "🧠 Pensando na sua viagem...";

  setTimeout(() => {
    const responses = {
      eco: `🌱 Viagem sustentável para ${destination}`,
      luxo: `✨ Viagem de luxo para ${destination}`,
      aventura: `🏔️ Aventura inesquecível em ${destination}`
    };

    result.innerHTML = responses[type];
  }, 800);
}
