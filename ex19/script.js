let res = document.getElementById('resultado');

function iniciar() {
    let num1 = Number(window.prompt('Primeiro valor:'));
    let num2 = Number(window.prompt('Segundo valor:'));
    let operacao = window.prompt(`Valores informados: ${num1} e ${num2}. 
O que vamos fazer?
[1] Somar 
[2] Subtrair 
[3] Multiplicar 
[4] Dividir`);
    switch (operacao) {
        case '1': {
            res.innerHTML = `Calculando...`;
            res.innerHTML += `<p>${num1} + ${num2} = ${(num1 + num2)}</p>`;
            break;
        }
        case '2': {
            res.innerHTML = `Calculando...`;
            res.innerHTML += `<p>${num1} - ${num2} = ${(num1 - num2)}</p>`;
            break;
        }
        case '3': {
            res.innerHTML = `Calculando...`;
            res.innerHTML += `<p>${num1} * ${num2} = ${(num1 * num2)}</p>`;
            break;
        }
        case '4': {
            res.innerHTML = `Calculando...`;
            res.innerHTML += `<p>${num1} / ${num2} = ${(num1 / num2).toFixed(3)}</p>`;
            break;
        }
        default: {
            res.innerHTML = `OPÇÃO INVÁLIDA! Você digitou ${num1} e ${num2}, mas não sei o que fazer com eles.`;
        }
    }

}