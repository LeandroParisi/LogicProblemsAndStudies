import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const rowStyle = {
  display: 'flex'
}

const squareStyle = {
  'width':'60px',
  'height':'60px',
  'backgroundColor': '#ddd',
  'margin': '4px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '20px',
  'color': 'white'
}

const boardStyle = {
  'backgroundColor': '#eee',
  'width': '208px',
  'alignItems': 'center',
  'justifyContent': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'border': '3px #eee solid'
}

const containerStyle = {
  'display': 'flex',
  'alignItems': 'center',
  'flexDirection': 'column'
}

const instructionsStyle = {
  'marginTop': '5px',
  'marginBottom': '5px',
  'fontWeight': 'bold',
  'fontSize': '16px',
}

const buttonStyle = {
  'marginTop': '15px',
  'marginBottom': '16px',
  'width': '80px',
  'height': '40px',
  'backgroundColor': '#8acaca',
  'color': 'white',
  'fontSize': '16px',
}



const getNextPlayer = (currentPlayer) => {
  if (currentPlayer === "X") {
    return "O"
  } else if (currentPlayer === "O") {
    return "X"
  } else {
    throw Error("invalid player")
  }
}
// Players = X | O



function Square({ position, onClick, plays, isOver }) {
  const isSelectedByWhichPlayer = (plays, position) => {
    if (plays["X"]?.has(position)) {
      return {
        player: "X",
        isSelected: true
      }
    } else if (plays["O"]?.has(position)) {
      return {
        player: "O",
        isSelected: true
      }
    } else {
      return {
        isSelected: false
      }
    }
  }

  const { player, isSelected } = isSelectedByWhichPlayer(plays, position)

  return (
    <button
      className="square"
      onClick={() => onClick(position)}
      style={squareStyle}
      disabled={isSelected || isOver}
    >
      {player || ""}
    </button>
  );
}

function Board() {
  const initialPlayState = {
    "X": new Set([]),
    "O": new Set([]),
  }

  const [plays, setPlays] = useState(initialPlayState)
  const [currentPlayer, setCurrentPlayer] = useState("X")
  const [isOver, setIsOver] = useState(false)
  const [overMessage, setOverMessage] = useState("")


  const play = (player) => (selectedSquare) => {
    setPlays({
      ...plays,
      [currentPlayer]: new Set([...plays[currentPlayer], selectedSquare])
    })

    setCurrentPlayer(getNextPlayer(player))
  } 

  const reset = () => {
    setPlays(initialPlayState)
    setCurrentPlayer("X")
    setIsOver(false)
    setOverMessage("")
  }

  useEffect(() => {
    const playerXPlays = [...plays["X"]].map(x => x.split(","))
    const playerOPlays = [...plays["O"]].map(x => x.split(","))

    const horizontalWin = (plays) => {
      const firstLine = plays.filter(([horizontal]) => horizontal === "0").length === 3
      const secondLine = plays.filter(([horizontal]) => horizontal === "1").length === 3
      const thridLine = plays.filter(([horizontal]) => horizontal === "2").length === 3


      return firstLine || secondLine || thridLine
    }

    const verticalWin = (plays) => {
      const firstLine = plays.filter(([_, vertical]) => vertical === "0").length === 3
      const secondLine = plays.filter(([_, vertical]) => vertical === "1").length === 3
      const thridLine = plays.filter(([_, vertical]) => vertical === "2").length === 3

      return firstLine || secondLine || thridLine
    }

    const diagonalWins = [
      ["0,0", "1,1", "2,2"],
      ["0,2", "1,1", "2,0"]
    ]

    const diagonalWin = (plays) => {
      const playsAsArray = plays.map(x => x.join(","))
      
      const winOneSide = []

      playsAsArray.forEach(play => {
        for (let win of diagonalWins[0]) {
          if (win.includes(play)) {
            winOneSide.push(play)
          } else {
            continue
          }
        }
      })

      const winOtherSide = []

      playsAsArray.forEach(play => {
        for (let win of diagonalWins[1]) {
          if (win.includes(play)) {
            winOtherSide.push(play)
          } else {
            continue
          }
        }
      })

      return winOneSide.length === 3 || winOtherSide.length === 3
    }

    const xWin = horizontalWin(playerXPlays) || verticalWin(playerXPlays) ||  diagonalWin(playerXPlays)
    const oWin = horizontalWin(playerOPlays) || verticalWin(playerOPlays) ||  diagonalWin(playerOPlays)

    if (xWin || oWin) {
      setIsOver(true)
      if (xWin) {
        setOverMessage("Player X won")
      } else {
        setOverMessage("Player O won")
      }
    } else if (plays.length === 9) {
      setIsOver(true)
      setOverMessage("tie")
    }
  }, [plays])

  const squares = {
    rowOne: [
      { position: '0,0'},
      { position: '0,1'},
      { position: '0,2'},
    ],
    rowTwo: [
      { position: '1,0'},
      { position: '1,1'},
      { position: '1,2'},
    ],
    rowThree: [
      { position: '2,0'},
      { position: '2,1'},
      { position: '2,2'},
    ],
  }

  return (
    <div style={containerStyle} className="gameBoard">
      {isOver && <p>{overMessage}</p>}
      <div 
        id="statusArea" 
        className="status" 
        style={instructionsStyle}
      >
        Next player: <span>{currentPlayer}</span>
      </div>
      <div 
        id="winnerArea" 
        className="winner" 
        style={instructionsStyle}
      >
        Winner: <span>None</span>
      </div>
      <button 
        style={buttonStyle}
        onClick={reset}
      >
        Reset
      </button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          {squares.rowOne.map(s => (
            <Square isOver={isOver} plays={plays} position={s.position} key={s.position} onClick={play(currentPlayer)} />
          ))}
        </div>
        <div className="board-row" style={rowStyle}>
          {squares.rowTwo.map(s => (
            <Square isOver={isOver} plays={plays} position={s.position} key={s.position} onClick={play(currentPlayer)} />
          ))}
        </div>
        <div className="board-row" style={rowStyle}>
          {squares.rowThree.map(s => (
            <Square isOver={isOver} plays={plays} position={s.position} key={s.position} onClick={play(currentPlayer)} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);