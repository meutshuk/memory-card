import React from "react";
import "./style.css";

export default function Header(props) {
  return (
    <div>
      <div className="header">
        <div>
          <p>Memory Game</p>
          <span className="author">
            Made By: Utshuk
            <span>
              <img src="./GitHub-Mark-Light-32px.png" alt="GitHub"></img>
            </span>
          </span>
        </div>

        <div className="score">
          <div style={{ marginRight: "1rem" }}>
            <div>Score: {props.score}</div>
            <div>High Score: {props.highScore}</div>
          </div>
        </div>
      </div>
      <div className="message">
        <p>{props.message}</p>
      </div>
    </div>
  );
}
