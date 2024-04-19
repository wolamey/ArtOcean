import "./Nav.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Nav(likeCount, cartCounter) {
  const [menu, setMenu] = useState(0);
let count = likeCount.cartCounter.length
  useEffect(() => {
    const menu_blok = document.querySelector(".nav_menu");
    const menu_open = document.querySelector(".menu_open");
    if (menu_blok.id == "nav_menu_id") {
      menu_blok.classList.add("none");
      menu_open.classList.remove("none");
      menu_blok.id = "nav_menu";
    } else {
      menu_blok.classList.remove("none");
      menu_open.classList.add("none");
      menu_blok.id = "nav_menu_id";
    }
  }, [menu]);

  return (
    <div className="nav">
      <div onClick={() => setMenu(menu + 1)} className="menu_open">
        <img className="close_nav_menu" src="/cabinet/noSave.svg" alt="" />
      <NavLink className="nav_p2" to="home">
          Главная
        </NavLink>
        <NavLink className="nav_p2" to="catalog">
          Каталог
        </NavLink>
        <NavLink className="nav_p2" to="aboutus">
          О нас
        </NavLink>
        <NavLink className="nav_p2" to="aboutus">
          Продажа
        </NavLink>
      </div>

      <div className="nav_1">
      <NavLink className="nav_p2" to="register">
          Регистрация(кастыль)
        </NavLink>
        <NavLink to="home">
          <img className="img_logo" src="/cabinet/logo.png" alt="" />
        </NavLink>
        <NavLink to="catalog" className="nav_p">
          Каталог
        </NavLink>
        <NavLink to="aboutus" className="nav_p">
          О нас
        </NavLink>
        <NavLink to="#" className="nav_p">
          Продажа
        </NavLink>
        <div
          onClick={() => setMenu(menu + 1)}
          id="nav_menu_id"
          className="nav_menu"
        >
          <img src="/cabinet/menu.svg" alt="" />
        </div>
      </div>
      <div className="nav_2">
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
    </div>
  );
}
