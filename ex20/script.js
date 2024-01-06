function estacao() {
    let mes = window.prompt('Digite o mês em extenso (ex: Setembro)');
    mes = mes.toLowerCase();
    let res = document.getElementById('resultado');
    let estacao;

    switch (mes) {
        case 'janeiro':
        case 'fevereiro':
        case 'março':
            estacao = 'verão';
            break;
        case 'abril':
        case 'maio':
        case 'junho':
            estacao = 'outono';
            break;
        case 'julho':
        case 'agosto':
        case 'setembro':
            estacao = 'inverno';
            break;
        case 'outubro':
        case 'novembro':
        case 'dezembro':
            estacao = 'primavera';
            break;
        default: {
            estacao = 'INDEFINIDA';
            break;
        }
    }
    res.innerHTML = `No mês de <mark>${mes}</mark>, estamos na estação <mark>${estacao}</mark>`;
}