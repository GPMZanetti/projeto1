function trocarImagem()
{
    var imagem = document.getElementById('imagemLED');
    if (imagem.src.match('led_apagado'))
        imagem.src = '../public/imagens/led_aceso.png';
    else
        imagem.src = '../public/imagens/led_apagado.png';
}