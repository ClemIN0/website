import { firebaseConfig } from './config/Config';
import { initializeApp } from 'firebase/app';

import './App.css';

const FirebaseApp = initializeApp ( firebaseConfig )

function App() {
  return (
    <div className="App">
      <header className="App-header">
  
        <p>
          Hello React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
