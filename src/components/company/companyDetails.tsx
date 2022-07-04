import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import useCompanyInfo from "./useCompanyInfo";
import useFiveMinGraphInfo from "./useFiveMinGraphInfo";
import useDailyGraphInfo from "./useDailyGraphInfo";
import useWeeklyGraphInfo from "./useWeeklyGraphInfo";
import useMonthlyGraphInfo from "./useMonthlyGraphInfo";
import { ISlicedGraphInfo } from "./types";
import Header from "./header";
import Footer from "../footer/footer";
import Graph from "./graph";

const CompanyDetails = () => {
  const URL = useLocation();
  const myArray = URL.pathname.split("/");
  const companyID = myArray[2];

  const [timeSeries, setTimeSeries] = useState<string>("test");
  const companyInfo = useCompanyInfo(companyID);
  const graphFiveMinInfo = useFiveMinGraphInfo(companyID);
  const graphDailyInfo = useDailyGraphInfo(companyID);
  const graphWeeklyInfo = useWeeklyGraphInfo(companyID);
  const graphMonthlyInfo = useMonthlyGraphInfo(companyID);

  const [identifier, setIdentifier] = useState<string>("");
  const [dataKey, setDataKey] = useState<string>("");
  const [dataArray, setDataArray] = useState<ISlicedGraphInfo[]>([]);

  useEffect(() => {
    if (graphFiveMinInfo && timeSeries === "every five min") {
      let timeSeries = graphFiveMinInfo["Time Series (5min)"];
      let dataArray: ISlicedGraphInfo[] = Object.entries(timeSeries).map(
        ([key, obj]) => {
          if (obj["4. close"]) {
            setIdentifier(key);
            return { name: key, pv: Number(obj["4. close"]) };
          } else {
            setIdentifier(key);
            return { name: key, pv: 0 };
          }
        }
      );
      setDataArray(dataArray);
      setDataKey("Every 5 minutes");
      console.log(dataArray);
    }
    if (graphDailyInfo && timeSeries === "daily") {
      let timeSeries = graphDailyInfo["Time Series (Daily)"];
      let dataArray: ISlicedGraphInfo[] = Object.entries(timeSeries).map(
        ([key, obj]) => {
          if (obj["4. close"]) {
            setIdentifier(key);
            return { name: key, pv: Number(obj["4. close"]) };
          } else {
            setIdentifier(key);
            return { name: key, pv: 0 };
          }
        }
      );
      setDataArray(dataArray);
      setDataKey("Daily");
    }
    if (graphWeeklyInfo && timeSeries === "weekly") {
      let timeSeries = graphWeeklyInfo["Weekly Time Series"];
      let dataArray: ISlicedGraphInfo[] = Object.entries(timeSeries).map(
        ([key, obj]) => {
          if (obj["4. close"]) {
            setIdentifier(key);
            return { name: key, pv: Number(obj["4. close"]) };
          } else {
            setIdentifier(key);
            return { name: key, pv: 0 };
          }
        }
      );
      setDataArray(dataArray);
      setDataKey("Weekly");
    }
    if (graphMonthlyInfo && timeSeries === "monthly") {
      let timeSeries = graphMonthlyInfo["Monthly Time Series"];
      let dataArray: ISlicedGraphInfo[] = Object.entries(timeSeries).map(
        ([key, obj]) => {
          if (obj["4. close"]) {
            setIdentifier(key);
            return { name: key, pv: Number(obj["4. close"]) };
          } else {
            setIdentifier(key);
            return { name: key, pv: 0 };
          }
        }
      );
      setDataArray(dataArray);
      setDataKey("Monthly");
    }
  }, [
    graphFiveMinInfo,
    graphDailyInfo,
    graphWeeklyInfo,
    graphMonthlyInfo,
    timeSeries,
  ]);

  return (
    <div
      key={identifier}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Header></Header>
      <div
        key={`${identifier}+q`}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          WebkitJustifyContent: "space-around",
        }}
      >
        <div>
          <img src={`${companyInfo?.logo}`} alt="Company logo"></img>
        </div>
        <div key={`${identifier}+2`}>
          <span>{companyInfo?.name}</span>
        </div>
        <div key={`${identifier}+e`}>
          <button
            onClick={() => {
              console.log("setting to EVERY FIVE MIN");
              setTimeSeries("every five min");
              console.log(timeSeries);
            }}
          >
            Every 5 min
          </button>
          <button
            onClick={() => {
              console.log("setting to DAILY");
              setTimeSeries("daily");
              console.log(timeSeries);
            }}
          >
            Daily
          </button>
          <button
            onClick={() => {
              console.log("setting to WEEKLY");
              setTimeSeries("weekly");
              console.log(timeSeries);
            }}
          >
            Weekly
          </button>
          <button
            onClick={() => {
              console.log("setting to MONTHLY");
              setTimeSeries("monthly");
              console.log(timeSeries);
            }}
          >
            Monthly
          </button>
        </div>
      </div>
      <div>{Graph(dataArray, dataKey)}</div>
      <Footer></Footer>
    </div>
  );
};

export default CompanyDetails;
