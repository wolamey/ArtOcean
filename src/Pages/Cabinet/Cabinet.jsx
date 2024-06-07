import "./Cabinet.css";
import App2 from "./addImage/App.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getDatabase,
  ref,
  set,
  onValue,
  get,
  child,
  update,
  push,
} from "firebase/database";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default function Cabinet(item) {
  const navigate = useNavigate();

  function delitePay() {
    //
  }

  const database = getDatabase();
  const [help2, setHelp2] = useState(0);
  const [help3, setHelp3] = useState(0);
  const [help4, setHelp4] = useState(10);
  const [help5, setHelp5] = useState(0);
  const [help, setHelp] = useState(0);
  const [type, setType] = useState("true");

  let data = null;

  const starCountRef = ref(database);
  onValue(starCountRef, (snapshot) => {
    data = snapshot.val();
  });

  const [iEmail, setIEmail] = useState();
  const [iKey, setIKey] = useState();
  const [iNumber, setINumber] = useState();
  const [iCountry, setICountry] = useState();
  const [iCity, setICity] = useState();
  const [iStreet, setIStreet] = useState();
  const [iLastName, setILastName] = useState();
  const [iName, setIName] = useState();
  const [iPassword, setIPassword] = useState();
  const [oldArr, setOldArr] = useState();
  const [i, setI] = useState(0);

  const [payCart, setPayCart] = useState();
  const [payDate, setPayDate] = useState();
  const [payCVV, setPayCVV] = useState();

  const [payICart, setIPayCart] = useState(111);
  const [payIDate, setIPayDate] = useState(111);
  const [payICVV, setIPayCVV] = useState(111);

  useEffect(() => {
    if (help4 == 0) {
      //
    } else {
      setHelp4(0);
      const all_cards = document.querySelector(".All_cards");
      onAuthStateChanged(auth, (currentUser) => {
        onValue(starCountRef, (snapshot) => {
          data = snapshot.val();
          const dataArr = Object.values(data.users);
          dataArr.forEach(function (item) {
            const dataEmail = item.email;
            if (currentUser.email == dataEmail) {
              setIEmail(item.email);
              setIKey(item.key);
              setINumber(item.nnumber);
              setICountry(item.country);
              setICity(item.city);
              setIStreet(item.street);
              setILastName(item.lastName);
              setIName(item.name);
              setIPassword(item.password);
              setCroppedImage(item.image);
              const itemArr = Object.values(item);
              itemArr.forEach(function (item, i) {
                const dataCVV = item.CVV;
                i = i + 1;
                if (dataCVV !== undefined) {
                  const card = document.createElement("div");
                  const template2 = `
                <div class="card_cab">
                <input type="submit" value="${item.key}" class="key key${i}">
                  <input type="submit" value="${item.payCart}" class="card_num">
                  <div class="card_cab_div">
                    <input type="submit" value="дата: ${
                      item.payDate
                    }" class="card_date">
                    <input type="submit" value="CVV: ${
                      item.CVV
                    }" class="card_cvv">
                  </div>
              </div>
              `;
                  card.innerHTML = template2;
                  all_cards.append(card);
                }
              });
            }
          });
        });
      });
    }
  }, []);

  function deletPayCart() {
    console.log(12);
    // const keyPay = document.querySelector(".key" + 1);
    // for (let i = 0; i < 1; i++) {
    //   const element = keyPay[i];
    // }
  }

  useEffect(() => {
    const card_num = document.querySelector(".input_card_num");
    const card_date = document.querySelector(".input_card_date");
    const card_cvv = document.querySelector(".input_card_cvv");
    const conteiner_error = document.querySelector(".conteiner_error_div");
    const error = document.querySelector(".error_div");
    if (help3 == 0) {
      setHelp3(10);
    } else {
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
              editDataBasePay();
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
    }
  }, [help]);
  useEffect(() => {
    if (help3 == 0) {
      setHelp3(10);
    } else {
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
        //
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
    }
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
      .split(" ")
      .map((word) => word[0])
      .join("");
  }

  function editDataBase(uid) {
    const db = getDatabase();

    onAuthStateChanged(auth, (currentUser) => {
      onValue(starCountRef, (snapshot) => {
        data = snapshot.val();
        const dataArr = Object.values(data.users);
        dataArr.forEach(function (item) {
          const dataEmail = item.email;
          if (currentUser.email == dataEmail) {
            const dataArr = Object.values(item);
            dataArr.forEach(function (item) {
              const dataArr = Object.values(item);
              if (dataArr[0].length == 3) {
                const a = dataArr[0];
                const b = dataArr[2];
                const c = dataArr[3];
                if (help5 !== 10) {
                  setIPayCart(dataArr[2]);
                  setIPayDate(dataArr[3]);
                  setIPayCVV(dataArr[0]);
                  setTimeout(function () {
                    editIDataBasePay(a, b, c);
                    setHelp5(10);
                  }, 2000);
                }
              }
            });
          }
        });
      });
    });
    setTimeout(function () {
      const newPostKey = push(child(ref(db), "posts")).key;

      const updates = {};
      updates["/users/" + iKey] = null;

      const postData = {
        country: iCountry,
        email: iEmail,
        nnumber: iNumber,
        street: iStreet,
        city: iCity,
        key: iKey,
        password: iPassword,
        lastName: iLastName,
        name: iName,
        // image: croppedImage,
      };

      updates["/users/" + iKey] = postData;
      return update(ref(db), updates);
    }, 1000);
  }

  function editDataBasePay(uid) {
    const db = getDatabase();

    const newPostKey = push(child(ref(db), "posts")).key;

    const postData = {
      payCart: payCart,
      payDate: payDate,
      CVV: payCVV,
      key: newPostKey,
    };

    const updates = {};
    updates["/users/" + iKey + "/" + newPostKey] = postData;
    window.location.reload();
    return update(ref(db), updates);
  }
  function editIDataBasePay(a, b, c) {
    const db = getDatabase();

    const newPostKey = push(child(ref(db), "posts")).key;

    const postData = {
      payCart: b,
      payDate: c,
      CVV: a,
      key: newPostKey,
    };

    const updates = {};
    updates["/users/" + iKey + "/" + newPostKey] = postData;
    window.location.reload();
    return update(ref(db), updates);
  }

  const [croppedImage, setCroppedImage] = useState("/cabinet/first_ava.png");
  const handleNameChange = (croppedImage) => {
    setCroppedImage(croppedImage);
    console.log(croppedImage);
    console.log(1223);
  };
  return (
    <div>
      <div className="All">
        <p className="p_big">ЛИЧНЫЙ КАБИНЕТ</p>
        <div className="All_but">
          <div onClick={signOutUser} className="div_but_1 div_but">
            <img className="img_but" src="/cabinet/man.svg" alt="" />
            <p className="p_but">Выйти из аккаунта</p>
          </div>
          <div className="div_but_2 div_but">
            <img className="img_but" src="/cabinet/busket.svg" alt="" />
            <p className="p_but">Заказы</p>
          </div>
          <div className="div_but_3 div_but">
            <img className="img_but" src="/cabinet/heart.svg" alt="" />
            <p className="p_but">Список желаемого</p>
          </div>
          <div onClick={signOutUser} className="div_but_4">
            <img className="img_but" src="/cabinet/exit.svg" alt="" />
            <p className="p_but_4">Выйти</p>
          </div>
        </div>
        <div className="All_akk">
          <div className="all_main">
            <div>
              <div className="All2">
                <App2
                  onChange={handleNameChange}
                  croppedImage={croppedImage}
                  setCroppedImage={setCroppedImage}
                />
              </div>
              <p className="p_margin_0">Добрый день</p>
              <p className="big_text_cabinet">
                {iLastName} {iName}
              </p>
            </div>
          </div>
          <div className="conteiner_form">
            <div className="form">
              <input
                className="input_db telephone"
                placeholder="Номер телефона"
                defaultValue={iNumber}
                onChange={(event) => setINumber(event.target.value)}
                type="text"
              />
              <input
                className="input_db country"
                placeholder="Страна"
                defaultValue={iCountry}
                onChange={(event) => setICountry(event.target.value)}
                type="text"
              />
              <input
                className="input_db city"
                placeholder="Город"
                defaultValue={iCity}
                onChange={(event) => setICity(event.target.value)}
                type="text"
              />
              <input
                className="input_db street"
                placeholder="Улица"
                defaultValue={iStreet}
                onChange={(event) => setIStreet(event.target.value)}
                type="text"
              />
              <div
                onClick={() =>
                  // setHelp2(help2 + 1),
                  editDataBase()
                }
                className="button_all button_all_2"
              >
                <p className="p_margin_0">Сохранить</p>
              </div>
              <div className="conteiner_error_div2">
                <div className="error_div2"></div>
              </div>
            </div>
          </div>
          <div>
            <p className="big_text_cabinet">Учётная запись</p>
            <div>
              <input
                className="input_db e-mail"
                placeholder="e-mail"
                value={iEmail}
                type="text"
              />
              <input
                placeholder="Пароль"
                className="input_db"
                value={iPassword}
                type={type ? "password" : "text"}
              />
              <img
                onClick={() => setType(!type)}
                className="input_img_1"
                src="/cabinet/Eye.svg"
                alt=""
              />
            </div>
          </div>
          <div>
            <p className="big_text_cabinet">Платежная система</p>
            <div>
              <input
                placeholder="Номер карты"
                className="input_db input_card_num"
                onChange={(event) => setPayCart(event.target.value)}
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
                  onChange={(event) => setPayDate(event.target.value)}
                  type="text"
                />
                <input
                  placeholder="CVV"
                  className="input_db input_card_cvv"
                  onChange={(event) => setPayCVV(event.target.value)}
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
