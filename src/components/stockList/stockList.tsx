import { FC } from "react";
import style from "./stockList.module.css";
import { Link } from "react-router-dom";
import { IStockProps, ISearchStock } from "./types";
import GetLogo from "./getLogo";
import GetPrice from "./getPrice";

const StockList: FC<IStockProps> = ({ search, stocks, page }) => {
  const stocksTo = page * 5 - 1;
  const stocksFrom = stocksTo - 4;

  const searchInput = search.toUpperCase();

  // let stocksTo = 5;
  // let stocksFrom = 1;

  let slicedStocks = stocks.slice(stocksFrom, stocksTo);

  const renderListItems = () => {
    if (searchInput === "") {
      return slicedStocks.map((stock: ISearchStock) => {
        let price = GetPrice(stock.displaySymbol);
        let logo = GetLogo(stock.displaySymbol);
        if (price === undefined) {
          price = 0;
        }
        return (
          <Link to={`/companydetails/${stock.displaySymbol}`}>
            <div key={stock.displaySymbol} className={style.individualStock}>
              <span className={style.span}>
                Stock name: {stock.description}
              </span>
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
    } else {
      const obj = stocks.find(
        (obj: ISearchStock) => obj.displaySymbol === searchInput
      );
      // const tempObjOne = stocks.find(
      //   (obj: ISearchStock) => obj.displaySymbol === searchInput
      // );
      // const tempObjTwo = stocks.find(
      //   (obj: ISearchStock) => obj.description === searchInput
      // );

      // console.log("test1");
      // console.log(tempObjOne);
      // console.log("test2");
      // console.log(tempObjTwo);

      console.log(obj);
      if (obj) {
        let price = GetPrice(obj.displaySymbol);
        let logo = GetLogo(obj.displaySymbol);
        return (
          <Link to={`/companydetails/${obj.displaySymbol}`}>
            <div key={obj.displaySymbol} className={style.individualStock}>
              <span className={style.span}>Stock name: {obj.description}</span>
              <span className={style.span}>
                Stock symbol: {obj.displaySymbol}
              </span>
              <span className={style.span}>Stock price: {price}$</span>
              <div className={style.companyLogo}>
                <img src={`${logo}`} alt="logo" width="20" height="20"></img>
              </div>
            </div>
          </Link>
        );
      }
    }
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
