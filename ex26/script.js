function contar() {
    let res = document.getElementById('resultado');
    let valorInicial = document.getElementById('valorInicial').value;
    let valorFinal = document.getElementById('valorFinal').value;

    res.innerHTML += `<p>Contando de ${valorInicial} até ${valorFinal}: </p>`
    
    if (valorInicial <= valorFinal) {
        for (let i = valorInicial; i <= valorFinal; i++) {
            res.innerHTML += `${i} &#x1F449 `;
        }
    } else {
        for (let i = valorInicial; i >= valorFinal; i--) {
            res.innerHTML += `${i} &#x1F449 `;
        }

    }
    res.innerHTML += `&#x1F3C1`;
}