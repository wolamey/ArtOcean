import "./Register.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export default function Register() {
  const [city, setСity] = useState("");
  const [country, setСountry] = useState("");
  const [street, setStreet] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [resPasvord, setResPasvord] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [error, setError] = useState(false);
  const [pasvord, setPasvord] = useState("");
  const navigate = useNavigate();

function writeUserData(userId, email, telephone) {
  const db = getDatabase();
  console.log(db);
  console.log(12);
  set(ref(db, 'users/' + userId), {
 
    number: telephone,
    email: email,
  });
}

  function getRegisterData(event) {
    event.preventDefault();
    if (resPasvord !== pasvord) {
      setError(true);
      console.log(12);
      return;
    } else {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, pasvord)
        .then(() => {
          updateProfile(auth.currentUser, {
            displayName: lastName + " " + firstName,
          })
            .then(() => {
              navigate("/");
            })
            .catch((e) => console.log(e));
        })
        .catch((e) => console.log(e));
    }
  }
  return (
    <div className="All_register">
      <div className="register">
        <p className="register_p">РЕГИСТРАЦИЯ</p>
        <form className="register_inputs" onSubmit={getRegisterData}>
          <input
            className="input_register"
            required
            value={firstName}
            type="text"
            placeholder="Имя"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className="input_register"
            required
            value={lastName}
            placeholder="Фамилия"
            type="text"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            className="input_register"
            required
            value={telephone}
            placeholder="Номер телефона"
            type="text"
            onChange={(e) => setTelephone(e.target.value)}
          />
          <input
            className="input_register"
            required
            value={email}
            placeholder="e-mail"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input_register"
            required
            value={country}
            placeholder="Страна"
            type="text"
            onChange={(e) => setСountry(e.target.value)}
          />
          <input
            className="input_register"
            required
            value={city}
            placeholder="Город"
            type="text"
            onChange={(e) => setСity(e.target.value)}
          />
          <input
            className="input_register"
            required
            value={street}
            placeholder="Улица"
            type="text"
            onChange={(e) => setStreet(e.target.value)}
          />
          <input
            className="input_register"
            required
            value={pasvord}
            placeholder="Пароль"
            type="password"
            onChange={(e) => setPasvord(e.target.value)}
          />
          <input
            className="input_register"
            required
            value={resPasvord}
            placeholder="Павторите пароль"
            type="password"
            onChange={(e) => setResPasvord(e.target.value)}
          />
          <input className="input_register" type="submit" value="Регистрация" />
        </form>
        {error && <p>Пароли не совпадают</p>}
        <div className="login_div">
          <p className="login_div_p">Есть аккаунт?</p>
          <NavLink className="login_link" to="/login">
            войти
          </NavLink>
        </div>
      </div>
    </div>
  );
}
