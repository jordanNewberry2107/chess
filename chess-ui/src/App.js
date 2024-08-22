import React, { useState } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';

function App() {
  const [game, setGame] = useState(new Chess());

  function movePiece(move) {
    const gameCopy = new Chess(game.fen());
    const result = gameCopy.move(move);
    setGame(gameCopy);
    return result;
  }

  function onDrop(sourceSquare, targetSquare) {
    const move = movePiece({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q'
    });

    // If the move is illegal, return false
    if (move === null) return false;
    return true;
  }

  return (
    <div className="App">
      <h1>Chessboard</h1>
      <div style={{ width: '400px', margin: 'auto' }}>
        <Chessboard position={game.fen()}
          onPieceDrop={onDrop} />
      </div>
    </div>
  );
}

export default App;
