import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import SinglePage from './components/screens/SinglePage'
import MainPage from './components/screens/MainPage'


function App() {
  return (
   <> 
   
    <Router>
      <Routes>
        <Route>
        <Route path="/" element={<MainPage/>} />
        <Route path="/products/:id" element={<SinglePage/>} />
        </Route>
      </Routes>
    </Router>
    
   </> 
  )
}

export default App