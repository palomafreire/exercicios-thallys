function calcular() {
    let num = Number(window.prompt('Digite um número:'));
    var res = document.getElementById('resultado');
    res.innerHTML = `O número analisado aqui é o <strong>${num}</strong>.`;
    res.innerHTML += `<hr>`;
    res.innerHTML += `<br>O seu valor absoluto é ${Math.abs(num)}.`;
    res.innerHTML += `<br>A sua parte inteira é ${Math.trunc(num)}.`;
    res.innerHTML += `<br>O valor inteiro mais próximo é ${Math.round(num)}.`;
    res.innerHTML += `<br>A sua raiz quadrada é ${Math.sqrt(num).toFixed(2)}.`;
    res.innerHTML += `<br>A sua raiz cúbica é ${Math.cbrt(num).toFixed(2)}.`;
    res.innerHTML += `<br>O valor de ${num}<sup>2</sup> é ${Math.pow(num, 2)}.`;
    res.innerHTML += `<br>O valor de ${num}<sup>3</sup> é ${Math.pow(num, 3)}.`;

}