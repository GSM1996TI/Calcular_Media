function calcularMediaEStatus() {
    var inNome = document.getElementById("inNome");
    var inNota1 = document.getElementById("inNota1");
    var inNota2 = document.getElementById("inNota2");
    var inNota3 = document.getElementById("inNota3");
    var inNota4 = document.getElementById("inNota4");
    var outSituacao = document.getElementById("outSituacao");
    var outMedia = document.getElementById("outMedia");
    var resultImage = document.getElementById("resultImage");
    var nome = inNome.value;
    var nota1 = Number(inNota1.value);
    var nota2 = Number(inNota2.value);
    var nota3 = Number(inNota3.value);
    var nota4 = Number(inNota4.value);
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4) || nome.trim() === "") {
        outSituacao.textContent = "Por favor, preencha todos os campos com valores válidos.";
        outSituacao.style.color = "orange";
        outMedia.textContent = "";
        resultImage.src = "https://placehold.co/300x300/FFA500/000000?text=ATENCAO";
        resultImage.alt = "Imagem de aviso";
        return;
    }
    var media = (nota1 + nota2 + nota3 + nota4) / 4;
    outMedia.textContent = "Média das Notas: " + media.toFixed(1);
    if (media >= 7) {
        outSituacao.textContent = "Parabéns " + nome + "! Você foi aprovado(a)!";
        outSituacao.style.color = "blue";
        resultImage.src = "exerc.jpg";
        resultImage.alt = "Imagem de aluno aprovado";
    } else if (media >= 4) {
        outSituacao.textContent = "Atenção " + nome + ". Você está em exame.";
        outSituacao.style.color = "green";
        resultImage.src = "https://placehold.co/300x300/008000/FFFFFF?text=EXAME";
        resultImage.alt = "Imagem de aluno em exame";
    } else {
        outSituacao.textContent = "Ops " + nome + "... Você foi reprovado(a).";
        outSituacao.style.color = "red";
        resultImage.src = "https://placehold.co/300x300/FF0000/FFFFFF?text=REPROVADO";
        resultImage.alt = "Imagem de aluno reprovado";
    }
}
var btResultado = document.getElementById("btResultado");
btResultado.addEventListener("click", calcularMediaEStatus);
document.addEventListener("DOMContentLoaded", function() {
    var resultImage = document.getElementById("resultImage");
    resultImage.src = "exerc.jpg";
    resultImage.alt = "Imagem inicial do programa de status do aluno";
});
