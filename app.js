

let randomNumber1 = Math.floor(Math.random() * 6) + 1

let randomImageSource = 'img/dice' + randomNumber1 + '.png'

//alterar o

document.querySelectorAll('img')[0].setAttribute('src', randomImageSource)

//jogador 2 

let randomNumber2 = Math.floor(Math.random() * 6) + 1

let randomImageSource2 = 'img/dice' + randomNumber2 + '.png' // com uma string buscamos as imagens

//alterar o src

document.querySelectorAll('img')[1].setAttribute('src', randomImageSource2)

if ( randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = '🏆 Jogador 1 ganhou!'
} else if (randomNumber2 > randomNumber1) {
    document.querySelector('h1').innerHTML = '🏆 Jogador 2 ganhou!'
}  else {
    document.querySelector('h1').innerHTML = 'Deu empate!'
}

// atualiazr pagina 

function atualizarPagina(){
    location.reload(true)
}
