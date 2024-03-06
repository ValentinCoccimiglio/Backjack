
//2 C = Two of clubs (treboles)
//2 D = Two of diamonds (diamantes)
//2 H = Two of hearts (corzarones)
//2 S = Two of spades (espadas)

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];
let puntosJugador = 0,
    puntosComputadora = 0;

//Refes de html
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');

const puntosHtml = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-carta');
const divCartasComputadora = document.querySelector('#computadora-carta')


//Crea nuevo deck
const crearDeck = () => {

    for ( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipos ){
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipos) {
        for( let esp of especiales) {
            deck.push( esp + tipo);
        }
    }

    deck = _.shuffle( deck );
    console.log( deck);
    return deck;
};

crearDeck();

//esta funcion permite tomar una carta
const pedirCarta = () => {
    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
};
 

const valorCarta = ( carta ) => {
    const valor = carta.substring(0, carta.length - 1);
        return( isNaN( valor )) ? 
            ( valor === 'A') ? 11 : 10
            : valor * 1;
}
//Turno computadora

const turnoComputadora = (puntosMinimos) => {

    do {
        const carta = pedirCarta();

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHtml[1].innerText = puntosComputadora;
        
        
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cards/${ carta }.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );

}





//Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta();

    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHtml [0].innerText = puntosJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cards/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append (imgCarta);

    if (puntosJugador > 21) {
        console.warn('Te pasaste de 21');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        divCartasJugador.append (imgCarta)
    

    } else if (puntosJugador === 21) {
        console.warn('21, Genial!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
    
    }


});
btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
});
