function calcularIdade() {
    let ano = window.prompt('Em que ano você nasceu?');
    const anoAtual = new Date().getFullYear();
    let res = document.getElementById('resultado');
    res.innerHTML = `Quem nasceu em ${ano} vai completar <mark>${anoAtual - ano}</mark> anos em ${anoAtual}.`
}