this.Card = function(shape, color, shading, number) {
    this.attributes = [shape, color, shading, number];
};
this.Card.equals = function(cardA, cardB) {
    for (var i = 0; i < 4; i += 1) {
        if (cardA.attributes[i] !== cardB.attributes[i]) {
            return false;
        }
    }
    return true;
}
