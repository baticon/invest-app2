import { useState, useEffect } from "react";
import fetchFiveMinGraphInfo from "../../data/dataFiveMinAlphavantage";
import { IFiveMinGraphInfo } from "./types";

function useFiveMinGraphInfo(companyID: string) {
  const [info, setInfo] = useState<IFiveMinGraphInfo>();
  useEffect(() => {
    async function pullData() {
      const fetchedData = await fetchFiveMinGraphInfo(companyID);
      if (fetchedData !== undefined) {
        setInfo(fetchedData);
      }
    }
    pullData();
  }, [companyID]);
  return info;
}

export default useFiveMinGraphInfo;
