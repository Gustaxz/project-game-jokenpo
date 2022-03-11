const valores = ['PEDRA', 'PAPEL', 'TESOURA']
const imgs = ['pedra', 'papel', 'tesoura']
const counters = ['PAPEL', 'TESOURA', 'PEDRA']
const display = document.getElementById('display-player')
const comandos = document.getElementsByClassName('comandos')
const imagemPlayer = document.createElement('img')
const imagemCPU = document.createElement('img')
let minhaJogada = ''

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


const textoPlayer = (texto) => {
    const player = document.getElementsByClassName('jogada')[0]    
    minhaJogada = valores[texto]  
    imagemPlayer.setAttribute('src', `./images/${imgs[texto]}.png`)
    player.appendChild(imagemPlayer)

    jogada(texto)

}

const jogada = (valor) => {
    let valorSorteado  = getRandomInt(0,3)
    let jogadaCPU = valores[valorSorteado]
    console.log(jogadaCPU, counters[valorSorteado], minhaJogada)
    const cpu = document.getElementsByClassName('jogada')[1]
    imagemCPU.setAttribute('src', `./images/${imgs[valorSorteado]}.png`)
    cpu.appendChild(imagemCPU)

    if (minhaJogada == counters[valorSorteado]) {
        console.log('Você venceu')
        quemVenceu(0, 1)
    } else if (jogadaCPU == counters[valor]) {
        console.log('Você perdeu')
        quemVenceu(1, 0)
    } else {
        console.log('Empate')
        quemVenceu(1, 0, true)
    }

}


const quemVenceu = (ganhador, perdedor, empate) => {
    const player = document.getElementById('player')
    const cpu = document.getElementById('cpu')
    const jogadores = [player, cpu]
    let winner = jogadores[ganhador]
    let looser = jogadores[perdedor]

   
    if (!empate) {
        winner.innerHTML = 'Venceu'
        winner.style.color = '#008000'
        looser.innerHTML = 'Perdeu'
        looser.style.color = '#d40404'
    } else {
        winner.innerHTML = 'Empatou'
        winner.style.color = '#000000'
        looser.innerHTML = 'Empatou'
        looser.style.color = '#000000'
    }  
}


