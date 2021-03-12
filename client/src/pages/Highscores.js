import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Score from "../components/Score";

const SCORES_URL = "http://localhost:8080/scores";

class Highscores extends React.Component {
  state = {
    highScores: [],
  };

  componentDidMount() {
    this.getScores();
  }

  getScores = () => {
    axios.get(`${SCORES_URL}`).then((response) => {
        console.log(response.data);
      this.setState({
        highScores: response.data,
      });
    });
  }

  render() {
    return (
      <div>
        <h1>HIGHSCORES</h1>
        <div>
          {this.state.highScores.map((score) => {
            return (
              <Score
                key={score.id}
                id={score.id}
                name={score.name}
                chip={score.chip}
                score={score.score}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Highscores;