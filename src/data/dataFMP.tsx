async function fetchStocks(stockName: string) {
  try {
    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/quote-short/${stockName}?apikey=baecc0262339879d3acf0579f9f25b36`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("DATAFMP.tsx - something wrong");
  }
}

export default fetchStocks;
