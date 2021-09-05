import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Col, Row } from "react-bootstrap";

function App() {
  const [player1, setPlayer1] = useState(0);
  const [player2, setPlayer2] = useState(0);
  const [advantage1, setAdvantage1] = useState(null);
  const [advantage2, setAdvantage2] = useState(null);
  const [scoring, setScoring] = useState("---");
  const [gameState, setGameState] = useState("");

  function scoreP1(e) {
    setScoring(e.target.name);
    if (advantage1 >= 2 && advantage1 > advantage2 && scoring === "Player 1") {
      setAdvantage1(advantage1 + 1);
      setGameState("Player 1 WIN !");
    } else if (advantage1 !== null) {
      setAdvantage1(advantage1 + 1);
    } else if (player1 === 30 && scoring === "Player 1") {
      setPlayer1(player1 + 10);
      setGameState("Player 1 WIN !");
    } else if (player1 === 30 && scoring !== "Player 1") {
      setPlayer1(player1 + 10);
    } else if (player1 > 30 && scoring === "Player 1" && advantage1 === null) {
      setPlayer1(player1 + 15);
      setGameState("Player 1 WIN !");
    } else {
      setPlayer1(player1 + 15);
    }
  }
  function scoreP2(e) {
    setScoring(e.target.name);
    if (advantage2 >= 2 && advantage2 > advantage1 && scoring === "Player 2") {
      setAdvantage2(advantage2 + 1);
      setGameState("Player 2 WIN !");
    } else if (advantage2 !== null) {
      setAdvantage2(advantage2 + 1);
    } else if (player2 === 30 && scoring === "Player 2") {
      setPlayer2(player2 + 10);
      setGameState("Player 2 WIN !");
    } else if (player2 === 30 && scoring !== "Player 2") {
      setPlayer2(player2 + 10);
    } else if (player2 > 30 && scoring === "Player 2" && advantage2 === null) {
      setPlayer2(player2 + 15);
      setGameState("Player 2 WIN !");
    } else {
      setPlayer2(player2 + 15);
    }
  }
  function reset() {
    setPlayer1(0);
    setPlayer2(0);
    setScoring("---");
    setGameState("");
    setAdvantage1(null);
    setAdvantage2(null);
  }
  useEffect(() => {
    if (player1 === 40 && player2 === 40 && advantage1 === null) {
      setGameState("DEUCE !");
      setScoring("---");
      setAdvantage1(0);
      setAdvantage2(0);
    }
    if ((gameState === "DEUCE !" && advantage1 > 0) || (gameState === "DEUCE !" && advantage2 > 0)) {
      setGameState("");
    }
    if (advantage1 === 3 && advantage2 === 3) {
      setGameState("DEUCE ! GAME END !");
    }
  }, [player1, player2, advantage1, gameState, advantage2]);

  return (
    <div className="App">
      <Row>
        <h2>
          <b>
            React
            <img src={logo} className="App-logo" alt="logo" />
            Tennis 🎾Score
          </b>
        </h2>
      </Row>
      <br />
      <Row>
        <Col xs={{ span: 3, offset: 2 }}>
          <h4>
            <b>Player 1</b>
          </h4>
          {gameState.length > 7 ? (
            <Button disabled>Score !</Button>
          ) : (
            <Button id={1} name={"Player 1"} onClick={(e) => scoreP1(e)}>
              Score !
            </Button>
          )}
          <br />
          <br />
          <p>
            <b>score: {player1}</b>
          </p>
          <p>{advantage1 !== null && <b>advantage: {advantage1}</b>}</p>
        </Col>
        <Col xs={2}>
          <br />
          <br />
          <h5>
            <b>Scoring Player:</b>
          </h5>
          <h5>
            <b>{scoring}</b>
          </h5>
        </Col>
        <Col xs={3}>
          <h4>
            <b>Player 2</b>
          </h4>
          {gameState.length > 7 ? (
            <Button disabled variant="danger">
              Score !
            </Button>
          ) : (
            <Button variant="danger" id={2} name={"Player 2"} onClick={(e) => scoreP2(e)}>
              Score !
            </Button>
          )}
          <br />
          <br />
          <p>
            <b>score: {player2}</b>
          </p>
          <p>{advantage2 !== null && <b>advantage: {advantage2}</b>}</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <h2>
          <b>{gameState}</b>
        </h2>
      </Row>
      <Row>
        <Col>
          <Button variant="secondary" onClick={() => reset()}>
            Reset
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default App;
