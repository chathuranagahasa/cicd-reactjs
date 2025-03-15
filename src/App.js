import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';


// import About from './Pages/About'
// import Cars from './Pages/Cars'

// import Services from './Pages/Services'


function App() {
  return(
    <Router>
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      
      
    </div>
    </Router>
  );
}
export default App