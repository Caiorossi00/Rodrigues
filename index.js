function enviarWhatsapp() {
  const numero = "555384796866";
  const mensagem = "Olá, vim pelo site, gostaria de mais informações sobre os serviços.";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}

function abrirMaps() {
  const url = "https://www.google.com/maps?q=-32.558339,-53.357746";
  window.open(url, "_blank");
}
