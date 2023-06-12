import { useEffect, useState } from "react";
import "./App.css";
import PlayersInBowl from "../PlayersInBowl/PlayersInBowl";
import PlayerForm from "../PlayerForm/PlayerForm";
import { Routes, Route } from "react-router-dom";

let BASE_URL = "https://fsa-puppy-bowl.herokuapp.com";

function App() {
  const [allPlayers, setAllPlayers] = useState([]);
  const [playerInfo, setPlayerInfo] = useState(undefined);
  useEffect(() => {
    const fetchAllPlayers = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/api/2304-ftb-et-web-ft/players`
        );
        const data = await response.json();
        console.log(data.data.players);

        setAllPlayers(data.data.players);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllPlayers();
  }, []);

  return (
    <div className="App">
      <section>
        <h1 className="pb-10 pt-10">Puppy Bowl</h1>
      </section>
      <div id="new-player-form" className="pt-5">
        <PlayerForm
          className="mx-10"
          allPlayers={allPlayers}
          setAllPlayers={setAllPlayers}
        />
      </div>
      <div id="all-players-container">
        <PlayersInBowl
          allPlayers={allPlayers}
          playerInfo={playerInfo}
          setPlayerInfo={setPlayerInfo}
          setAllPlayers={setAllPlayers}
        />
      </div>
    </div>
  );
}

export default App;
