import React from 'react';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from './components';
import { AboutMe, Contact, Landing, NotFound } from './pages';

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>

    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/aboutme' element={<AboutMe />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </Router>
  </div>
)


export default App