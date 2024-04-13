import React, { useState } from 'react';
import './Catalog.scss'
import CatalogTopPart from './Components/CatalogTopPart/CatalogTopPart'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import data from "../../data/data.json"
import Sort_Search from './Components/Sort_Search/Sort_Search'
import CopperDishes from './Components/CopperDishes/CopperDishes'


const popArr = [];


export default function Catalog({likeCount, setLikeCount,cartCounter, setCartCounter, setFavCounter, favCounter}) {

  const [catalogPart, setCatalogPart] = useState(data.copperDishesForCatalog)
  const [popup, setPopup] = useState(popArr);

  function openPopup(item) {
    const arr = [...popArr];
    arr.push(item);
    setPopup(arr);
  }
  function closePopup() {
    setPopup([]);
  }


  return (
    <div>

        <CatalogTopPart
          setCatalogPart={setCatalogPart}
          data={data}
        />
        <Sort_Search />
        <CopperDishes
          popup={popup}
          setPopup={setPopup}
          openPopup={openPopup}
          closePopup={closePopup}

          likeCount={likeCount}
          setLikeCount={setLikeCount}
          componentData={catalogPart}

          setCartCounter =  {setCartCounter}
          cartCounter = {cartCounter}

          favCounter = {favCounter}
          setFavCounter = {setFavCounter}

        />
    </div>
  )
}
