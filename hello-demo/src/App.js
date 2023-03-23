import React from 'react';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about'
import Bounce from './pages/bounce';
import './App.css';

function App() {
  return (
    <Router>
    <Navbar />  
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/bounce' element={<Bounce/>} />
      </Routes>
    </Router>
  );
}

export default App;
