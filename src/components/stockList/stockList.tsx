import { FC } from "react";
import style from "./stockList.module.css";
import { Link } from "react-router-dom";
import { IStockProps } from "./types";
import GetLogo from "./getLogo";
import GetPrice from "./getPrice";

const StockList: FC<IStockProps> = ({ stocks, page }) => {
  let stocksTo = page * 5 - 1;
  let stocksFrom = stocksTo - 4;

  // let stocksTo = 5;
  // let stocksFrom = 1;

  let slicedStocks = stocks.slice(stocksFrom, stocksTo);

  const renderListItems = () => {
    return slicedStocks.map((stock: any) => {
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
          </div>
        </Link>
      );
    });
  };

  return (
    <div className={style.container} key="hello">
      <div className={style.stockList} key="there">
        {renderListItems()}
      </div>
    </div>
  );
};

export default StockList;
