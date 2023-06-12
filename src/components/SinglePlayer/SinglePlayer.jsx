import { useEffect, useState } from "react";
import "./SinglePlayer.css";

let BASE_URL = "https://fsa-puppy-bowl.herokuapp.com";

const SinglePlayer = (props) => {
  const allPlayers = props.allPlayers;
  const setAllPlayers = props.setAllPlayers;
  let playerInfo = props.data;
  const deletePlayerInfo = async (e) => {
    const settings = {
      method: "DELETE",
    };
    try {
      const response = await fetch(
        `${BASE_URL}/api/2304-ftb-et-web-ft/players/${e.target.value}`,
        settings
      );
      const translatedData = response.json();
      const filteredData = allPlayers.filter((indivPup) => {
        if (indivPup.id != e.target.value) {
          return true;
        }
      });

      setAllPlayers(filteredData);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div id="playerInfo" className="flex flex-row justify-center">
      <div className="pr-5">
        <img
          className="object-scale-down h-75 w-60 pt-5"
          src={playerInfo.imageUrl}
        />
      </div>

      <div className="pt-10">
        <h2 className="bg-violet-300">Name: {playerInfo.name}</h2>
        <p className="bg-violet-300">Breed: {playerInfo.breed}</p>
        <p className="pb-1 bg-violet-300">Status: {playerInfo.status}</p>
        <button
          className="mt-5"
          onClick={deletePlayerInfo}
          value={playerInfo.id}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SinglePlayer;
