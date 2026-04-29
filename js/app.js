function generateTrip() {
  const destination = document.getElementById("destination").value.trim();
  const type = document.getElementById("type").value;
  const result = document.getElementById("result");

  if (!destination) {
    result.innerHTML = "⚠️ Informe um destino.";
    return;
  }

  result.classList.add("loading");
  result.innerHTML = "🧠 Gerando experiência personalizada...";

  setTimeout(() => {
    const base = {
      eco: {
        emoji: "🌱",
        text: "Experiência sustentável",
        extra: "com foco em natureza, transporte consciente e hospedagens ecológicas."
      },
      luxo: {
        emoji: "✨",
        text: "Experiência premium",
        extra: "com hotéis 5 estrelas, gastronomia refinada e conforto absoluto."
      },
      aventura: {
        emoji: "🏔️",
        text: "Experiência de aventura",
        extra: "com trilhas, exploração e atividades de alta adrenalina."
      }
    };

    const trip = base[type];

    result.classList.remove("loading");
    result.innerHTML = `
      ${trip.emoji} <b>${trip.text} em ${destination}</b><br><br>
      ${trip.extra}
    `;
  }, 1100);
}
