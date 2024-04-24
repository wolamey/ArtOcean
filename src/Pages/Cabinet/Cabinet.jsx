import "./Cabinet.css";
import App2 from "./addImage/App.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default function Cabinet() {
  const [help2, setHelp2] = useState(0);
  const [help, setHelp] = useState(0);
  const [type, setType] = useState("true");

  useEffect(() => {
    const card_num = document.querySelector(".input_card_num");
    const card_date = document.querySelector(".input_card_date");
    const card_cvv = document.querySelector(".input_card_cvv");
    const conteiner_error = document.querySelector(".conteiner_error_div");
    const error = document.querySelector(".error_div");
    const all_cards = document.querySelector(".All_cards");
    if (
      card_num.value !== "" &&
      card_date.value !== "" &&
      card_cvv.value !== ""
    ) {
      if (card_num.value.length == 16) {
        if (card_date.value.length == 5) {
          if (card_cvv.value.length == 3) {
            const template = `
            <p class="error_div_p_successful">Данные сохранены успешно</p>
            `;
            error.innerHTML = template;
            conteiner_error.append(error);

            const card = document.createElement("div");
            const template2 = `
              <div class="card_cab">
                <input type="submit" value="1234567812345678" class="card_num">
                <div class="card_cab_div">
                  <input type="submit" value="дата: 23/23" class="card_date">
                  <input type="submit" value="CVV: 231" class="card_cvv">
                </div>
                <buttton class="card_button">Отвязать</buttton>
            </div>
            `;
            card.innerHTML = template2;
            all_cards.append(card);
          } else {
            const template = `
          <p>Неправильный CVV</p>
          `;
            error.innerHTML = template;
            conteiner_error.append(error);
          }
        } else {
          const template = `
        <p>Неправильная дата</p>
        `;
          error.innerHTML = template;
          conteiner_error.append(error);
        }
      } else {
        const template = `
      <p>Неправильный номер карты</p>
      `;
        error.innerHTML = template;
        conteiner_error.append(error);
      }
    } else {
      const template = `
      <p>Введите все данные</p>
      `;
      error.innerHTML = template;
      conteiner_error.append(error);
    }
    setTimeout(function () {
      const template = ``;
      error.innerHTML = template;
      conteiner_error.append(error);
    }, 4000);
  }, [help]);
  useEffect(() => {
    const telephone = document.querySelector(".telephone");
    const e_mail = document.querySelector(".e-mail");
    const country = document.querySelector(".country");
    const street = document.querySelector(".street");
    const city = document.querySelector(".city");
    const conteiner_error = document.querySelector(".conteiner_error_div2");
    const error = document.querySelector(".error_div2");
    if (
      telephone.value !== "" &&
      e_mail.value !== "" &&
      country.value !== "" &&
      street.value !== "" &&
      city.value !== ""
    ) {
      const onjectNewUser = {
        telephone: telephone.value,
        e_mail: e_mail.value,
        country: country.value,
        street: street.value,
        city: city.value,
      };
      console.log(onjectNewUser);
    } else {
      const template = `
      <p>Введите все данные</p>
      `;
      error.innerHTML = template;
      conteiner_error.append(error);
    }
    setTimeout(function () {
      const template = ``;
      error.innerHTML = template;
      conteiner_error.append(error);
    }, 4000);
  }, [help2]);


  const [user, setUser] = useState();
  const auth = getAuth();
  function signOutUser() {
    signOut(auth).then(() => {
      setUser({
        email: null,
        displayName: null,
      });
    });
  }
  function sliceUserInitial(string) {
    return string
      ?.trim()
      .split(' ')
      .map(word => word[0])
      .join("");
  }
  return (
    <div>
      <div className="All">
        <p className="p_big">ЛИЧНЫЙ КАБИНЕТ</p>
        <div className="All_but">
          <div className="div_but_1 div_but">
            <img className="img_but" src="/cabinet/man.svg" alt="" />
            <p
              // onClick={signOutUser}
              className="p_but"
            >
                      {/* Смотреть котиков не от имени {user.displayName}?({sliceUserInitial(user.displayName)}) */}
            </p>
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
              className="input_db telephone"
              placeholder="Номер телефона"
              type="text"
            />
            <input
              className="input_db e-mail"
              placeholder="e-mail"
              type="text"
            />
            <input
              className="input_db country"
              placeholder="Страна"
              type="text"
            />
            <input className="input_db city" placeholder="Город" type="text" />
            <input
              className="input_db street"
              placeholder="Улица"
              type="text"
            />
            <div
              onClick={() => setHelp2(help2 + 1)}
              className="button_all button_all_2"
            >
              <p className="p_margin_0">Сохранить</p>
            </div>
            <div className="conteiner_error_div2">
              <div className="error_div2"></div>
            </div>
          </div>
          <div>
            <p className="big_text_cabinet">Пароль</p>
            <div>
              <input
                placeholder="Пароль"
                className="input_db"
                type={type ? "password" : "text"}
              />
              <img
                onClick={() => setType(!type)}
                className="input_img_1"
                src="/cabinet/Eye.svg"
                alt=""
              />
              <div className="button_all  button_all_1">
                <p className="p_margin_0">Сменить пароль</p>
              </div>
            </div>
          </div>
          <div>
            <p className="big_text_cabinet">Платежная система</p>
            <div>
              <input
                placeholder="Номер карты"
                className="input_db input_card_num"
                type="number"
              />
              <img
                className="input_img_2"
                src="/cabinet/creditСard.svg"
                alt=""
              />
              <div>
                <input
                  placeholder="Дата"
                  className="input_db input_card_date"
                  type="text"
                />
                <input
                  placeholder="CVV"
                  className="input_db input_card_cvv"
                  type="number"
                />
              </div>
            </div>
          </div>
          <div className="conteiner_error_div">
            <div className="error_div"></div>
          </div>
          <div
            onClick={() => setHelp(help + 1)}
            className="button_all button_all_2"
          >
            <p className="p_margin_0">Сохранить</p>
          </div>
          <div className="All_cards"></div>
        </div>
      </div>
    </div>
  );
}
