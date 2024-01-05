function maiorValor() {
    let num1 = Number(window.prompt('Digite um número:'));
    let num2 = Number(window.prompt('Digite outro número:'));
    let res = document.getElementById('resultado');
    if (num1 > num2) {
        res.innerHTML = `Analisando os valores ${num1} e ${num2}, o maior valor é ${num1}!`;
    } else {
        res.innerHTML = `Analisando os valores ${num1} e ${num2}, o maior valor é ${num2}!`;
    }
}