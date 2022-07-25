import style from "./login.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [loginResult, setLoginResult] = useState(false);
  const [passwordResult, setPasswordResult] = useState(false);

  const loginInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    const pattern = /^(?=.{3,15}$)(?=.*[a-zA-Z])([a-zA-Z\d-]+)$/;
    const setLoginResult = pattern.test(text);
  };

  const passwordInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    const pattern = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}/;
    const setPasswordResult = pattern.test(text);
  };

  function redirect() {
    if (loginResult === true && passwordResult === true) {
      navigate("/main");
    }
  }

  return (
    <form className={style.loginForm}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Login"
        pattern="(?=.*[a-zA-Z-].*)[a-zA-Z0-9-_]+"
        title="Логин — от 3 до 15 символов, только латиница. Без пробелов, без
      спецсимволов, кроме нижнего подчеркивания и дефиса. Может содержать
      числа, но не полностью состоять из них."
        onChange={loginInputHandler}
      />
      <input
        type="password"
        placeholder="Password"
        pattern="^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}"
        title="Пароль — от 8 до 30 символов, обязательно хотя бы один спецсимвол и цифра."
        onChange={passwordInputHandler}
      />
      <button
        id="loginButton"
        className="button"
        onClick={() => {
          redirect();
        }}
      >
        Enter
      </button>
    </form>
  );
};

export default Login;
