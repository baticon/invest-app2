import style from "./registration.module.css";

const Registration = () => {
  return (
    <form className={style.registrationForm}>
      <h2>Registration</h2>
      <input
        type="text"
        placeholder="email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        title="Email — стандартная проверка: латиница, может содержать спецсимволы и
          цифры, обязательно должна быть «собачка» (@) и точка после неё, но
          перед точкой обязательно должны быть буквы"
      />
      <input
        type="text"
        placeholder="Login"
        pattern="(?=.*[a-zA-Z-].*)[a-zA-Z0-9-_]+"
        title="Логин — от 3 до 15 символов, только латиница. Без пробелов, без
      спецсимволов, кроме нижнего подчеркивания и дефиса. Может содержать
      числа, но не полностью состоять из них."
      />
      <input
        type="text"
        placeholder="Name"
        pattern="^[а-яА-ЯёЁa-zA-Z-]{0,}$"
        title="Имя/Фамилия - латиница или кириллица, не должно быть пробелов и цифр.
          Из спецсимволов допускается только дефис."
      />
      <input
        type="text"
        placeholder="Surname"
        pattern="^[а-яА-ЯёЁa-zA-Z-]{3,15}$"
        title="Имя/Фамилия - латиница или кириллица, не должно быть пробелов и цифр.
          Из спецсимволов допускается только дефис."
      />
      <input
        type="text"
        placeholder="Phone"
        pattern="[+]?[0-9]{8,15}"
        title="Телефон — от 8 до 15 символов, состоит из цифр, может начинаться с плюса."
      />
      <input
        type="text"
        placeholder="Password"
        pattern="^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}"
        title="Пароль — от 8 до 30 символов, обязательно хотя бы один спецсимвол и цифра."
      />
      <input
        type="text"
        placeholder="Repeat password"
        pattern="^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}"
        title="Пароль — от 8 до 30 символов, обязательно хотя бы один спецсимвол и цифра."
      />
      <button id="regButton" className="button" type="submit">
        Register
      </button>
    </form>
  );
};

export default Registration;
