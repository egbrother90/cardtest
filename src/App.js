import React, { useState } from 'react';
import './App.css';
import { HISCard, HISCardList } from './components/HISCardList';
import './components/HISCardList/HISCard.scss';

function App() {
  const cards = [
    {
      id: 1,
      title: 'Card1',
      description: 'This is card 1.'
    },
    {
      id: 2,
      title: 'Card2',
      description: 'This is card 2.'
    },
    {
      id: 3,
      title: 'Card3',
      description: 'This is card 3.'
    },
    {
      id: 4,
      title: 'Card4',
      description: 'This is card 4.'
    },
    {
      id: 5,
      title: 'Card5',
      description: 'This is card 5.'
    },
    {
      id: 6,
      title: 'Card6',
      description: 'This is card 6.'
    },
    {
      id: 7,
      title: 'Card7',
      description: 'This is card 7.'
    },
    {
      id: 8,
      title: 'Card8',
      description: 'This is card 8.'
    },
    {
      id: 9,
      title: 'Card9',
      description: 'This is card 9.'
    },
    {
      id: 10,
      title: 'Card10',
      description: 'This is card 10.'
    },
    {
      id: 11,
      title: 'Card11',
      description: 'This is card 11.'
    },
    {
      id: 12,
      title: 'Card12',
      description: 'This is card 12.'
    },
    {
      id: 13,
      title: 'Card13',
      description: 'This is card 13.'
    },
  ]

  const cards2 = [
    {
      id: 14,
      title: 'Card14',
      description: 'This is card 14.'
    },
    {
      id: 15,
      title: 'Card15',
      description: 'This is card 15.'
    },
    {
      id: 16,
      title: 'Card16',
      description: 'This is card 16.'
    },
    {
      id: 17,
      title: 'Card17',
      description: 'This is card 17.'
    },
    {
      id: 18,
      title: 'Card18',
      description: 'This is card 18.'
    },
    {
      id: 19,
      title: 'Card19',
      description: 'This is card 19.'
    },
    {
      id: 20,
      title: 'Card20',
      description: 'This is card 20.'
    },
    {
      id: 20,
      title: 'Card21',
      description: 'This is card 21.'
    },
    {
      id: 20,
      title: 'Card22',
      description: 'This is card 22.'
    },
    {
      id: 20,
      title: 'Card23',
      description: 'This is card 23.'
    },
    {
      id: 20,
      title: 'Card24',
      description: 'This is card 24.'
    },
    {
      id: 20,
      title: 'Card25',
      description: 'This is card 25.'
    },
    {
      id: 20,
      title: 'Card26',
      description: 'This is card 26.'
    },
    {
      id: 20,
      title: 'Card27',
      description: 'This is card 27.'
    },
    {
      id: 20,
      title: 'Card28',
      description: 'This is card 28.'
    },
    {
      id: 20,
      title: 'Card29',
      description: 'This is card 29.'
    },
    {
      id: 20,
      title: 'Card30',
      description: 'This is card 30.'
    },
    {
      id: 20,
      title: 'Card31',
      description: 'This is card 31.'
    },
    {
      id: 20,
      title: 'Card32',
      description: 'This is card 32.'
    },
    {
      id: 20,
      title: 'Card33',
      description: 'This is card 33.'
    },
    {
      id: 20,
      title: 'Card34',
      description: 'This is card 34.'
    },
    {
      id: 20,
      title: 'Card35',
      description: 'This is card 35.'
    },
    {
      id: 20,
      title: 'Card36',
      description: 'This is card 36.'
    },
    {
      id: 20,
      title: 'Card37',
      description: 'This is card 37.'
    },
    {
      id: 20,
      title: 'Card38',
      description: 'This is card 38.'
    },
    {
      id: 20,
      title: 'Card39',
      description: 'This is card 39.'
    },
    {
      id: 20,
      title: 'Card40',
      description: 'This is card 40.'
    },
    {
      id: 20,
      title: 'Card41',
      description: 'This is card 41.'
    },
    {
      id: 20,
      title: 'Card42',
      description: 'This is card 42.'
    },
    {
      id: 20,
      title: 'Card43',
      description: 'This is card 43.'
    },
    {
      id: 20,
      title: 'Card44',
      description: 'This is card 44.'
    },
    {
      id: 20,
      title: 'Card45',
      description: 'This is card 45.'
    },
    {
      id: 20,
      title: 'Card46',
      description: 'This is card 46.'
    },
    {
      id: 20,
      title: 'Card47',
      description: 'This is card 47.'
    },
    {
      id: 20,
      title: 'Card48',
      description: 'This is card 48.'
    },
    {
      id: 20,
      title: 'Card49',
      description: 'This is card 49.'
    },
    {
      id: 20,
      title: 'Card50',
      description: 'This is card 50.'
    },
    {
      id: 20,
      title: 'Card51',
      description: 'This is card 51.'
    },
    {
      id: 20,
      title: 'Card52',
      description: 'This is card 52.'
    },
    {
      id: 20,
      title: 'Card53',
      description: 'This is card 53.'
    },
    {
      id: 20,
      title: 'Card54',
      description: 'This is card 54.'
    },
    {
      id: 20,
      title: 'Card55',
      description: 'This is card 55.'
    },
    {
      id: 20,
      title: 'Card56',
      description: 'This is card 56.'
    },
    {
      id: 20,
      title: 'Card57',
      description: 'This is card 57.'
    },
    {
      id: 20,
      title: 'Card58',
      description: 'This is card 58.'
    },
    {
      id: 20,
      title: 'Card59',
      description: 'This is card 59.'
    },
    {
      id: 20,
      title: 'Card60',
      description: 'This is card 60.'
    },
  ]
  return (
    <>
      <HISCardList
        cards={cards}
        cards2={cards2}
        padding='30'
        height='460'
      >
        <HISCard />
      </HISCardList>
    </>
  );
}

export default App;
