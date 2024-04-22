import "./Login.css";
import { NavLink } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pasvord, setPasvord] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  function getLoginData(event) {
    event.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pasvord)
      .then((user) => {
        navigate("/");
      })
      .catch((e) => {
        setError(true);
      });
  }
  return (
    <div className="All_login">
      <div className="login">
        <p className="login_p">ВХОД</p>
        <form className="login_inputs" onSubmit={getLoginData}>
          <input
            className="input_login"
            required
            placeholder="e-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input_login"
            required
            placeholder="Пароль"
            type="password"
            value={pasvord}
            onChange={(e) => setPasvord(e.target.value)}
          />
          {error && <p className="error_login">Не верный логин или пароль</p>}
          <input className="input_login" type="submit" value="Вход" />
        </form>
        <div className="register_div">
          <p className="register_div_p">Нет аккаунта?</p>
          <NavLink className="register_link" to="/register">
            зарегистрироваться
          </NavLink>
        </div>
      </div>
    </div>
  );
}
