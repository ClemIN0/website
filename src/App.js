import { firebaseConfig } from './config/Config';
import { initializeApp } from 'firebase/app';

import './App.css';
import { Test } from './components/Test';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Routes, Route } from 'react-router-dom';

const FirebaseApp = initializeApp (firebaseConfig)

function App() {

  return (
    <div className="App">
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
      </Routes>
    </div>
  );
}

export default App;
