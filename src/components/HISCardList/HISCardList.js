import React, { useState } from "react";
import { AutoSizer, List } from 'react-virtualized';
import iconEmpty from '../HISCardList/icon-empty.svg';

const HISCardList = ({ cards, cards2, padding, height }) => {

  // 스타일
  const styleListPadding = padding ? `${padding}` : "";
  const styleListHeight = height ? `${height}` : "";

  // 스크롤 시
  const [data, setData] = useState(cards);
  const scrollListener = (params) => {
    if (params.scrollTop + params.clientHeight >= params.scrollHeight - 1) {
      if (data.length <= cards.length) {
        setData([
          ...data,
          ...cards2
        ])
      }
    }
  };

  const AllData = [
    ...cards,
    ...cards2
  ];

  console.log('data.length== ' + cards.length);
  console.log('cards.length== ' + cards.length);
  console.log('cards2.length== ' + cards2.length);
  console.log('AllData.length== ' + cards2.length);

  // + 렌더
  const rowRenderer = ({ index, style, key}) => {
    return (
      <>
        <div className="card" style={style}>
          <div className="inner">
            <h2>{AllData[index].title}</h2>
            <p>{AllData[index].description}</p>
          </div>
        </div>
      </>
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
            height: `${styleListHeight}px`
          }}
        >
          <AutoSizer disabledHeight>
          {({ width }) => (
            <List
              rowCount={data.length}                            // 항목의 개수
              height={Number(height) - (Number(padding) * 2)}   // 실제 렌더링 되는 높이범위
              rowHeight={100}                                   // 항목의 높이
              width={100}                                       // 항목의 너비
              rowRenderer={rowRenderer}                         // 항목 렌더링 할 때 쓰는 함수
              onScroll={scrollListener}                         // scroll 함수
              overscanRowCount={1}                              // 다음에 로드해 올 항목 미리 컨텐츠 높이 잡기
            />
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