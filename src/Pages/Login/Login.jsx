import "./Login.css";
import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <div className="All_login">
      <div className="login">
        <p className="login_p">ВХОД</p>
        <form className="login_inputs">
          <input
            className="input_login"
            required
            placeholder="e-mail"
            type="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input_login"
            required
            placeholder="Пароль"
            type="password"
            // value={pasvord}
            // onChange={(e) => setPasvord(e.target.value)}
          />
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
