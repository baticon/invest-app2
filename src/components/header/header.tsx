import style from "./header.module.css";
import newsStyle from "./news.module.css";
import { ReactComponent as Logo } from "../../media/jusan_logo.svg";
import backgroundVideo from "../../media/videoplayback2.mp4";
import { INewsInfo } from "./types";
import useNews from "./useNews";
import searchBar from "./searchBar";

const Header = () => {
  const newsLine: INewsInfo[] = useNews();

  return (
    <div key={Date.now()}>
      <header className={style.header}>
        <a href="https://www.jusaninvest.kz/">
          <Logo className={style.logo}></Logo>
        </a>
        <a href="https://www.jusaninvest.kz/ipo.html">IPO</a>
        <a href="https://www.jusaninvest.kz/tariffs">Тарифы</a>
        <a href="https://www.jusaninvest.kz/ipif">ПИФы</a>
        <a href="https://www.jusaninvest.kz/pension">Пенсионные активы</a>
        <a href="https://www.jusaninvest.kz/academy">Обучение</a>
        <a href="https://www.jusaninvest.kz/junior">Junior</a>
        <a href="https://www.jusaninvest.kz/radar">Radar</a>
        <div key={`${Date.now()}+q`}>
          <div className={style.user}>Login</div>
          <span>Sing up</span>
        </div>
      </header>
      <div className={newsStyle.tickerwrapperv} key={`${Date.now()}+e`}>
        <div className={newsStyle.heading}>Trending Now</div>
        <ul className={newsStyle.newstickerv}>
          <li className={newsStyle.newstickervli}>
            <a href="https://github.com/baticon?tab=repositories">
              JUSAN invest web-app made by Batyrbek Kantarbayev
            </a>
          </li>
          <li className={newsStyle.newstickervli}>
            <a href={newsLine[0] ? newsLine[0].url : ""}>
              {newsLine[0] ? newsLine[0].headline : ""}
            </a>
          </li>
          <li className={newsStyle.newstickervli}>
            <a href={newsLine[1] ? newsLine[1].url : ""}>
              {newsLine[1] ? newsLine[1].headline : ""}
            </a>
          </li>
          <li className={newsStyle.newstickervli}>
            <a href={newsLine[2] ? newsLine[2].url : ""}>
              {newsLine[2] ? newsLine[2].headline : ""}
            </a>
          </li>
        </ul>

        <div style={{ backgroundColor: "red", display: "flex" }}>
          <button>Search</button>
          <input
            className={newsStyle.searchField}
            type="text"
            placeholder="🔍 Search by stock symbol (AAPL, CHCI ...)"
            id="searchField"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
