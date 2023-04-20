import React from "react";
import HISCard from "./HISCard";
import iconEmpty from '../HISCardList/icon-empty.svg';

const HISCardList = ({ cards, padding }) => {

  const styleListPadding = padding ? `${padding}` : "";

  return(
    <>
      {
        cards ?
          <div className="card-list" style={{padding: `${styleListPadding}px`}}>
            {cards.map(card => (
              <HISCard
                key={card.id}
                card={card}
              >
              </HISCard>
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

export default HISCardList;