import React, { useState, useRef } from "react";
import { AutoSizer, List } from 'react-virtualized';
import { Scrollbars } from 'react-custom-scrollbars-2';
import iconEmpty from '../HISCardList/icon-empty.svg';

const HISCardList = ({ cards, cards2, listPadding, listHeight, cardPadding, cardHeight, cardMargin }) => {

  // 스타일
  const styleListPadding = listPadding ? `${listPadding}` : "";
  const styleListHeight = listHeight ? `${listHeight}` : "";
  const styleCardPadding = cardPadding ? `${cardPadding}` : "";

  const scrollbarsRef = useRef();
  const listRef = useRef();

  window.scrollbarsRef = scrollbarsRef;
  window.listRef = listRef;

  // 스크롤시 새롭게 렌더되는 컨텐츠
  const rowRenderer = ({ index, style}) => {
    return (
      <div
        className="card"
        style={style}
        key={cards[index].id}
      >
        <div
          className="inner"
          style={{
            padding: `${styleCardPadding}px`,
          }}
        >
          <h2>{cards[index].title}</h2>
          <p>{cards[index].description}</p>
        </div>
      </div>
    )
  }

  return(
    <>
      {
        cards ?
        <div
          className="card-list"
          style={{
            padding: `${styleListPadding}px`,
            height: `${styleListHeight}px`,
          }}
        >
          <AutoSizer>
            {({ width, height }) => (
              <Scrollbars
                autoHide
                style={{ width, height }}
                ref={scrollbarsRef}
                renderTrackVertical={(verticalBars) => (
                  <div className="trackVertical" {...verticalBars} />
                )}
                onScroll={({ target }) => {
                  const { scrollTop, scrollLeft } = target;
                  // console.log(listRef.current);
                  if (listRef.current) {
                    listRef.current.Grid.handleScrollEvent({
                      scrollTop,
                      scrollLeft
                    });
                  }
                }}
              >
                <List
                  ref={listRef}
                  rowCount={cards.length}                                   // 항목의 개수
                  height={Number(listHeight) - (Number(listPadding) * 2)}   // 실제 렌더링 되는 높이범위
                  rowHeight={Number(cardHeight) + Number(cardMargin)}       // 항목의 높이
                  width={100}                                               // 항목의 너비
                  rowRenderer={rowRenderer}                                 // 항목 렌더링 할 때 쓰는 함수
                />
              </Scrollbars>
            )}
          </AutoSizer>
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