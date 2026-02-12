function enviarWhatsapp() {
  const numero = "5553999999999";
  const mensagem = "Olá, gostaria de mais informações sobre os serviços.";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}

function abrirMaps() {
  const endereco = "Corredor das Tropas, 794, Jaguarão";
  const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    endereco
  )}`;
  window.open(url, "_blank");
}
