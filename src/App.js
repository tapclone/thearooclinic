import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from './Pages/AboutPage';
import Homepage from './Pages/Homepage'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Homepage/>}></Route>
      <Route exact path="/about" element={<AboutPage/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App