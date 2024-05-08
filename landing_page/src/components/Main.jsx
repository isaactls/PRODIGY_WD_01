import React from 'react'
import Home from "../pages/Home/Home"
import { Route, Routes } from 'react-router-dom'
function Main() {
  return (
    <main>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
    </main>
  )
}

export default Main