import React from 'react';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from './components';
import { AboutMe, Contact, Landing } from './pages';
import styles from './style';

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>

    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/aboutme' element={<AboutMe />}></Route>
      </Routes>
    </Router>
  </div>
)


export default App