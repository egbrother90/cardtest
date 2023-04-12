import React from "react";
import Card from "./Card";

const cardlist = ({ cards }) => {
  return(
    <div className="card-list">
      {cards.map(card => (
        <Card Key={card.id} card={card}></Card>
      ))}
    </div>
  )
}

export default cardlist;