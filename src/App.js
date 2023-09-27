import { useState } from 'react';
import './App.css';
import Popup from './components/Popup';

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className="App">
      <main>
          <h1>Hello, Stoiev!</h1>
          <button onClick={() => setButtonPopup(true)}>Press this button to see magic!</button>
      </main>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
        
    </div>
  );
}

export default App;
