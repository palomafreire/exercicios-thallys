function contar() {
    let res = document.getElementById('resultado');
    let valorFinal = document.getElementById('valorFinal').value;
    res.innerHTML += `<p>Contando de 0 até ${valorFinal}: </p>`;
    for (let i = 0; i <= valorFinal; i++) {
        res.innerHTML += `${i} &#x1F449 `;
    }
    res.innerHTML += `&#x1F3C1`;
    
}