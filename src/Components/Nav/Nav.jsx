import "./Nav.css";
import { useEffect, useState } from "react";

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
        <p>Каталог</p>
        <p>Новости</p>
        <p>Доставка</p>
        <p>О нас</p>
        <p>Контакты</p>
      </div>

      <div className="nav_1">
        <img className="img_logo" src="/cabinet/logo.png" alt="" />
        <p className="nav_p">Каталог</p>
        <p className="nav_p">Новости</p>
        <p className="nav_p">Доставка</p>
        <p className="nav_p">О нас</p>
        <p className="nav_p">Контакты</p>
        <div onClick={() => setMenu(menu + 1)} id="nav_menu_id" className="nav_menu">
          <img src="/cabinet/menu.svg" alt="" />
        </div>

      </div>
      <div className="nav_2">
        <div className="nav_div">
          <img className="nav_img" src="/cabinet/heart_nav.svg" alt="" />
        </div>
        <div className="nav_div">
          <img className="nav_img" src="/cabinet/man_nav.svg" alt="" />
        </div>
        <div className="nav_div">
          <img className="nav_img" src="/cabinet/busket_nav.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
