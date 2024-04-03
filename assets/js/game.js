
    (() => { 

        'use strict'

        let deck            = [];
        const tipos         = ['C', 'D', 'H', 'S'],
                especiales    = ['A', 'J', 'Q', 'K'];

        let puntosJugador = [];

    //Refes de html
    const btnPedir = document.querySelector('#btnPedir'),
         btnDetener = document.querySelector('#btnDetener'),
         btnNuevo = document.querySelector('#btnNuevo');


    const divCartasJugador = document.querySelector('#jugador-carta'),
         divCartasComputadora = document.querySelector('#computadora-carta'),
         puntosHtml = document.querySelectorAll('small');


    const inicializarJuego = ( numJugadores = 1 ) => {
        deck = crearDeck();
        for( let i = 0; i< numJugadores; i ++) {
            puntosJugadores.push(0);
        }
    }

    //Crea nuevo deck
    const crearDeck = () => {
        deck = [];

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

        return _.shuffle( deck );;
        
    };


    //esta funcion permite tomar una carta
    const pedirCarta = () => {
        if ( deck.length === 0 ) {
            throw 'No hay cartas en el deck';
        }
        return deck.pop();
    };
    
    const valorCarta = ( carta ) => {
        const valor = carta.substring(0, carta.length - 1);
            return( isNaN( valor )) ? 
                ( valor === 'A') ? 11 : 10
                : valor * 1;
    }

    const acumularPuntos =() => {}
    //Turno computadora

    const turnoComputadora = (puntosMinimos) => {

        do {
            const carta = pedirCarta();

            puntosComputadora = puntosComputadora + valorCarta(carta);
            puntosHtml [1].innerText = puntosComputadora;

            const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cards/${ carta }.png`;
            imgCarta.classList.add('carta');
            divCartasComputadora.append (imgCarta);

            if(puntosMinimos > 21){
                break
            };



        } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );

        setTimeout( () => {

            if( puntosComputadora === puntosMinimos) {
                alert('Nadie gana :(');
            } else if (puntosMinimos > 21) {
                alert( 'Computadora gana')
            } else if (puntosComputadora > 21) {
                alert('Jugador gana')
            } else {
                alert ('Computadora gana')
            }

        }, 30);

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
            turnoComputadora(puntosJugador);
            btnDetener.disabled = true;
            divCartasJugador.append (imgCarta)
        

        } else if (puntosJugador === 21) {
            console.warn('21, Genial!');
            btnPedir.disabled = true;
            turnoComputadora(puntosJugador);
            btnDetener.disabled = true;
        
        }
    });

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;

        turnoComputadora( puntosJugador );
    });

    btnNuevo.addEventListener('click', () => {
        console.clear
        deck = crearDeck();

        puntosJugador       = 0;
        puntosComputadora   = 0;
        puntosHtml [0]      = 0;
        puntosHtml [1]      = 0;

        divCartasComputadora.innerHTML = '';
        divCartasJugador.innerHTML = '';

        btnPedir.disabled = false;
        btnDetener.disabled = false;
    } )


        const personajes = []
    })();
