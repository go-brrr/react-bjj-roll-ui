import * as React from "react";
import "./App.css";

export default function App() {
  const wave = () => {};

  return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">
          <span role="img" aria-label="fist-bump">
            👊
          </span>{" "}
          Hi!
        </div>

        <div className="bio">
          Want to roll? Connect your Ethereum wallet and try to submit me.
        </div>

        <button className="waveButton" onClick={wave}>
          Attempt a BJJ submission
        </button>
      </div>
    </div>
  );
}
