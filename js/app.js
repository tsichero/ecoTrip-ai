function generateTrip() {
  const destination = document.getElementById("destination").value;
  const type = document.getElementById("type").value;
  const result = document.getElementById("result");

  if (!destination) {
    result.innerHTML = "⚠️ Digite um destino primeiro.";
    return;
  }

  let message = "";

  if (type === "eco") {
    message = `🌱 Viagem sustentável para ${destination}: use transporte público e priorize hospedagens ecológicas.`;
  } 
  else if (type === "luxo") {
    message = `✨ Viagem premium para ${destination}: hotéis 5 estrelas e experiências exclusivas recomendadas.`;
  } 
  else if (type === "aventura") {
    message = `🏔️ Aventura em ${destination}: trilhas, experiências locais e contato direto com a natureza.`;
  }

  result.innerHTML = message;
}
