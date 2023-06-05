import { useEffect, useState } from "react";
import "./App.css";
import PlayersInBowl from "../PlayersInBowl/PlayersInBowl";
import PlayerForm from "../PlayerForm/PlayerForm";

function App() {
  return (
    <div className="App">
      <section>
        <h1>Puppy Bowl</h1>
      </section>
      <div id="new-player-form">
        <PlayerForm className="mx-10" />
      </div>
      <div id="all-players-container">
        <PlayersInBowl />
      </div>
    </div>
  );
}

export default App;
