async function generateTrip() {
  const destination = document.getElementById("destination").value;
  const type = document.getElementById("type").value;
  const result = document.getElementById("result");

  if (!destination) {
    result.innerHTML = "⚠️ Digite um destino primeiro.";
    return;
  }

  result.innerHTML = "🧠 Processando com IA...";

  // ativa modo IA (simulado ou real)
  const response = await getAIResponse(destination, type);

  result.innerHTML = response;
}


// ================================
// 🔥 CAMADA DE IA (SIMULADA + REAL READY)
// ================================

async function getAIResponse(destination, type) {

  // 🔹 MODO 1: IA SIMULADA (já funciona agora)
  const simulatedAI = () => {
    const base = {
      eco: `🌱 A IA sugere uma viagem sustentável para ${destination}, priorizando transporte público, hospedagens verdes e experiências locais de baixo impacto ambiental.`,
      luxo: `✨ A IA recomenda uma experiência premium em ${destination}, com hotéis 5 estrelas, gastronomia exclusiva e roteiros personalizados de alto padrão.`,
      aventura: `🏔️ A IA indica uma jornada de aventura em ${destination}, com trilhas, natureza extrema e experiências imersivas locais.`
    };

    return base[type];
  };


  // 🔹 MODO 2: IA REAL (Gemini/OpenAI READY)
  const useRealAI = false; // troque para true quando tiver API KEY

  if (!useRealAI) {
    return simulatedAI();
  }

  // ================================
  // 🤖 EXEMPLO OPENAI / GEMINI READY
  // ================================

  try {
    const prompt = `
Você é um especialista em turismo inteligente e sustentável.
Crie uma sugestão de viagem para:
Destino: ${destination}
Tipo: ${type}

Responda de forma curta, prática e envolvente.
`;

    // 🔸 EXEMPLO OPENAI (placeholder)
    const apiKey = "SUA_API_KEY_AQUI";

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }]
      })
    });

    const data = await response.json();
    return "🤖 IA REAL: " + data.choices[0].message.content;

  } catch (error) {
    return "⚠️ Erro ao conectar com IA. Voltando para modo simulado.";
  }
}
