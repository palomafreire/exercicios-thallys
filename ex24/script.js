function contar() {
    let res = document.getElementById('resultado');
    res.innerHTML += `<p>Contagem Regressiva de 10 a 1 </p>`
    
    for (let i = 10; i >= 1; i--) {
        res.innerHTML += `${i} &#x1F449 `;
    }
    res.innerHTML += `&#x1F3C1`;
}