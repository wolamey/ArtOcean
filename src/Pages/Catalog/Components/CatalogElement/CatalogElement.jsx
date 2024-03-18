import React, { useState, useEffect } from 'react';
import "./CatalogElement.scss";
import like from "../../../../../public/like.png";
import likeImg from "../../../../../public/noLike.svg";
import CatalogPopup from '../CatalogPopup/CatalogPopup';


export default function CatalogElement({ componentData, setLikeCount, setPopup, openPopup, closePopup, popup, cartCounter, setCartCounter }) {
  const [likedItems, setLikedItems] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  const generateUniqueIdentifier = (item) => `${item.id}-${item.text}`;

  const handleLikeClick = (item) => {
    const uniqueIdentifier = generateUniqueIdentifier(item);
    setLikedItems(prevLikedItems => {
      if (prevLikedItems.includes(uniqueIdentifier)) {
        return prevLikedItems.filter(itemIndex => itemIndex !== uniqueIdentifier);
      } else {
        return [...prevLikedItems, uniqueIdentifier];
      }
    });
  };

  useEffect(() => {
    setLikeCount(likedItems.length);
  }, [likedItems, setLikeCount]);


  const showNotificationMessage = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000); // Увеличиваем время отображения уведомления на 3 секунды
  }

  let a = 0;

  return (
    <div>
      {showNotification && <div className="notification">Product added to cart</div>}

      <div className='catalog_list'>
        {componentData.map((item) => (
          <div onClick={() => {
            openPopup(item)
          }} className='item_catalog_element' key={item.id}>
            <img src={item.pic} alt="" />
            <div className="item_description">
              <p className="prod_name">{item.text}</p>
              <p className="prod_price">{item.price} $</p>
            </div>
            <button onClick={(event) => { event.stopPropagation() }} className="set_like" >
              <img onClick={() => handleLikeClick(item)} src={likedItems.includes(generateUniqueIdentifier(item)) ? like : likeImg} alt="" />
            </button>
          </div>
        ))}


      </div>
      {popup.map(item => {
        return <div className='popBack'>
          <CatalogPopup {...item}
            closePopup={closePopup}
            item={item}
            showNotification={showNotification}
            setShowNotification={setShowNotification}
            showNotificationMessage={showNotificationMessage}
            cartCounter={cartCounter}
            setCartCounter={setCartCounter}

          />
        </div>
      })}
    </div>
  );
}
