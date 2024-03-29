import React from 'react'
import "./CopperDishes.scss"
import CatalogElement from '../../Components/CatalogElement/CatalogElement'
export default function CopperDishes({componentData, setLikeCount, setPopup, openPopup, closePopup, popup,cartCounter, setCartCounter}) {
  return (
    <div >
      <CatalogElement
        componentData = {componentData}
        setLikeCount = {setLikeCount}
        popup={popup}
        setPopup={setPopup}
        openPopup={openPopup}
        closePopup={closePopup}
        cartCounter={cartCounter}
        setCartCounter={setCartCounter}

      />
    </div>
  )
}
