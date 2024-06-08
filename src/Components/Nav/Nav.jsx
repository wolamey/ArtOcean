import "./Nav.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Nav(likeCount, cartCounter) {
  const [menu, setMenu] = useState(0);
  let count = likeCount.cartCounter.length;
  useEffect(()=>{
    const burgerMenu = document.querySelector(".menu_open");
    if(menu === 1){
      burgerMenu.classList.add('burger__active')
    }
    else{
      burgerMenu.classList.remove("burger__active")

    }
  })
  return (
    <div className="nav">
      <div className="nav__container nav__container__desctop">
      <div className="nav_1">
        <NavLink to="/">
          <img className="img_logo" src="/cabinet/logo.png" alt="" />
        </NavLink>
        <NavLink to="catalog" className="nav_p a">
          Catalog
        </NavLink>
        <NavLink to="aboutus" className="nav_p a">
          About us
        </NavLink>
        <NavLink to="#" className="nav_p a">
          Sell
        </NavLink>
      </div>
      <div className="nav_2">
        <NavLink to="favourites" className="nav_div">
          <img className="nav_img" src="/cabinet/heart_nav.svg" alt="" />
        </NavLink>
        <NavLink to="cabinet" className="nav_div">
          <img className="nav_img" src="/cabinet/man_nav.svg" alt="" />
        </NavLink>
        <NavLink to="cart" className="nav_div">
          <p className="nav_cart_p">{count}</p>
          <img className="nav_img" src="/cabinet/busket_nav.svg" alt="" />
        </NavLink>
      </div></div>



      <div className="nav__container nav__container__adapt ">

      <div onClick={() => setMenu(menu -1)} className="menu_open">



      <div className="nav_2 nav_2__burger" >
          <NavLink to="#" className="nav_div">
            <img className="nav_img" src="/cabinet/heart_nav.svg" alt="" />
          </NavLink>
          <NavLink to="cabinet" className="nav_div">
            <img className="nav_img" src="/cabinet/man_nav.svg" alt="" />
          </NavLink>
          <NavLink to="cart" className="nav_div">
            <p className="nav_cart_p">{count}</p>
            <img className="nav_img" src="/cabinet/busket_nav.svg" alt="" />
          </NavLink>
        </div>



        <img className="close_nav_menu" src="/cabinet/noSave.svg" alt="" />
      <NavLink className="nav_p2 a" to="/">
          Главная
        </NavLink>
        <NavLink className="nav_p2 a" to="catalog">
          Каталог
        </NavLink>
        <NavLink className="nav_p2 a" to="aboutus">
          О нас
        </NavLink>
        <NavLink className="nav_p2 a" to="aboutus">
          Продажа
        </NavLink>
      </div>


        <div className="nav_1">
          <NavLink to="/">
            <img className="img_logo img_logo__header" src="/cabinet/logo.png" alt="" />
          </NavLink>



          <div className="nav_2">
          <NavLink to="#" className="nav_div nav__favorite">
            <img className="nav_img" src="/cabinet/heart_nav.svg" alt="" />
          </NavLink>
          <NavLink to="cabinet" className="nav_div">
            <img className="nav_img" src="/cabinet/man_nav.svg" alt="" />
          </NavLink>
          <NavLink to="cart" className="nav_div">
            <p className="nav_cart_p">{count}</p>
            <img className="nav_img" src="/cabinet/busket_nav.svg" alt="" />
          </NavLink>
        </div>


        </div>

        <div className="nav_1 nav1_links">
        <NavLink to="catalog" className="nav_p a">
          Каталог
        </NavLink>
        <NavLink to="aboutus" className="nav_p a">
          О нас
        </NavLink>
        <NavLink to="#" className="nav_p a">
          Продажа
        </NavLink>
        </div>
</div>
          <div
            onClick={() => setMenu(1)}
            id="nav_menu_id"
            className="nav_menu"
          >
            <img src="/cabinet/menu.svg" alt="" />
          </div>
    </div>
  );
}
