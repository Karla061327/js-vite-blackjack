
import _ from "underscore";

 
/**
 * 
* @param {Array<str>} tiposCarta ejemplo ['C','D','H','S']
 * @param {Array<str>} tiposEspeciales 
 * @returns {Array}  retorna nuevo deck
 */
export const crearDeck = (tiposCarta, tiposEspeciales) => {
   
    let deck = [];
    if (!tiposCarta || tiposCarta.lengh === 0)  throw new Error ('TiposCartas es obligatorio');

    if (!tiposEspeciales || tiposEspeciales.lengh === 0)  throw new Error ('TiposEspeciales es obligatorio');
    
    for(let i = 2; i <= 10; i++){
        for( let tipo of tiposCarta ) {
            deck.push(i + tipo);
        }
    }

    for( let tipo of tiposCarta ) {
        for( let esp of tiposEspeciales) {
            deck.push( esp + tipo);
        }
    }

    deck = _.shuffle  ( deck );
    return deck;
}