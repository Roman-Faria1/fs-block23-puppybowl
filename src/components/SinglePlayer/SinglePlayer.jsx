import { useEffect, useState } from "react";

const SinglePlayer = (props) => {
  let playerInfo = props.data;
  return (
    <div id="playerInfo">
      <img src={playerInfo.imageUrl} />
      <h2>{playerInfo.name}</h2>
      <p>{playerInfo.breed}</p>
      <p>{playerInfo.status}</p>
    </div>
  );
};

export default SinglePlayer;
