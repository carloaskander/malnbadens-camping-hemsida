import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './Navbar.jsx';

// Pages
import Boende from './pages/Boende.jsx';
import Aktiviteter from './pages/Aktiviteter.jsx';
import Oppettider from './pages/Oppettider.jsx';
import Kontakt from './pages/Kontakt.jsx';
import Home from './pages/Hem.jsx';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/boende' element={<Boende />} />
          <h1>Extra Test</h1>
          <Route path='/aktiviteter' element={<Aktiviteter />} />
          <Route path='/oppettider' element={<Oppettider />} />
          <Route path='/kontakt' element={<Kontakt />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
