function contar() {
    let res = document.getElementById('resultado');
    res.innerHTML += `<p>Contando de 1 até 10, marcando os pares</p>`
    
    for (let i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            res.innerHTML += `<mark>${i}</mark> &#x1F449 `;
        } else {
            res.innerHTML += `${i} &#x1F449 `;
        }
    }
    res.innerHTML += `&#x1F3C1`;
}