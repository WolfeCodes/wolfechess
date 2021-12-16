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
    const youWish = document.querySelector('#youwish')
    const death = document.querySelector('#death')
    if(move === null) {
      youWish.style.opacity = '100%';
      youWish.classList.add('forward')
      setTimeout(()=> {
        youWish.style.opacity = '0';
        youWish.classList.remove('forward')
      }, 3000)
      return;
    }
    //Checking for checkmate logic!
    if(chessGame.current && chessGame.current.game_over() === true){
      console.log('Game over Muggle!')
      death.style.opacity = '100%';
      death.classList.add('forward')
      setTimeout(()=> {
        death.style.opacity = '0';
        death.classList.remove('forward')
      }, 4000)
      return;
    }

    

   
  
    setFen(chessGame.current.fen())
  } 

  const gameReset = () => {
    chessGame.current.clear();
    chessGame.current.reset();
    setFen('start')
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
