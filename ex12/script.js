function parImpar() {
    let num = Number(window.prompt('Digite um número:'));
    let res = document.getElementById('resultado');
    if (num % 2 == 0) {
        res.innerHTML = `O número ${num} é <mark>PAR</mark>!`;
    } else {
        res.innerHTML = `O número ${num} é <mark>ÍMPAR</mark>!`;
    }
}