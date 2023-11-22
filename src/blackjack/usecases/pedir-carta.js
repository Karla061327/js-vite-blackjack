

/**
 * 
 * @param {Array<Str>} deck arreglo de cartas 
 * @returns {Str} cara numero y simbolo
 */
export const pedirCarta = (deck) => {
    if (deck ===0 || !deck) {throw new Error ('El deck esta vacio')}

    const carta = deck.pop();
    return carta;
}
 