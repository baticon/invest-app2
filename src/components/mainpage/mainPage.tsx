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

  const [search, setSearch] = useState("");

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredStock = event.target.value;
    setSearch(enteredStock);
  };

  function mySubmitFunction(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    return;
  }

  return (
    <div>
      <Header />
      <div className={style.container}>
        <h1 className={style.header}>Stocks</h1>
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
        <form className={style.formContainer} onSubmit={() => mySubmitFunction}>
          <input
            placeholder="Search by ticker (ex, AAPL, IBM, etc)"
            onChange={inputHandler}
          ></input>
          <button type="submit"> Search </button>
        </form>
        <div className={style.stockListContainer}>
          <StockList search={search} stocks={stocks} page={page}></StockList>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MainPage;
