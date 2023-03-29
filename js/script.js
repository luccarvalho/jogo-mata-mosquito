function iniciarJogo() {

    var nivel = document.getElementById("nivel").value;

    if (nivel === "") {
        alert("Selecione um nível para iniciar o jogo");
        return false;
    }
}