var largura = 0;
var altura = 0;

var vidas = 1;

var tempo = 15;

var criaMosquitoTempo = "";

var nivel = window.location.search;
nivel = nivel.replace("?", "");

if (nivel === "facil") {
    // atribui o tempo de 2 segundos
    criaMosquitoTempo = 2000;

} else if (nivel === "normal") {
    // atribui o tempo de 1 segundo
    criaMosquitoTempo = 1000;

} else if (nivel === "dificil") {
    // atribui o tempo de 0.75 segundos
    criaMosquitoTempo = 750;
}

function ajustaTamanhoTela() {

    largura = window.innerWidth;
    altura = window.innerHeight;

    posicaoAleatoria();
}

var cronometro = setInterval(function () {

    if (tempo < 0) {

        clearInterval(cronometro);
        clearInterval(criaMosquito);
        window.location.href = "victory.html"

    } else {

        document.getElementById("cronometro").innerHTML = tempo;
        tempo -= 1
    }

}, 1000);


function posicaoAleatoria() {

    // remove o mosquito anterior da tela
    if (document.getElementById("mosquito")) {
        document.getElementById("mosquito").remove();

        if (vidas > 3) {
            window.location.href = "game_over.html";

        } else {
            // assim que o mosquito some da tela, o coração cheio é trocado pelo coração vazio
            document.getElementById("v" + vidas).src = "img/coracao_vazio.png";

            vidas++;
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;


    // criando o elemento (mosquito) html de forma dinâmica
    var mosquito = document.createElement("img");
    mosquito.src = "img/mosca.png";
    mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio();
    mosquito.style.position = "absolute";
    mosquito.style.left = posicaoX + "px";
    mosquito.style.top = posicaoY + "px";
    mosquito.id = "mosquito";
    mosquito.onclick = function () {
        this.remove();
    }

    document.body.appendChild(mosquito);

}

// faz o tamanho do mosquito ser alterado dinamicamente
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

// faz o mosquito ter a imagem espelhada dinamicamente
function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2);

    switch (classe) {
        case 0:
            return "ladoA";

        case 1:
            return "ladoB";

    }
}

// fazendo o mosquito aparecer na tela automaticamente no tempo determinado pelo nível de dificuldade selecionado pelo jogador
var criaMosquito = setInterval(function () { ajustaTamanhoTela() }, criaMosquitoTempo);
