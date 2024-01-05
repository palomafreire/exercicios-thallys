function calcularMedia() {
    let nome = window.prompt(`Qual é o nome do(a) aluno(a)?`);
    let nota1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`));
    let nota2 = Number(window.prompt(`Além de ${nota1}, qual foi a outra nota de ${nome}?`));
    let media = (nota1 + nota2) / 2;
    let res = document.getElementById('resultado');
    res.innerHTML = `Calculando a média final de <mark>${nome}</mark>. <br><br>As notas obtidas foram <mark>${nota1}</mark> e <mark>${nota2}</mark>. <br><br>A média final é <mark>${media}</mark>. <br> <br> A mensagem que temos é: `;
    let msg; 
    if (media >= 6) {
        msg = `Meus parabéns!`
    } else {
        msg = `Estude um pouco mais!`
    }
    res.innerHTML += `<strong style='color: red;'>${msg}</strong>`
   
}