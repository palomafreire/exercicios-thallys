let contador = 0

function contarClicks() {
    contador++;
    let res = document.getElementById('resultado');
    res.innerHTML = `<p>O contador está com ${contador} cliques.</p>`
}

function zerarClicks() {
    contador = 0;
    let res = document.getElementById('resultado');
    res.innerHTML = `<p>O contador está com ${contador} cliques.</p>`
}