import { useState, useEffect } from "react";
import fetchDailyGraphInfo from "../../data/dataDailyAlphavantage";
import { IDailyGraphInfo } from "./types";

function useDailyGraphInfo(companyID: string) {
  const [info, setInfo] = useState<IDailyGraphInfo>();
  useEffect(() => {
    async function pullData() {
      const fetchedData = await fetchDailyGraphInfo(companyID);
      if (fetchedData !== undefined) {
        setInfo(fetchedData);
      }
    }
    pullData();
  }, [companyID]);
  return info;
}

export default useDailyGraphInfo;
