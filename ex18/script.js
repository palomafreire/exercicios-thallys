const alvo = Math.trunc((Math.random() * 100) + 1);
let res = document.getElementById('resultado');
function jogar() {
    let tentativa = Number(window.prompt('Qual seu palpite?'));
    if (tentativa == alvo) {
        res.innerHTML += `<p>PARABÉNS! Você acertou! Eu tinha sorteado o número <mark>${alvo}</mark>!`;
    } else {
        if (tentativa < alvo) {
            res.innerHTML += `<p> Você falou ${tentativa}. Meu número é MAIOR!`;
        } else {
            res.innerHTML += `<p>Você falou ${tentativa}. Meu número é MENOR!`;
        }
    }
}