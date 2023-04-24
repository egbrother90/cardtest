import React from "react";

const HISCard = ({cards, cards2, card, style }) => {

  return (
    <div className="card" style={style}>
      <div className="inner">
        <h2>{card.title}</h2>
        <p>{card.description}</p>
      </div>
    </div>
  )
}

export default HISCard;