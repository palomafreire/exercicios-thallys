function interagir() {
    const dataAtual = new Date();
    let res = document.getElementById('resultado');
    res.innerHTML = `O que eu recebi do sistema foi <mark>${dataAtual}</mark>!`;
}