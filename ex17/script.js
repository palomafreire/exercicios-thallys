let res = document.getElementById('resultado');

function gerarNumeros() {
    let numAleatorio = Math.floor(Math.random() * 100) + 1;
    res.innerHTML += `<p>Acabei de pensar no número <mark>${numAleatorio}</mark>!</p>`
}

function limpar() {
    res.innerHTML = 'Cada vez que você apertar o botão acima, eu penso em um número entre 1 e 100.';
}