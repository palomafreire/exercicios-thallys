function analisar() {
    const data = new Date();
    const mes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const semana = ['Dom','Seg', 'Ter', 'Qua', 'Qui', 'Sex','Sáb'];

    let res = document.getElementById('resultado');
    

    res.innerHTML = `<p>Dia: ${data.getDate()}`;
    res.innerHTML += `<p>Mês: ${mes[data.getMonth()]}`;
    res.innerHTML += `<p>Ano: ${data.getFullYear()}`;
    res.innerHTML += `<p>Dia da Semana: ${semana[data.getDay()]}`;
    res.innerHTML += `<p>Hora: ${data.getHours()}`;
    res.innerHTML += `<p>Minutos: ${data.getMinutes()}`;
    res.innerHTML += `<p>Segundos: ${data.getSeconds()}</p>`;

}

