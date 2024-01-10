function tabuada() {
    let num = document.getElementById('num').value;
    let res = document.getElementById('resultado');
    res.innerHTML = `<p>Tabuada de ${num}</p>`;
    for (let i = 1; i <= 10; i++) {
        res.innerHTML += `<p>${num} x ${i} = ${num * i}</p>`;
    }
}