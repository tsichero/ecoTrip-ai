function generateTrip() {
  const destination = document.getElementById("destination").value.trim();
  const type = document.getElementById("type").value;
  const result = document.getElementById("result");

  if (!destination) {
    result.innerHTML = "⚠️ Informe um destino.";
    return;
  }

  result.innerHTML = "🧠 Planejando sua viagem...";

  setTimeout(() => {
    const data = {
      eco: `🌱 Viagem sustentável para ${destination} com foco em natureza e baixo impacto.`,
      luxo: `✨ Experiência premium em ${destination} com hotéis 5 estrelas e serviços exclusivos.`,
      aventura: `🏔️ Aventura em ${destination} com trilhas, exploração e experiências intensas.`
    };

    result.innerHTML = data[type];
  }, 900);
}

/* CHATBOT SIMPLES (PORTFÓLIO PREMIUM) */
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
      chat.innerHTML = "🇫🇷 Em Paris você pode visitar Torre Eiffel, Museu do Louvre, caminhar no Rio Sena e experimentar cafés locais.";
    }
    else if (input.includes("roma")) {
      chat.innerHTML = "🇮🇹 Em Roma: Coliseu, Fontana di Trevi, Vaticano e gastronomia incrível.";
    }
    else if (input.includes("o que fazer")) {
      chat.innerHTML = "🌍 Explore pontos turísticos, experimente a culinária local e reserve tempo para experiências culturais.";
    }
    else {
      chat.innerHTML = "✈️ Posso te ajudar com pontos turísticos, gastronomia e roteiros personalizados. Pergunte de novo!";
    }
  }, 900);
}
