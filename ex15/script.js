function analisar() {
    const data = new Date();
    const semana = ['Sáb','Dom','Seg', 'Ter', 'Qua', 'Qui', 'Sex'];

    let res = document.getElementById('resultado');
    

    res.innerHTML = `<p>Dia: ${data.getDay()}`;
    res.innerHTML += `<p>Mês: ${data.getMonth() + 1}`;
    res.innerHTML += `<p>Ano: ${data.getFullYear()}`;
    res.innerHTML += `<p>Dia da Semana: ${semana[data.getUTCDay()]}`;
    res.innerHTML += `<p>Hora: ${data.getHours()}`;
    res.innerHTML += `<p>Minuto: ${data.getMinutes()}`;
    res.innerHTML += `<p>Segundo: ${data.getSeconds()}</p>`;

}

