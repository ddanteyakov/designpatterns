import { Chess } from './prototype';

const chess = new Chess();
chess.addFigure(2, 5, 'king');
const chess2 = chess.clone();
console.log(chess2.takeFigure(2, 5) === chess.takeFigure(2, 5));