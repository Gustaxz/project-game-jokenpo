const valores = ['PEDRA', 'PAPEL', 'TESOURA']
const counters = ['PAPEL', 'TESOURA', 'PEDRA']

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

let valorSorteado  = getRandomInt(0,3)
let jogadaCPU = valores[valorSorteado]

var minhaJogada = valores[0]

console.log(jogadaCPU, counters[valorSorteado], minhaJogada)


if (minhaJogada == counters[valorSorteado]) {
    console.log('Você venceu')
} else if (jogadaCPU == counters[0]) {
    console.log('Você perdeu')
} else {
    console.log('Empate')
}