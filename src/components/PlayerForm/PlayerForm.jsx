import { useEffect, useState } from "react";

let BASE_URL = "https://fsa-puppy-bowl.herokuapp.com";

const PlayerForm = () => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const postPlayerInfo = async () => {
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
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <form>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Breed:
          <input
            type="text"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </label>
        <label>
          Status:
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </label>
        <button onClick={postPlayerInfo}>Submit</button>
      </form>
    </div>
  );
};

export default PlayerForm;
