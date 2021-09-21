import React from "react";
import "./style.css";

export default function Header(props) {
  return (
    <div>
      <div className="header">
        <div>
          <p>Memory Game</p>
          <span className="author">
            Made By: Utshuk{" "}
            <a href="https://github.com/meutshuk" style={{ marginLeft: "5px" }}>
              <img
                src="https://cdn.svgporn.com/logos/github-icon.svg"
                alt="GitHub"
                height="20"
                width="20"
              ></img>
            </a>
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
