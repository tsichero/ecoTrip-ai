function generateTrip() {
  const destination = document.getElementById("destination").value.trim();
  const type = document.getElementById("type").value;
  const result = document.getElementById("result");

  if (!destination) {
    result.innerHTML = "⚠️ Digite um destino primeiro.";
    return;
  }

  // efeito de IA trabalhando
  result.innerHTML = "🧠 Analisando destino...";

  setTimeout(() => {
    const responses = {
      eco: `🌱 Viagem sustentável para ${destination}`,
      luxo: `✨ Experiência de luxo em ${destination}`,
      aventura: `🏔️ Aventura intensa em ${destination}`
    };

    result.innerHTML = responses[type];
  }, 900);
}
