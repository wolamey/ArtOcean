import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import { useEffect } from 'react'

import './App.scss'
import Catalog from '../Pages/Catalog/Catalog'
import Nav from '../Components/Nav/Nav'
import Footer from '../Components/Footer/Footer'
import Cabinet from '../Pages/Cabinet/Cabinet'
import Cart from '../Pages/Cart/Cart'
import AboutUs from '../Pages/AboutUs/AboutUs'
import Header from '../Components/Header/Header'


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
                        <Route path="/cabinet" element = {
              <Cabinet
              cartCounter = {cartCounter}
              setCartCounter = {setCartCounter}
              
            />} />

            <Route path='/aboutus' element ={
              <AboutUs/>
            }/>

        </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default App
