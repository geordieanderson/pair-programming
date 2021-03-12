import React from "react";
import { Link } from "react-router-dom";


class Gamepage extends React.Component {
  state = {
    gamerOne: 1, 
    gamerTwo: 2,
    currentPlayer: null,
    board: [],
    gameOver: false,
    message: "",
  };



  play = this.play.bind(this);

  initBoard() {
    let board = [];
    for (let r = 0; r < 6; r++) {
      let row = [];
      for (let c = 0; c < 7; c++) {
        row.push(null);
      }
      board.push(row);
    }

    this.setState({
      board,
      currentPlayer: this.state.gamerOne, 
      gameOver: false,
      message: "",
    });
  }

  togglePlayer() {
    return this.state.currentPlayer === this.state.gamerOne
      ? this.state.gamerTwo
      : this.state.gamerOne; 
  }

  play(c) {
    if (!this.state.gameOver) {
      let board = this.state.board;
      for (let r = 5; r >= 0; r--) {
        if (!board[r][c]) {
          board[r][c] = this.state.currentPlayer;
          break;
        }
      }

      let result = this.checkAll(board);
      if (result === this.state.gamerOne) { 
        this.setState({
          board,
          gameOver: true,
          message: "Player 1 (red) wins!",
        });
      } else if (result === this.state.gamerTwo) {
        this.setState({
          board,
          gameOver: true,
          message: "Player 2 (yellow) wins!",
        });
      } else if (result === "draw") {
        this.setState({ board, gameOver: true, message: "Draw game." });
      } else {
        this.setState({ board, currentPlayer: this.togglePlayer() });
      }
    } else {
      this.setState({ message: "Game over. Please start a new game." });
    }
  }

  checkVertical(board) {
    for (let r = 3; r < 6; r++) {
      for (let c = 0; c < 7; c++) {
        if (board[r][c]) {
          if (
            board[r][c] === board[r - 1][c] &&
            board[r][c] === board[r - 2][c] &&
            board[r][c] === board[r - 3][c]
          ) {
            return board[r][c];
          }
        }
      }
    }
  }

  checkHorizontal(board) {
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (board[r][c]) {
          if (
            board[r][c] === board[r][c + 1] &&
            board[r][c] === board[r][c + 2] &&
            board[r][c] === board[r][c + 3]
          ) {
            return board[r][c];
          }
        }
      }
    }
  }

  checkDiagonalRight(board) {
    for (let r = 3; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (board[r][c]) {
          if (
            board[r][c] === board[r - 1][c + 1] &&
            board[r][c] === board[r - 2][c + 2] &&
            board[r][c] === board[r - 3][c + 3]
          ) {
            return board[r][c];
          }
        }
      }
    }
  }

  checkDiagonalLeft(board) {
    for (let r = 3; r < 6; r++) {
      for (let c = 3; c < 7; c++) {
        if (board[r][c]) {
          if (
            board[r][c] === board[r - 1][c - 1] &&
            board[r][c] === board[r - 2][c - 2] &&
            board[r][c] === board[r - 3][c - 3]
          ) {
            return board[r][c];
          }
        }
      }
    }
  }

  checkDraw(board) {
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 7; c++) {
        if (board[r][c] === null) {
          return null;
        }
      }
    }
    return "draw";
  }

  checkAll(board) {
    return (
      this.checkVertical(board) ||
      this.checkDiagonalRight(board) ||
      this.checkDiagonalLeft(board) ||
      this.checkHorizontal(board) ||
      this.checkDraw(board)
    );
  }

  componentDidMount() {
    this.initBoard();
  }

  render() {
    return (
      <div className='Gamepage'>
        <div
          className="button"
          onClick={() => {
            this.initBoard();
          }}
        >
          New Game
        </div>

        <table>
          <thead></thead>
          <tbody>
            {this.state.board.map((row, i) => (
              <Row key={i} row={row} play={this.play} />
            ))}
          </tbody>
        </table>

        <Link to='/highscores'><p className="message">{this.state.message}</p></Link>
      </div>
    );
  }
}

const Row = ({ row, play }) => {
  return (
    <tr>
      {row.map((cell, i) => (
        <Cell key={i} value={cell} columnIndex={i} play={play} />
      ))}
    </tr>
  );
};

const Cell = ({ value, columnIndex, play }) => {
  let color = "white";
  if (value === 1) {
    color = "red";
  } else if (value === 2) {
    color = "yellow";
  }

  return (
    <td>
      <div
        className="cell"
        onClick={() => {
          play(columnIndex);
        }}
      >
        <div className={color}></div>
      </div>
    </td>
  );
};

export default Gamepage;