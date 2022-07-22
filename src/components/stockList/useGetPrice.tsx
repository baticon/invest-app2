import { useState, useEffect } from "react";
import fetchFMP from "../../data/dataFMP";

function useGetPrice(stockSymbol: string) {
  const [priceData, setPriceData] = useState<number>(0);
  useEffect(() => {
    async function pullData() {
      const price = await fetchFMP(stockSymbol);
      if (price[0] !== undefined) {
        setPriceData(price[0].price);
      } else {
        setPriceData(0);
      }
    }
    pullData();
  }, [stockSymbol]);
  return priceData;
}

export default useGetPrice;
