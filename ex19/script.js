let res = document.getElementById('resultado');

function iniciar() {
    let num1 = Number(window.prompt('Primeiro valor:'));
    let num2 = Number(window.prompt('Segundo valor:'));
    let operacao = window.prompt(`Valores informados: ${num1} e ${num2}. \nO que vamos fazer?\n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir`);
    
    res.innerHTML = `Calculando...`;
    
    switch (operacao) {
        case '1': {
            res.innerHTML += `<p>${num1} + ${num2} = ${(num1 + num2)}</p>`;
            break;
        }
        case '2': {
            res.innerHTML += `<p>${num1} - ${num2} = ${(num1 - num2)}</p>`;
            break;
        }
        case '3': {
            res.innerHTML += `<p>${num1} * ${num2} = ${(num1 * num2)}</p>`;
            break;
        }
        case '4': {
            res.innerHTML += `<p>${num1} / ${num2} = ${(num1 / num2).toFixed(3)}</p>`;
            break;
        }
        default: {
            res.innerHTML = `OPÇÃO INVÁLIDA! Você digitou ${num1} e ${num2}, mas não sei o que fazer com eles.`;
        }
    }

}