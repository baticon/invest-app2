import { useState, useEffect } from "react";
import fetchFMP from "../../data/dataFMP";

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

export default GetPrice;
