import style from "./login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
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
      />
      <input
        type="password"
        placeholder="Password"
        pattern="^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}"
        title="Пароль — от 8 до 30 символов, обязательно хотя бы один спецсимвол и цифра."
      />
      <button
        id="loginButton"
        className="button"
        onClick={() => {
          navigate("/main");
        }}
      >
        Enter
      </button>
    </form>
  );
};

export default Login;
