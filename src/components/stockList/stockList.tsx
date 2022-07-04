import { FC } from "react";
import { useState, useEffect } from "react";
import style from "./stockList.module.css";
import fetchFMP from "../../data/dataFMP";
import fetchLogo from "../../data/logoFetch";
import { Link } from "react-router-dom";

interface StockProps {
  stocks: {
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
  }[];
  page: number;
}

const StockList: FC<StockProps> = ({ stocks, page }) => {
  let stocksTo = page * 10 - 1;
  let stocksFrom = stocksTo - 9;

  let slicedStocks = stocks.slice(stocksFrom, stocksTo);

  function GetLogo(stockSymbol: string) {
    const [logo, setLogo] = useState<String>();
    useEffect(() => {
      async function pullData() {
        const fetchedLogo = await fetchLogo(stockSymbol);
        if (fetchedLogo !== undefined) {
          setLogo(fetchedLogo.logo);
        }
      }
      pullData();
    }, [stockSymbol]);
    return logo;
  }

  function GetPrice(stockSymbol: string) {
    const [priceData, setPriceData] = useState<number>();
    useEffect(() => {
      async function pullData() {
        if (stockSymbol !== undefined) {
          const price = await fetchFMP(stockSymbol);
          if (price[0] !== undefined) {
            setPriceData(price[0].price);
          }
        } else {
          setPriceData(0);
        }
      }
      pullData();
    }, [stockSymbol]);
    return priceData;
  }

  const renderListItems = () => {
    // console.log("test1 from stockList.tsx");
    return slicedStocks.map((stock: any) => {
      // console.log("test2 from stockList.tsx");
      let price = GetPrice(stock.displaySymbol);
      let logo = GetLogo(stock.displaySymbol);
      if (price === undefined) {
        price = 0;
      }
      return (
        <Link to={`/companydetails/${stock.displaySymbol}`}>
          <div key={stock.displaySymbol} className={style.individualStock}>
            <span className={style.span}>Stock name: {stock.description}</span>
            <span className={style.span}>
              Stock symbol: {stock.displaySymbol}
            </span>
            <span className={style.span}>Stock price: {price}$</span>
            <div className={style.companyLogo}>
              <img src={`${logo}`} alt="logo" width="20" height="20"></img>
            </div>
            {/* <div
              className={style.logo}
              style={{
                backgroundImage: `url("${logo}")`,
                backgroundRepeat: "no-repeat",
              }}
            ></div> */}
          </div>
        </Link>
      );
    });
  };

  return (
    <div className={style.container} key="hello">
      <h1 className={style.header}>Stocks</h1>
      <div className={style.stockList} key="there">
        {renderListItems()}
      </div>
    </div>
  );
};

export default StockList;
