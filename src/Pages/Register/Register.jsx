import "./Register.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";

import firebase from "firebase/compat/app";
// import firebaseConfig from "firebase/compat/app";
import firebaseConfig from "../../firebaseConfig.js";
// import firebaseConfig from "../../../firebaseConfig.js";
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
    userDB(newKey);
  }

  // function writeUserData(userId, email, telephone) {
  //   const db = getDatabase();
  //   set(ref(db, "users/" + userId), {
  //     // username: firstName,
  //     // userlastname: lastName,
  //     number: telephone,
  //     email: email,
  //   });
  // }

  async function userDB(newKey) {
    const onjectUser = {
      key: newKey,
      email: email,
    };
    let json = JSON.stringify(onjectUser);
    const responce = await fetch("http://localhost:5173/comments", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(onjectUser),
    });
  }

  function getRegisterData(event) {
    event.preventDefault();
    if (resPasvord !== pasvord) {
      setError(true);
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
    addUser();
  }
  return (
    <div className="All_register">
      <div className="register">
        <p className="register_p">REGISTRATION</p>
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
            placeholder="Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className="input_register"
            required
            value={lastName}
            placeholder="Surname"
            type="text"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            className="input_register"
            required
            value={telephone}
            placeholder="Phone number"
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
            placeholder="Country"
            type="text"
            onChange={(e) => setСountry(e.target.value)}
          />
          <input
            className="input_register"
            required
            value={city}
            placeholder="City"
            type="text"
            onChange={(e) => setСity(e.target.value)}
          />
          <input
            className="input_register"
            required
            value={street}
            placeholder="Street"
            type="text"
            onChange={(e) => setStreet(e.target.value)}
          />
          <input
            className="input_register"
            required
            value={pasvord}
            placeholder="Password"
            type="password"
            onChange={(e) => setPasvord(e.target.value)}
          />
          <input
            className="input_register"
            required
            value={resPasvord}
            placeholder="Retype password"
            type="password"
            onChange={(e) => setResPasvord(e.target.value)}
          />
          <input
            className="input_register register_but"
            type="submit"
            value="Registration"
          />
        </form>
        {error && <p>Password mismatch</p>}
        <div className="login_div">
          <p className="login_div_p">Have an account?</p>
          <NavLink className="login_link" to="/login">
            entrance
          </NavLink>
        </div>
      </div>
    </div>
  );
}
