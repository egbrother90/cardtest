import './App.css';

function App() {

  const custom = [
    {
      key: 1,
      bgcolor: 'orange',
      company: '(주)더존비즈온',
      name: '김채원',
      text3: 'text3'
    },
    {
      key: 2,
      bgcolor: 'blue',
      text1: 'text0',
      text2: 'text0',
      text3: 'text0'
    },
    {
      key: 3,
      bgcolor: 'yellow',
      text1: 'text7',
      text2: 'text8',
      text3: 'text9'
    }
  ]
  return (
    <>
      <div className="test-wrap custorm">
        {custom.map(custom => {
          return(
            <div
              style={{backgroundColor: custom.bgcolor}}
              key={custom.key}
            >
              <ul>
                <li>{custom.text1}</li>
                <li>{custom.text2}</li>
                <li>{custom.text3}</li>
              </ul>
            </div>
          )
        })}
      </div>
    </>
  );
}

export default App;
