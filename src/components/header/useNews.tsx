import { useState, useEffect } from "react";
import fetchNews from "../../data/newsFinnhub";
import { INewsInfo } from "./types";

function useNews() {
  const [info, setInfo] = useState<INewsInfo[]>([]);
  useEffect(() => {
    async function pullData() {
      const fetchedData = await fetchNews();
      if (fetchedData !== undefined) {
        setInfo(fetchedData);
      }
    }
    pullData();
  }, []);
  return info;
}

export default useNews;
