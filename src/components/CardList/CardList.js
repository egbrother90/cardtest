import React from "react";
import Card from "./Card";
import iconEmpty from '../CardList/icon-empty.svg';

const cardlist = ({ cards, padding }) => {

  const styleListPadding = padding ? `${padding}` : "";
  // const styleOption = [stylePadding].join(' ').trimEnd();


  return(
    <>
      {
        cards ?
          <div className="card-list" style={{padding: `${styleListPadding}px`}}>
            {cards.map(card => (
              <Card
                key={card.id}
                card={card}
              >
              </Card>
            ))}
          </div>
        :
          <div className="empty">
            <div className="empty-inner">
                <img src={iconEmpty} alt="데이터가 존재하지 않습니다." />
                <p>데이터가 존재하지 않습니다.</p>
            </div>
          </div>
      }
    </>
  )
}

export default cardlist;