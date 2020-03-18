function trocarImagem()
{
    var imagem = document.getElementById('imagemLED');
    if (imagem.src.match('led_apagado'))
    {
        $.post("/light/on", {}, function(returnedData, statusRequest) {
            alert("Data: " + returnedData + "\nStatus: " + statusRequest);
        });
        imagem.src = '../public/imagens/led_aceso.png';
    }
    else
    {
        $.post("/light/off", {}, function(returnedData, statusRequest) {
            alert("Data: " + returnedData + "\nStatus: " + statusRequest);
        });
        imagem.src = '../public/imagens/led_apagado.png';
    }
}