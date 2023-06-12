import { useEffect, useState } from "react";
import "./PlayerForm.css";

let BASE_URL = "https://fsa-puppy-bowl.herokuapp.com";

const PlayerForm = (props) => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const allPlayers = props.allPlayers;
  const setAllPlayers = props.setAllPlayers;

  const postPlayerInfo = async (e) => {
    e.preventDefault();
    const playerFormInfo = {
      name: name,
      breed: breed,
      status: status,
      imageUrl: imageUrl,
    };
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(playerFormInfo),
    };
    try {
      const response = await fetch(
        `${BASE_URL}/api/2304-ftb-et-web-ft/players`,
        settings
      );
      const data = await response.json();
      const allPlayersCopy = [...allPlayers, data.data.newPlayer];
      setAllPlayers(allPlayersCopy);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <form onSubmit={postPlayerInfo}>
        <label className="ml-5">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="pl-3">
          Breed:
          <input
            type="text"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </label>
        <label className="pl-3">
          Status:
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </label>
        <label className="pl-3">
          Image URL:
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </label>
        <button className="bg-purple-900 ml-5 mr-5" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PlayerForm;
