import "./Footer.css";

export default function Footer(likeCount, cartCounter) {
  return (
    <div className="footer">
      <div className="footer_div">
        <img className="img_logo" src="/cabinet/logo.png" alt="" />
        <p className="footer_p">© 2021 “Copper Pro” Все права защищенны</p>
        <p className="footer_p">Политика конфиденциальности</p>
      </div>
      <div className="footer_alt">
        <div className="footer_div">
          <p className="footer_p_top">Навигация</p>
          <p className="footer_p">Каталог</p>
          <p className="footer_p">Новости</p>
          <p className="footer_p">Доставка</p>
          <p className="footer_p">О нас</p>
          <p className="footer_p">Контакты</p>
        </div>
        <div className="footer_div">
          <p className="footer_p_top">Каталог</p>
          <p className="footer_p">Для эфирных масел</p>
          <p className="footer_p">Для гидролатов</p>
          <p className="footer_p">Медная посуда</p>
          <p className="footer_p">Аксессуары из меди</p>
          <p className="footer_p">Индивидуальный заказ</p>
          <p className="footer_p">Скидки и предложения</p>
        </div>
        <div className="footer_div">
          <p className="footer_p_top">Контакты</p>
          <p className="footer_p">Бажана 8-Б, Киев, 02132 Украина</p>
          <p className="footer_p">+38 (096) 990 67 56</p>
          <p className="footer_p">a.alambik@gmail.com</p>
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
