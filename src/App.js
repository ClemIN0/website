import { firebaseConfig } from './config/Config';
import { initializeApp } from 'firebase/app';

import './App.css';
import { Test } from './components/Test';

const FirebaseApp = initializeApp (firebaseConfig)

function App() {

  return (
    <div className="App">
    <Test />
    </div>
  );
}

export default App;
