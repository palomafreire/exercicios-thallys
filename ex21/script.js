function contar() {
    let res = document.getElementById('resultado');
    res.innerHTML += `<p>Contando de 1 até 10: </p>`
    
    for (let i = 1; i <= 10; i++) {
        res.innerHTML += `${i} &#x1F449 `;
    }
    res.innerHTML += `&#x1F3C1`;
}