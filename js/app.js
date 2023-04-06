// variáveis que posteriormente receberão a largura e altura da tela de forma dinâmica
let largura = 0;
let altura = 0;

// função que atualiza a largura e altura da tela
function ajustaTamanhoTela() {

    largura = window.innerWidth;
    altura = window.innerHeight;

    posicaoAleatoria();
}

let vidas = 1;

let tempo = 15;

let criaMosquitoTempo = "";

let nivel = window.location.search;
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

let cronometro = setInterval(function () {

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

    // gerando posições aleatórias para o mosquito aparecer na tela
    // baseado nas dimensões que já foram pré-informadas
    let posicaoX = Math.floor(Math.random() * largura) - 90;
    let posicaoY = Math.floor(Math.random() * altura) - 90;

    // utilizando um operador ternário para a posição do mosquito não ficar negativa na tela
    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;


    // criando o elemento (mosquito) html de forma dinâmica
    let mosquito = document.createElement("img");
    mosquito.src = "img/mosca.png";
    // mosquito recebe duas funções em sua classe
    mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio();
    mosquito.style.position = "absolute";
    // aplicando ao elemento as posições aleatórias
    mosquito.style.left = posicaoX + "px";
    mosquito.style.top = posicaoY + "px";
    mosquito.id = "mosquito";
    mosquito.onclick = function () {
        this.remove();
    }

    document.body.appendChild(mosquito);

}

// função que aplica classes ao mosquito de forma randômica
function tamanhoAleatorio() {

    // com base no valor recebido é aplicada uma classe no elemento
    let classe = Math.floor(Math.random() * 3);

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

    let classe = Math.floor(Math.random() * 2);

    switch (classe) {
        case 0:
            return "ladoA";

        case 1:
            return "ladoB";

    }
}

// fazendo o mosquito aparecer na tela automaticamente no tempo determinado pelo nível de dificuldade selecionado pelo jogador
let criaMosquito = setInterval(function () { ajustaTamanhoTela() }, criaMosquitoTempo);
