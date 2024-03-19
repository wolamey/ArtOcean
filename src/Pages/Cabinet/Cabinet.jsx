import "./Cabinet.css";
import App2 from './addImage/App.jsx'

export default function Cabinet(likeCount, cartCounter) {
    return(
        <div className="All">
        <p className="p_big">личный кабинет</p>
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
              <App2/>
              </div>
              <p>Добрый день</p>
              <p>Иван Иванов</p>
            </div>
          </div>
          <div>
            <input className="input_db"
              placeholder="Номер телефона"
              defaultValue="+38 000 000 00 00"
              type="text"
            />
            <input className="input_db"
              placeholder="e-mail"
              defaultValue="agh@gmail.com"
              type="text"
            />
            <input className="input_db" placeholder="Страна" defaultValue="Украина" type="text" />
            <input className="input_db" placeholder="Город" defaultValue="Днепр" type="text" />
            <input className="input_db" placeholder="Улица" defaultValue="ул. Шевченка" type="text" />
          </div>
          <div>
            <p>Пароль</p>
            <div>
              <input className="input_db" type="password" defaultValue="159236" />
              <div className="button_all">
                <p>Сменить пароль</p>
              </div>
            </div>
          </div>
          <div>
            <p>Платежная система</p>
            <div>
              <input className="input_db" value="5115 5555 5555 5555" />
              <div>
                <input className="input_db" value="07/24" />
                <input className="input_db" value="***" />
              </div>
            </div>
          </div>
          <div className="button_all">
            <p>Сохранить</p>
          </div>
        </div>
        </div>
    )
}