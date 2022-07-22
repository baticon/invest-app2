import { useState, useEffect } from "react";
import fetchLogo from "../../data/logoFetch";

function useGetLogo(stockSymbol: string) {
  const [logo, setLogo] = useState<String>("");
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

export default useGetLogo;
