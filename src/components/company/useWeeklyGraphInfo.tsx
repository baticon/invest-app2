import { useState, useEffect } from "react";
import fetchWeeklyGraphInfo from "../../data/dataWeeklyAlphavantage";
import { IWeeklyGraphInfo } from "./types";

function useWeeklyGraphInfo(companyID: string) {
  const [info, setInfo] = useState<IWeeklyGraphInfo>();
  useEffect(() => {
    async function pullData() {
      const fetchedData = await fetchWeeklyGraphInfo(companyID);
      if (fetchedData !== undefined) {
        setInfo(fetchedData);
      }
    }
    pullData();
  }, [companyID]);
  return info;
}

export default useWeeklyGraphInfo;
