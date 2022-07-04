import style from "./header.module.css";
import { ReactComponent as Logo } from "../../media/jusan_logo.svg";

const Header = (stocks: any) => {
  return (
    <div>
      <header className={style.header}>
        <Logo className={style.logo}></Logo>
        <a href="https://www.jusaninvest.kz/ipo.html">IPO</a>
        <a href="https://www.jusaninvest.kz/tariffs">Тарифы</a>
        <a href="https://www.jusaninvest.kz/ipif">ПИФы</a>
        <a href="https://www.jusaninvest.kz/pension">Пенсионные активы</a>
        <a href="https://www.jusaninvest.kz/academy">Обучение</a>
        <a href="https://www.jusaninvest.kz/junior">Junior</a>
        <a href="https://www.jusaninvest.kz/radar">Radar</a>
        <div>
          <div className={style.user}>USER</div>
          <span>User name</span>
        </div>
      </header>
    </div>
  );
};

export default Header;
