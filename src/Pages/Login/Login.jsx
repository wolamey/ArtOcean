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
        <p className="login_p">ENTRANCE</p>
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
            placeholder="Password"
            type="password"
            value={pasvord}
            onChange={(e) => setPasvord(e.target.value)}
          />
          {error && <p className="error_login">Wrong login or password</p>}
          <input className="input_login login_but" type="submit" value="entrance" />
        </form>
        <div className="register_div">
          <p className="register_div_p">Don't have an account?</p>
          <NavLink className="register_link" to="/register">
            register
          </NavLink>
        </div>
      </div>
    </div>
  );
}