import "./Footer.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const [help, setHelp] = useState(0);
  useEffect(() => {
    const btn = document.querySelector(".footer_up_button");
    document.querySelector(".footer_up_button").onclick = () => {
      window.scroll(0, 0);
    };
    setTimeout(function () {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 350) {
          btn.classList.remove("none");
        } else {
          btn.classList.add("none");
        }
      });
    }, 1);
  }, [help]);
  return (
    <div className="footer">
      <div onClick={() => setHelp(help + 1)} className="footer_up_button none">
        <p className="footer_up_p">ВВЕРХ</p>
      </div>
      <div className="footer_div">
        <NavLink to="/">
          <img className="img_logo" src="/cabinet/logo.png" alt="" />
        </NavLink>
        <NavLink to="policy">
        <p className="footer_p">© 2021 “Copper Pro” Все права защищенны</p>
        </NavLink>
        <NavLink to="policy">
          <p className="footer_p">Политика конфиденциальности</p>
        </NavLink>
      </div>
      <div className="footer_alt">
        <div className="footer_div">
          <p className="footer_p_top">Навигация</p>
          <NavLink to="home">
            <p className="footer_p">Главная</p>
          </NavLink>
          <NavLink to="catalog">
          <p className="footer_p">Каталог</p>
          </NavLink>
          <NavLink to="aboutus">
          <p className="footer_p">О нас</p>
          </NavLink>
          <NavLink to="#">
          <p className="footer_p">Продажа</p>
          </NavLink>
        </div>
        <div className="footer_div">
          <p className="footer_p_top">Каталог</p>
          <NavLink to="catalog">
          <p className="footer_p">Для эфирных масел</p>
          <p className="footer_p">Для гидролатов</p>
          <p className="footer_p">Медная посуда</p>
          <p className="footer_p">Аксессуары из меди</p>
          <p className="footer_p">Индивидуальный заказ</p>
          <p className="footer_p">Скидки и предложения</p>
          </NavLink>
        </div>
        <div className="footer_div">
          <p className="footer_p_top">Контакты</p>
          <p className="footer_p_alt">Первомайская 8, Минск, Беларусь</p>
          <p className="footer_p_alt">+375 (33) 333 33 33</p>
          <p className="footer_p_alt">salamen@gmail.com</p>
          <div className="footer_div_alt">
            <img
              className="footer_contacts"
              src="/cabinet/Twitter.png"
              alt=""
            />
            <img
              className="footer_contacts"
              src="/cabinet/Facebook.png"
              alt=""
            />
            <img
              className="footer_contacts"
              src="/cabinet/Instagram.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
