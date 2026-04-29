function generateTrip() {
  const destination = document.getElementById("destination").value.trim();
  const type = document.getElementById("type").value;
  const result = document.getElementById("result");

  if (!destination) {
    result.innerHTML = "⚠️ Digite um destino primeiro.";
    return;
  }

  result.innerHTML = "🧠 Analisando sua viagem...";

  setTimeout(() => {
    const responses = {
      eco: `🌱 Viagem sustentável para ${destination} com foco em natureza e baixo impacto ambiental.`,
      luxo: `✨ Experiência premium em ${destination} com hospedagens e serviços exclusivos.`,
      aventura: `🏔️ Jornada de aventura em ${destination} com trilhas, exploração e adrenalina.`
    };

    result.innerHTML = responses[type];
  }, 900);
}
