import './App.css';
import { CardList } from './components/CardList';

function App() {
  const cards = [
    {
      id: 1,
      title: 'card1',
      description: 'This is card 1.'
    },
    {
      id: 2,
      title: 'card1',
      description: 'This is card 1.'
    },
    {
      id: 3,
      title: 'card1',
      description: 'This is card 1.'
    },
    {
      id: 4,
      title: 'card1',
      description: 'This is card 1.'
    },
  ]

  return (
    <>
      <CardList
        cards={cards}
      />
    </>
  );
}

export default App;
