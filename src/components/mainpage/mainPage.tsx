import React, { useState, useEffect } from "react";
import Header from "../header/header";
import SubHeader from "../subheader/subheader";
import StockList from "../stockList/stockList";
import fetchStocks from "../../data/dataFinnhub";
import fetchFMP from "../../data/dataFMP";
// import fetchStocks from "./data/dummy_data";
import Footer from "../footer/footer";

interface IStocks {
  currency: string;
  description: string;
  displaySymbol: string;
  figi: string;
  isin: null;
  mic: string;
  shareClassFIGI: string;
  symbol: string;
  symbol2: string;
  type: string;
}

const MainPage = () => {
  const [stocks, setStocks] = useState<IStocks[]>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState<String>();

  useEffect(() => {
    async function pullData() {
      const stocks = await fetchStocks();
      setStocks(stocks);
    }

    pullData();
  }, []);
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <SubHeader>
          <StockList stocks={stocks} page={page}></StockList>
          {/* <StockList stocks={stocks}></StockList> */}
          <br></br>
          <br></br>
          <div style={{ paddingLeft: "340px", margin: "5px" }}>
            <button
              onClick={() => {
                setPage(page - 1);
              }}
            >
              ⏪
            </button>
            <span> {page} </span>
            <button
              onClick={() => {
                setPage(page + 1);
              }}
            >
              ⏩
            </button>
          </div>
        </SubHeader>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
