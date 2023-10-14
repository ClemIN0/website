import { firebaseConfig } from './config/Config';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useState } from 'react'

import './App.css';
import { Test } from './components/Test';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Signup } from './pages/Signup';
import { Signin } from './pages/Signin';
import { SignOut } from './pages/Signout';
// components
import { Header } from './components/Header';
import { Routes, Route } from 'react-router-dom';
// contexts
import { NavContext } from './contexts/NavContext'
import { FBAuthContext } from './contexts/FBAuthContext';

const FirebaseApp = initializeApp (firebaseConfig)
const FirebaseAuth = getAuth(FirebaseApp)

const NavRoutes = [
  { name: "Home", goto: "/" },
  { name: "About", goto: "/about" },
  { name: "Contact", goto: "/contact" },
  { name: "Sign in", goto: "/signin" },
  { name: "Sign up", goto: "/signup" }
]

const AuthNavRoutes = [
  { name: "Home", goto: "/" },
  { name: "About", goto: "/about" },
  { name: "Contact", goto: "/contact" },
  { name: "Profile", goto: "/profile" },
  { name: "Sign out", goto: "/signout" }
]

function App() {
  const [navItems, setNavItems] = useState(NavRoutes)
  const [auth, setAuth] = useState(null)

  onAuthStateChanged( FirebaseAuth, (user) => {
    if( user ) {
      setAuth( user )
      setNavItems( AuthNavRoutes )
    }
    else {
      setAuth( null )
      setNavItems( NavRoutes )
    }
  })

  return (
    <div className="App">
       <NavContext.Provider value={navItems}>
        <Header />
      </NavContext.Provider>
      <FBAuthContext.Provider value={FirebaseAuth}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signout" element={ <SignOut/> } />
        </Routes>
      </FBAuthContext.Provider>
    </div>
  );
}

export default App;
