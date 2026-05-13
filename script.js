new QRCode(document.getElementById("qrcode"), {
    text: urlPagina,
    width: 280,
    height: 280,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});
