import "./Cabinet.css";
import App2 from "./addImage/App.jsx";

export default function Cabinet(likeCount, cartCounter) {
  return (
    <div className="All">
      <p className="p_big">ЛИЧНЫЙ КАБИНЕТ</p>
      <div className="All_but">
        <div className="div_but_1 div_but">
          <img className="img_but" src="/cabinet/man.svg" alt="" />
          <p className="p_but">Детали профиля</p>
        </div>
        <div className="div_but_2 div_but">
          <img className="img_but" src="/cabinet/busket.svg" alt="" />
          <p className="p_but">Заказы</p>
        </div>
        <div className="div_but_3 div_but">
          <img className="img_but" src="/cabinet/heart.svg" alt="" />
          <p className="p_but">Список желаемого</p>
        </div>
        <div className="div_but_4">
          <img className="img_but" src="/cabinet/exit.svg" alt="" />
          <p className="p_but_4">Выйти</p>
        </div>
      </div>
      <div className="All_akk">
        <div className="all_main">
          <div>
            <div className="All2">
              <App2 />
            </div>
            <p className="p_margin_0">Добрый день</p>
            <p className="big_text_cabinet">Иван Иванов</p>
          </div>
        </div>
        <div>
          <input
            className="input_db"
            placeholder="Номер телефона"
            type="text"
          />
          <input className="input_db" placeholder="e-mail" type="text" />
          <input className="input_db" placeholder="Страна" type="text" />
          <input className="input_db" placeholder="Город" type="text" />
          <input className="input_db" placeholder="Улица" type="text" />
        </div>
        <div>
          <p className="big_text_cabinet">Пароль</p>
          <div>
            <input placeholder="Пароль" className="input_db" type="password" />
            <div className="button_all  button_all_1">
              <p className="p_margin_0">Сменить пароль</p>
            </div>
          </div>
        </div>
        <div>
          <p className="big_text_cabinet">Платежная система</p>
          <div>
            <input placeholder="Номер карты" className="input_db" />
            <div>
              <input placeholder="Дата" className="input_db" />
              <input placeholder="CVV" className="input_db" />
            </div>
          </div>
        </div>
        <div className="button_all button_all_2">
          <p className="p_margin_0">Сохранить</p>
        </div>
      </div>
    </div>
  );
}
