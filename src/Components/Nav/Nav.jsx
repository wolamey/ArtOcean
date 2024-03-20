import "./Nav.css";
import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom'

export default function Nav(likeCount, cartCounter) {


  const [menu, setMenu] = useState(0);

  useEffect(() => {
    const menu_blok = document.querySelector(".nav_menu");
    const menu_open = document.querySelector(".menu_open");
    if (menu_blok.id == "nav_menu_id") {
      menu_blok.classList.add("none");
      menu_open.classList.remove("none");
      menu_blok.id = "nav_menu"
    }else{
      menu_blok.classList.remove("none");
      menu_open.classList.add("none");
      menu_blok.id = "nav_menu_id"

    }
  }, [menu]);

  return (
    <div className="nav">
      <div onClick={() => setMenu(menu + 1)} className="menu_open">
        <NavLink to='catalog'>Каталог</NavLink>
        <NavLink to='#'>Новости</NavLink>
        <NavLink to='#'>Доставка</NavLink>
        <NavLink to='#'>О нас</NavLink>
        <NavLink to='#'>Контакты</NavLink>
      </div>

      <div className="nav_1">
        <img className="img_logo" src="/cabinet/logo.png" alt="" />
        <NavLink to='catalog' className="nav_p">Каталог</NavLink>
        <NavLink to='#' className="nav_p">Новости</NavLink>
        <NavLink to='#' className="nav_p">Доставка</NavLink>
        <NavLink to='#' className="nav_p">О нас</NavLink>
        <NavLink to='#' className="nav_p">Контакты</NavLink>
        <div onClick={() => setMenu(menu + 1)} id="nav_menu_id" className="nav_menu">
          <img src="/cabinet/menu.svg" alt="" />
        </div>

      </div>
      <div className="nav_2">
        <NavLink to='#' className="nav_div">
          <img className="nav_img" src="/cabinet/heart_nav.svg" alt="" />
        </NavLink>
        <NavLink to='cabinet' className="nav_div">
          <img className="nav_img" src="/cabinet/man_nav.svg" alt="" />
        </NavLink>
        <NavLink to='cart' className="nav_div">
          <img className="nav_img" src="/cabinet/busket_nav.svg" alt="" />
        </NavLink>
      </div>
    </div>
  );
}
