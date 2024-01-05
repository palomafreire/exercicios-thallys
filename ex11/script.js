function calcularMedia() {
    let nome = window.prompt(`Qual e o nome do(a) aluno(a)?`);
    let nota1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`));
    let nota2 = Number(window.prompt(`Alem de ${nota1}, qual foi a outra nota de ${nome}?`));
    let media = (nota1 + nota2) / 2;
    let res = document.getElementById('resultado');
    res.innerHTML = `Calculando a media final de <mark>${nome}</mark>. <br><br>As notas obtidas foram <mark>${nota1}</mark> e <mark>${nota2}</mark>. <br><br>A media final e <mark>${media}</mark>.`;
    if (media >= 6) {
        res.innerHTML += `<p> A mensagem que temos e: Meus parabens!</p>`
    } else {
        res.innerHTML += `<p> A mensagem que temos e: Estude um pouco mais!</p>`
    }
   
}