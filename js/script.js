var largura = 0;
var altura = 0;

function ajustaTamanhoTela() {

    largura = window.innerWidth;
    altura = window.innerHeight;

    console.log(largura, altura);
}

ajustaTamanhoTela();

var posicaoX = Math.floor(Math.random() * largura) - 90;
var posicaoY = Math.floor(Math.random() * altura) - 90;

posicaoX = posicaoX < 0 ? 0 : posicaoX;
posicaoY = posicaoY < 0 ? 0 : posicaoY;

console.log(posicaoX, posicaoY);

// criando o documento html
var mosquito = document.createElement("img");
mosquito.src = "img/mosca.png";
mosquito.className = tamanhoAleatorio();
mosquito.style.position = "absolute";
mosquito.style.left = posicaoX + "px";
mosquito.style.top = posicaoY + "px";

document.body.appendChild(mosquito);

// function tamanhoAleatorio() {
//     var classe = Math.floor(Math.random() * 3);

//     switch (classe) {
//         case 0:
//             return "mosquito1";

//         case 1:
//             return "mosquito2";

//         case 2:
//             return "mosquito3";
//     }
// }

// console.log(tamanhoAleatorio());

