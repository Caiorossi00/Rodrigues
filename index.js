function enviarWhatsapp() {
  const numero = "555384796866";
  const mensagem = "Olá, vim pelo site, gostaria de mais informações sobre os serviços.";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}

function abrirMaps() {
  const latitude = -32.560123;
  const longitude = -53.375456;

  const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
  window.open(url, "_blank");
}
