function fatorial() {
    let res = document.getElementById('resultado');
    let num = document.getElementById('num').value;
    res.innerHTML += `<p>Calculando ${num}!</p>`;
    let fatorial = 1;
    for (let i = num; i > 1; i--) {
        fatorial = fatorial * i;
        res.innerHTML += `${i} x `;
    }
    res.innerHTML += `1 = ${fatorial.toLocaleString('pt-BR')}`;
}