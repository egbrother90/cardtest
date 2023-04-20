import React from "react";

const HISCard = ({ card }) => {
  return (
    <div className="card">
      <h2>{card.title}</h2>
      <p>{card.description}</p>
    </div>
  )
}

export default HISCard;