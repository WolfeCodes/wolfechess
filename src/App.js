import './App.css';
import React, {useState, useEffect, useRef} from 'react';
import ChessBoard from "chessboardjsx"
import Chess from "chess.js";
function App() {

  const [fen, setFen] = useState ('start')

  let chessGame = useRef(null);

  useEffect(() =>{
    chessGame.current = new Chess();
  }, [])
    //Checking for valid moves 
  const onDrop = ({sourceSquare, targetSquare}) => {
    //determines the move of the pieces
    let move = chessGame.current.move({
      //Move from one square to next square
      from: sourceSquare,
      to: targetSquare
    })
    //Not allowing illegal moves
    if(move === null) return;

    setFen(chessGame.current.fen())
  } 

  // console.log(move)
  console.log(chessGame)




  return (
    <div className="App">
      <ChessBoard position= {fen} 
      onDrop={onDrop}/>
    </div>
  );
}



export default App;
