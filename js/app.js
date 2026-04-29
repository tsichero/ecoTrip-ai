function generateTrip() {
  const destination = document.getElementById("destination").value.trim();
  const type = document.getElementById("type").value;
  const result = document.getElementById("result");

  if (!destination) {
    result.innerHTML = "⚠️ Digite um destino.";
    return;
  }

  result.innerHTML = "🧠 Processando...";

  setTimeout(() => {
    const data = {
      eco: `🌱 Viagem sustentável para ${destination}`,
      luxo: `✨ Experiência premium em ${destination}`,
      aventura: `🏔️ Aventura intensa em ${destination}`
    };

    result.innerHTML = data[type];
  }, 900);
}

function askBot() {
  const input = document.getElementById("chatInput").value.toLowerCase();
  const chat = document.getElementById("chatResult");

  if (!input) {
    chat.innerHTML = "⚠️ Faça uma pergunta.";
    return;
  }

  chat.innerHTML = "💭 Pensando...";

  setTimeout(() => {
    if (input.includes("paris")) {
      chat.innerHTML = "🇫🇷 Paris: Torre Eiffel, Louvre, cafés e passeios no Sena.";
    } else if (input.includes("o que fazer")) {
      chat.innerHTML = "🌍 Explore atrações locais, gastronomia e experiências culturais.";
    } else {
      chat.innerHTML = "✈️ Posso sugerir pontos turísticos, roteiros e experiências.";
    }
  }, 800);
}
