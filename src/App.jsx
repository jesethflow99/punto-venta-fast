import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Routes/Home'
import Venta from './Routes/Venta'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter> 
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/venta' element={<Venta/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App