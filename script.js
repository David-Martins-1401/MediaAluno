function calcularMedia() {
    
    let nota1 = document.getElementById('nota1').value;
    let nota2 = document.getElementById('nota2').value;
    let nota3 = document.getElementById('nota3').value;
    let nota4 = document.getElementById('nota4').value;
    let nota5 = document.getElementById('nota5').value;

    
    if (nota1 === "" || nota2 === "" || nota3 === "" || nota4 === "" || nota5 === "") {
        document.getElementById('resultado').textContent = "Não foram inseridas todas as notas, otário :)";
        return;
    }

    
    nota1 = parseFloat(nota1);
    nota2 = parseFloat(nota2);
    nota3 = parseFloat(nota3);
    nota4 = parseFloat(nota4);
    nota5 = parseFloat(nota5);

    
    let media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

   
    let resultado;
    if (media >= 6) {
        resultado = `Aprovado com média ${media.toFixed(2)}`;
    } else {
        resultado = `Reprovado com média ${media.toFixed(2)}`;
    }

    
    document.getElementById('resultado').textContent = resultado;
}
