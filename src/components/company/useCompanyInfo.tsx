import { useState, useEffect } from "react";
import fetchCompanyInfo from "../../data/logoFetch";
import { ICompanyInfo } from "./types";

function useComanyInfo(companyID: string) {
  const [info, setInfo] = useState<ICompanyInfo>();
  useEffect(() => {
    async function pullData() {
      const fetchedData = await fetchCompanyInfo(companyID);
      if (fetchedData !== undefined) {
        setInfo(fetchedData);
      }
    }
    pullData();
  }, [companyID]);
  return info;
}

export default useComanyInfo;
