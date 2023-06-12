import { useEffect, useState } from "react";
import SinglePlayer from "../SinglePlayer/SinglePlayer";
import "./PlayersInBowl.css";

let BASE_URL = "https://fsa-puppy-bowl.herokuapp.com";

const PlayersInBowl = (props) => {
  const allPlayers = props.allPlayers;
  const playerInfo = props.playerInfo;
  const setPlayerInfo = props.setPlayerInfo;
  const setAllPlayers = props.setAllPlayers;

  return (
    <div>
      <h2 className="pt-10 pb-5">Players in Bowl</h2>
      <ul>
        {allPlayers.length ? (
          allPlayers.map((player) => (
            <button
              className="ml-3 bg-purple-950"
              onClick={() => {
                playerInfo != player
                  ? setPlayerInfo(player)
                  : setPlayerInfo(undefined);
              }}
              key={player.id}
            >
              {player.name}
            </button>
          ))
        ) : (
          <p>Loading . . .</p>
        )}
      </ul>
      {playerInfo && (
        <SinglePlayer
          allPlayers={allPlayers}
          setAllPlayers={setAllPlayers}
          data={playerInfo}
        />
      )}
    </div>
  );
};
export default PlayersInBowl;
