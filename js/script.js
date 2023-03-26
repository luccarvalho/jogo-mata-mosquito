var largura = 0;
var altura = 0;

function ajustaTamanhoTela() {

    largura = window.innerWidth;
    altura = window.innerHeight;

    posicaoAleatoria();
}

// fazendo o mosquito aparecer na tela automaticamente a cada 1 segundo
setInterval(function () { ajustaTamanhoTela() }, 1000);


function posicaoAleatoria() {

    // remove o mosquito anterior da tela
    if (document.getElementById("mosquito")) {
        document.getElementById("mosquito").remove();
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY);

    // criando o elemento (mosquito) html de forma dinâmica
    var mosquito = document.createElement("img");
    mosquito.src = "img/mosca.png";
    mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio();
    mosquito.style.position = "absolute";
    mosquito.style.left = posicaoX + "px";
    mosquito.style.top = posicaoY + "px";
    mosquito.id = "mosquito";

    document.body.appendChild(mosquito);

}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3);

    switch (classe) {
        case 0:
            return "mosquito1";

        case 1:
            return "mosquito2";

        case 2:
            return "mosquito3";
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2);

    switch (classe) {
        case 0:
            return "ladoA";

        case 1:
            return "ladoB";

    }
}


