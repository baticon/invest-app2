import { FC } from "react";
import style from "./stockList.module.css";
import { Link } from "react-router-dom";
import { IStockProps, ISearchStock } from "./types";
import useGetLogo from "./useGetLogo";
import useGetPrice from "./useGetPrice";

interface IStock {
  obj: ISearchStock;
  key: number;
}

const Stock: FC<IStock> = ({ obj, key }) => {
  let price = useGetPrice(obj.displaySymbol);
  let logo = useGetLogo(obj.displaySymbol);
  return (
    <Link to={`/companydetails/${obj.displaySymbol}`} key={obj.displaySymbol}>
      <div key={obj.displaySymbol + 0} className={style.individualStock}>
        <span className={style.span} key={obj.displaySymbol + 1}>
          Stock name: {obj.description}
        </span>
        <span className={style.span} key={obj.displaySymbol + 2}>
          Stock symbol: {obj.displaySymbol}
        </span>
        <span className={style.span} key={obj.displaySymbol + 3}>
          Stock price: {price}$
        </span>
        <div className={style.companyLogo} key={obj.displaySymbol + 4}>
          <img
            src={`${logo}`}
            alt="logo"
            width="20"
            height="20"
            key={obj.displaySymbol + 5}
          ></img>
        </div>
      </div>
    </Link>
  );
};

const StockList: FC<IStockProps> = ({ search, stocks = [], page }) => {
  const stocksTo = page * 5 - 1;
  const stocksFrom = stocksTo - 4;

  const searchInput = search.toUpperCase();

  let slicedStocks: ISearchStock[] = [];
  if (searchInput) {
    slicedStocks = stocks.filter(
      (obj: ISearchStock) => obj.description === searchInput
      // (obj: ISearchStock) => obj.displaySymbol.includes(searchInput)
      // (obj: ISearchStock) => obj.description.includes(searchInput)
    );
  } else {
    slicedStocks = stocks.slice(stocksFrom, stocksTo);
  }

  return (
    <div className={style.container} key="hello">
      <div className={style.stockList} key="there">
        {slicedStocks.length === 0 ? (
          <>
            <div style={{ color: "black" }}>No result</div>
          </>
        ) : (
          slicedStocks.map((stock: ISearchStock, i) => {
            return <Stock obj={stock} key={i} />;
          })
        )}
      </div>
    </div>
  );
};

export default StockList;
