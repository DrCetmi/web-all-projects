import React from 'react';
import '../sass/App.scss';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// complete the following code
import Vocals from './pages/Vocals';
import Bass from './pages/Bass';
import Guitar from './pages/Guitar';
import Drums from './pages/Drums';

function App() {
  
  return (
    <BrowserRouter>
   <div className='app'>
  <div className='navigation'>
    <div className='logo'>
   <img src={require('../static/logo.png')}/>
   </div>
   <nav>
   <ul>
   <li><Link to="/vocals">Vocals</Link></li>
   <li><Link to="/bass">Bass</Link></li>
   <li><Link to="/guitar">Guitar</Link></li>
   <li><Link to="/drums">Drums</Link></li>
   </ul>
   </nav>
  </div>
 
  <Routes>
 <Route path="/vocals" element={<Vocals />}/>
  <Route path="/bass" element={<Bass />}/>
  <Route path="/guitar" element={<Guitar />}/>
  <Route path="/drums" element={<Drums />}/>
  </Routes>  
  
   </div>
    </BrowserRouter>
  );
}

export default App;
