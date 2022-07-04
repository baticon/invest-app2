import { useState, useEffect } from "react";
// import fetchDailyGraphInfo from "../../data/dummyDailyDataAlpha"; // this is fake data
import fetchMonthlyGraphInfo from "../../data/dataMonthlyAlphavantage";
import { IMonthlyGraphInfo } from "./types";

function useMonthlyGraphInfo(companyID: string) {
  const [info, setInfo] = useState<IMonthlyGraphInfo>();
  useEffect(() => {
    async function pullData() {
      const fetchedData = await fetchMonthlyGraphInfo(companyID);
      if (fetchedData !== undefined) {
        setInfo(fetchedData);
      }
    }
    pullData();
  }, [companyID]);
  return info;
}

export default useMonthlyGraphInfo;
