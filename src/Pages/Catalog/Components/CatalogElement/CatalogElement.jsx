import React, { useState, useEffect } from 'react';
import "./CatalogElement.scss";
import like from "../../../../../public/like.png";
import likeImg from "../../../../../public/noLike.svg";
import CatalogPopup from '../CatalogPopup/CatalogPopup';


export default function CatalogElement({ componentData, setLikeCount, setPopup, openPopup, closePopup, popup, cartCounter, setCartCounter , favCounter, setFavCounter}) {
  const [likedItems, setLikedItems] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [alreadyExist, setAlreadyExist] = useState (false)

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

  useEffect(() => {
    setLikeCount(likedItems.length);
  }, [likedItems, setLikeCount]);

  const itemCounts = favCounter.reduce((acc, item) => {
    acc[item.id] = (acc[item.id] || 0) + 1;
    return acc;
}, {});



  const showNotificationMessage = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  }

  const showAlreadyExist = () => {
    setAlreadyExist(true);
    setTimeout(() => {
      setAlreadyExist(false);
    }, 3000);
  }


  function addToFav(item) {
    if(cartCounter.includes(item)){
    alert('this prod already exist')
    }else{

    
    let updatedFav = [...favCounter];

    
    updatedFav.push(item);
  
    setFavCounter(updatedFav);
    localStorage.setItem('favCounter', JSON.stringify(updatedFav));

    setLikeCount(updatedFav.length);

    for(let i = 0; i < favCounter.length; i++){
      //
      
    }
  }
  }
  

  let a = 0;

  return (
    <div>
      {showNotification && <div className="notification">Product added to cart</div>}
      {alreadyExist && <div className="notification">Already exist</div>}

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
              {/* <img src={favCounter.includes(item)? like:likeImg} onClick={() => addToFav(item) } alt="" /> */}
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
            alreadyExist = {alreadyExist}
            setAlreadyExist = {setAlreadyExist}
            showAlreadyExist={showAlreadyExist}

          />
        </div>
      })}
    </div>
  );
}
