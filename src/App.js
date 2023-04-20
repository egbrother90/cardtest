import './App.css';
import { HISCard, HISCardList } from './components/HISCardList';
import './components/HISCardList/HISCardList.scss';

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
  ]

  return (
    <>
      <HISCardList
        cards={cards}
        padding='15'
      >
        <HISCard />
      </HISCardList>
    </>
  );
}

export default App;
