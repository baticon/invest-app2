import { useState, useEffect } from "react";
import Header from "../header/header";
import StockList from "../stockList/stockList";
import fetchStocks from "../../data/dataFinnhub";
import Footer from "../footer/footer";
import { IStocks } from "./types";
import style from "./mainPage.module.css";

const MainPage = () => {
  const [stocks, setStocks] = useState<IStocks[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function pullData() {
      const stocks = await fetchStocks();
      console.log(stocks);
      setStocks(stocks);
    }

    pullData();
  }, []);

  return (
    <div>
      <Header />
      <div className={style.container}>
        <StockList stocks={stocks} page={page}></StockList>
      </div>
      <div className={style.buttonContainer}>
        <button
          className={style.button}
          onClick={() => {
            setPage(page - 1);
          }}
        >
          ⏪
        </button>
        <span> page {page} </span>
        <button
          className={style.button}
          onClick={() => {
            setPage(page + 1);
          }}
        >
          ⏩
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
