import { firebaseConfig } from './config/Config';
import { initializeApp } from 'firebase/app';

import './App.css';
import { Test } from './components/Test';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Routes, Route } from 'react-router-dom';

const FirebaseApp = initializeApp (firebaseConfig)

function App() {

  return (
    <div className="App">
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
