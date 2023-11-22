
import { crearCartaHTML, pedirCarta, valorCarta} from ".";
/** turno de la computadora
 * 
 * @param {Number} puntosMinimos puntos minimos para ganar
 * @param {HTMLElement} puntosHTML puntos que se muestran en la pantalla
 * @param {HTMLElement} divCartasComputadora
 * @param {Array<str>} deck arreglo de str
 */

export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if (!puntosMinimos || !deck) throw new Error('puntos minimos son necesarios o deck esat vacio')

    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;

        const imgCarta = crearCartaHTML(carta);
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