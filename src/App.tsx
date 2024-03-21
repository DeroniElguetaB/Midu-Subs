import './App.css';
import { useEffect, useState } from 'react';

const INITIAL_STATE = [
    {
      nick: 'rogelio',
      subMonths: 3,
      avatar: 'https://i.pravatar.cc/150?u=dapelu',
      description: 'Dapelu hace de moderador a veces'
  },
  {
      nick: 'julian',
      subMonths: 5,
      avatar: 'https://i.pravatar.cc/150?u=julian'
  }
]

interface Sub{
    nick: string,
    subMonths: number,
    avatar: string,
    description?: string
}
// const subscriptores: Sub [] = []
// subscriptores.push(subscriptor1, subscriptor2)

function App() {
  const [subs, setSubs] = useState <Sub[]>([])
  // const [subs, setSubs] = useState <Array<Sub>>([])

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])

  return (
    <div className="App">
      <h1>Midu Subs</h1>
      <ul>  
          {
            subs.map(sub => {
              return(
                <li key={sub.nick}>
                  <img src={sub.avatar} alt={`avatar para ${sub.nick}`} />
                  <h4>{sub.nick}(<small>{sub.subMonths}</small>)</h4>
                  <p>{sub.description?.substring(0, 100)}</p>
                </li>
                )
              }
            )
          }
      </ul>
    </div>
  );
}

export default App;
