async function fetchGraphInfo(companyID: string) {
  try {
    const res = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${companyID}&apikey=IN0KVT8G4VOEP9A4`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("DATADAILYALPHAVANTAGE.tsx - something wrong");
  }
}

export default fetchGraphInfo;
