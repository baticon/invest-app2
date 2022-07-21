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
        <div className={style.buttonContainer}>
          <h1 className={style.header}>Stocks</h1>
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
        <div className={style.stockListContainer}>
          <StockList stocks={stocks} page={page}></StockList>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MainPage;
