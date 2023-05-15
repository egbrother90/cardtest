import React, { useEffect } from 'react';
import './App.css';
import { HISCardList } from './components/HISCardList';
import './components/HISCardList/HISCard.scss';
import dummy from './components/HISCardList/dummy.json';

function App() {

  useEffect(() => {
    let json = JSON.stringify(dummy);
    console.log(json);
  })


  return (
    <>
      <HISCardList
        cards={dummy}         // 데이터
        listHeight='460'      // 리스트전체 높이
        listPadding='30'      // 리스트 여백
        cardPadding='15'      // 카드 여백
        cardHeight='80'      // 카드 높이
        cardMargin='8'
      />
    </>
  );
}

export default App;
