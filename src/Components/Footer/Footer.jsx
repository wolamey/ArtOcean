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
      <div className="footer__container">
        <div onClick={() => setHelp(help + 1)} className="footer_up_button none">
          <p className="footer_up_p">ВВЕРХ</p>
        </div>
        <div className="footer_div">
          <NavLink to="/">
            <img className="img_logo" src="/cabinet/logo.png" alt="" />
          </NavLink>
          {/* <NavLink to="policy"> */}
            <p className="footer_p">© 2021 “Copper Pro” Все права защищенны</p>
          {/* </NavLink> */}
          <NavLink className='footer__a' to="policy">
            <p className="footer_p a">Политика конфиденциальности</p>
          </NavLink>
        </div>
        <div className="footer_alt">
          <div className="footer_div">
            <p className="footer_p_top a">Навигация</p>
            <NavLink to="">
              <p className="footer_p a">Главная</p>
            </NavLink>
            <NavLink to="catalog">
              <p className="footer_p a">Каталог</p>
            </NavLink>
            <NavLink to="aboutus">
              <p className="footer_p a">О нас</p>
            </NavLink>
            <NavLink to="#">
              <p className="footer_p a">Продажа</p>
            </NavLink>
          </div>
          <div className="footer_div">
            <p className="footer_p_top">Каталог</p>
            {/* <NavLink to="catalog"> */}
              <a href="#" className="footer_p a">Для эфирных масел</a>
              <a href="#" className="footer_p a">Для гидролатов</a>
              <a href="#" className="footer_p a">Медная посуда</a>
              <a href="#" className="footer_p a">Аксессуары из меди</a>
              <a href="#" className="footer_p a">Индивидуальный заказ</a>
              <a href="#" className="footer_p a">Скидки и предложения</a>
            {/* </NavLink> */}
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
      </div></div>
  );
}
