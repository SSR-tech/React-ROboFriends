import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="tc bg-dark-red dib br3 grow  card">
      <h1>RoboFriends</h1>
      <img src={`https://robohash.org/${id}?200x200`} alt="Robot" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
