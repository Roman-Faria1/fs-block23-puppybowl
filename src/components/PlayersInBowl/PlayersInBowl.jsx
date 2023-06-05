import { useEffect, useState } from "react";
import SinglePlayer from "../SinglePlayer/SinglePlayer";

let BASE_URL = "https://fsa-puppy-bowl.herokuapp.com";

const PlayersInBowl = () => {
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
    <div>
      <ul>
        <h3>Players in Bowl</h3>
        {allPlayers.length ? (
          allPlayers.map((player) => (
            <button
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
      {playerInfo && <SinglePlayer data={playerInfo} />}
    </div>
  );
};
export default PlayersInBowl;
