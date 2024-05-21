import "./Register.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";

import firebase from "firebase/compat/app";
import firebaseConfig from "../../../firebaseConfig.js";
import "firebase/compat/database";
// import { useQuery, useMutation, useQueryClient } from "react-query";

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

  // {
  //   "users": {
  //     "alovelace": {
  //       "name": "Ada Lovelace",
  //       "contacts": { "ghopper": true },
  //     },
  //     "ghopper": { ... },
  //     "eclarke": { ... }
  //   }
  // }

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.database();

  async function addUser(userData) {
    const ref = db.ref("users").push();
    const newKey = ref.key;
    const dataWithKey = {
      ...userData,
      key: newKey,
      country: country,
      name: firstName,
      email: email,
      lastName: lastName,
      nnumber: telephone,
      password: pasvord,
      street: street,
      city: city,
    };
    await ref.set(dataWithKey);
    console.log(newKey);
    userDB(newKey)
  }

  // function writeUserData(userId, email, telephone) {
  //   const db = getDatabase();
  //   console.log(db);
  //   console.log(12);
  //   set(ref(db, "users/" + userId), {
  //     // username: firstName,
  //     // userlastname: lastName,
  //     number: telephone,
  //     email: email,
  //   });
  // }

  async function userDB(newKey){
    console.log(21);
    const onjectUser = {
      key: newKey,
      email: email
    };
    let json = JSON.stringify(onjectUser);
    console.log(json)
    const responce = await fetch("http://localhost:5173/comments", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(onjectUser),
    });
  }
  
  

  function getRegisterData(event) {
    console.log(12);
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
    addUser()
  }
  return (
    <div className="All_register">
      <div className="register">
        <p className="register_p">РЕГИСТРАЦИЯ</p>
        <form
          className="register_inputs"
          onSubmit={
            // () => {
            // addUser();
            getRegisterData
          // ;}
        }
        >
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
