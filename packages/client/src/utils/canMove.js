import findOpposingDiscs from "./findOpposingDiscs";

export function possibleMoves(state) {
  const { board } = state;
  const possibleMoves = [];
  for (let y = 0; y < board.length; y++) {
    //loop through board
    for (let x = 0; x < board.length; x++) {
      if (board[y][x] === "x") {
        // if board space is empty

        //find all opposing discs with player disc at end - returns multi
        const opposingDiscs = findOpposingDiscs(state, { x, y }); // returns multi-dimensional array
        for (let a = 0; a < opposingDiscs.length; a++) {
          let layer1 = opposingDiscs[a];
          for (let b = 0; b < layer1.length; b++) {
            let layer2 = opposingDiscs[a][b];

            if (layer2.length !== 0) {
              possibleMoves.push({
                x: x,
                y: y,
              });
            }
          }
        }
      }
    }
  }
  return possibleMoves;
}

export function canMove(state) {
  return possibleMoves(state).length !== 0;
}

export default canMove;
