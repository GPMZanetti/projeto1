function trocarImagem()
{
    var imagem = document.getElementById('imagemLED');
    if (imagem.src.match('led_apagado'))
    {
        $.post("http://localhost:3000/light/on", {}, function(returnedData, statusRequest) {
            alert("Data: " + returnedData.data + "\nStatus: " + statusRequest);
        });
        imagem.src = '../public/imagens/led_aceso.png';
    }
    else
    {
        $.post("http://localhost:3000/light/off", {}, function(returnedData, statusRequest) {
            alert("Data: " + returnedData.data + "\nStatus: " + statusRequest);
        });
        imagem.src = '../public/imagens/led_apagado.png';
    }
}