import style from "./registration.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Registration = () => {
  const navigate = useNavigate();

  function mySubmitFunction(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    return;
  }

  const [emailResult, setEmailResult] = useState(false);
  const emailInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    const pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    setEmailResult(pattern.test(text));
  };

  const [nameResult, setNameResult] = useState(false);
  const nameInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    const pattern = /^[а-яА-ЯёЁa-zA-Z-]{0,}$/;
    setNameResult(pattern.test(text));
  };

  const [surnameResult, setSurnameResult] = useState(false);
  const surnameInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    const pattern = /^[а-яА-ЯёЁa-zA-Z-]{0,}$/;
    setSurnameResult(pattern.test(text));
  };

  const [phoneResult, setPhoneResult] = useState(false);
  const phoneInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    const pattern = /[+]?[0-9]{8,15}/;
    setPhoneResult(pattern.test(text));
  };

  const [loginResult, setLoginResult] = useState(false);
  const loginInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    const pattern = /^(?=.{3,15}$)(?=.*[a-zA-Z])([a-zA-Z\d-]+)$/;
    setLoginResult(pattern.test(text));
  };

  const [passwordResult, setPasswordResult] = useState(false);
  const passwordInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    const pattern = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}/;
    setPasswordResult(pattern.test(text));
  };

  const [passwordRepeatResult, setPasswordRepeatResult] = useState(false);
  const passwordRepeatInputHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const text = event.target.value;
    const pattern = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}/;
    setPasswordRepeatResult(pattern.test(text));
  };

  function redirect() {
    if (
      emailResult === true &&
      nameResult === true &&
      surnameResult === true &&
      phoneResult === true &&
      loginResult === true &&
      passwordResult === true &&
      passwordRepeatResult === true
    ) {
      navigate("/main");
    }
  }
  return (
    <form className={style.registrationForm} onSubmit={mySubmitFunction}>
      <h2>Registration</h2>
      <input
        type="text"
        placeholder="email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        title="Email — стандартная проверка: латиница, может содержать спецсимволы и
          цифры, обязательно должна быть «собачка» (@) и точка после неё, но
          перед точкой обязательно должны быть буквы"
        onChange={emailInputHandler}
      />
      <input
        type="text"
        placeholder="Login"
        pattern="^(?=.{3,15}$)(?=.*[a-zA-Z])([a-zA-Z\d-]+)$"
        title="Логин — от 3 до 15 символов, только латиница. Без пробелов, без
      спецсимволов, кроме нижнего подчеркивания и дефиса. Может содержать
      числа, но не полностью состоять из них."
        onChange={loginInputHandler}
      />
      <input
        type="text"
        placeholder="Name"
        pattern="^[а-яА-ЯёЁa-zA-Z-]{0,}$"
        title="Имя/Фамилия - латиница или кириллица, не должно быть пробелов и цифр.
          Из спецсимволов допускается только дефис."
        onChange={nameInputHandler}
      />
      <input
        type="text"
        placeholder="Surname"
        pattern="^[а-яА-ЯёЁa-zA-Z-]{3,15}$"
        title="Имя/Фамилия - латиница или кириллица, не должно быть пробелов и цифр.
          Из спецсимволов допускается только дефис."
        onChange={surnameInputHandler}
      />
      <input
        type="text"
        placeholder="Phone"
        pattern="[+]?[0-9]{8,15}"
        title="Телефон — от 8 до 15 символов, состоит из цифр, может начинаться с плюса."
        onChange={phoneInputHandler}
      />
      <input
        type="text"
        placeholder="Password"
        pattern="^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}"
        title="Пароль — от 8 до 30 символов, обязательно хотя бы один спецсимвол и цифра."
        onChange={passwordInputHandler}
      />
      <input
        type="text"
        placeholder="Repeat password"
        pattern="^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}"
        title="Пароль — от 8 до 30 символов, обязательно хотя бы один спецсимвол и цифра."
        onChange={passwordRepeatInputHandler}
      />
      <button
        id="regButton"
        className="button"
        type="submit"
        onClick={redirect}
      >
        Register
      </button>
    </form>
  );
};

export default Registration;
