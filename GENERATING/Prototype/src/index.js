const Chess = require('./prototype');

const chess = new Chess();
chess.addFigure(2, 5, 'king');
const chess2 = chess.clone();
console.log(chess2.getFigure(2, 5) === chess.getFigure(2, 5));