async function fetchGraphInfo(companyID: string) {
  try {
    const res = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${companyID}&interval=5min&apikey=1NOAGJSJSLF48RY2`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("DATAINTRADAYALPHAVANTAGE - something wrong");
  }
}

export default fetchGraphInfo;
