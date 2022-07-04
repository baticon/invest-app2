async function fetchGraphInfo(companyID: string) {
  try {
    const res = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${companyID}&interval=5min&apikey=DBEIFOCTBM0JM5V4`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("DATAFIVEMINALPHAVANTAGE.tsx - something wrong");
  }
}

export default fetchGraphInfo;
