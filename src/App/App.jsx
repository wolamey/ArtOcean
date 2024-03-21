import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import { useEffect } from 'react'

import './App.scss'
import Catalog from '../Pages/Catalog/Catalog'
import Header from '../Components/Header/Header'
import Cart from '../Pages/Cart/Cart'
import Home from '../Pages/Home/Home'
import AboutUs from '../Pages/AboutUs/AboutUs'

function App() {

  const [likeCount, setLikeCount] = useState(0)
  const [cartCounter, setCartCounter] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('cartCounter')) || [];
    setCartCounter(data);
  }, []);
  

  return (
    <div>
      <Router>



        <Header
          likeCount={likeCount}
          cartCounter = {cartCounter}

        />

        <Routes>
          <Route path="/Catalog" element={
            <Catalog
              setLikeCount={setLikeCount}
              likeCount={likeCount}
              cartCounter={cartCounter}
              setCartCounter={setCartCounter}

            />} />

            <Route path="/cart" element = {
              <Cart
              cartCounter = {cartCounter}
              setCartCounter = {setCartCounter}
              
            />} />

            <Route path = '/' element={
              <Home/>
            }/>
            <Route path='/aboutus' element ={
              <AboutUs/>
            }/>

        </Routes>
      </Router>
    </div>
  )
}

export default App
