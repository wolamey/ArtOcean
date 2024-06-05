import React, { useEffect } from 'react';
import { useState } from 'react';
import closeImg from "../../../../../public/cross.png";
import "./CatalogPopup.scss";

export default function CatalogPopup({ item, text, pic, positionName, price, closePopup, showNotificationMessage, cartCounter, setCartCounter , setAlreadyExist, alreadyExist,showAlreadyExist}) {
    const [number, setNumber] = useState(1);

    function changeNum(amper) {
        if (String(amper) === '-1' && number === 1) {
            return;
        }
        setNumber(number + amper);
    }




    function addToCart(item) {
        if(!cartCounter.includes(item)){
        let updatedCart = [...cartCounter];

        
          updatedCart.push(item);
        setCartCounter(updatedCart);
        localStorage.setItem('cartCounter', JSON.stringify(updatedCart));
          showNotificationMessage();
        } else{
            showAlreadyExist()
        }
      }
      
      

    return (
        <div>
            <div onClick={() => { closePopup() }} className="menu_popup">
                <div onClick={(event) => { event.stopPropagation() }} className="popup_container">
                    <div className='popup_top_block'>
                        <p className="pop_name">{text}</p>
                        <button onClick={() => { closePopup() }}><img src={closeImg} alt="" /></button>
                    </div>
                    <div className="pop_content">
                        <img src={pic} alt="" />
                        <div className="full_info">
                            <p className="weight_calories"></p>
                        </div>
                    </div>
                    <div className="popup_bottom_part">

                        <button className="add_to_cart_button" onClick={() => {

                            closePopup();
                            addToCart(item);
                        }}>Add to cart</button>
                        <div className="item_price">{price}₽</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
