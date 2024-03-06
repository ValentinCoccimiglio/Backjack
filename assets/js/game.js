
//2 C = Two of clubs (treboles)
//2 D = Two of diamonds (diamantes)
//2 H = Two of hearts (corzarones)
//2 S = Two of spades (espadas)

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];


//Crea nuevo deck
const crearDeck = () => {

    for ( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipos ){
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipos) {
        for( let esp of especiales) {
            deck.push( esp + tipos);
        }
    }

    deck = _.shuffle( deck );
    console.log( deck);
    return deck;
};

crearDeck();

//esta funcion permite tomar una carta
const pedirCarta = () => {

    const carta = deck.pop();

    console.log(deck);
    console.log(carta);
    return carta;
};
pedirCarta(); 