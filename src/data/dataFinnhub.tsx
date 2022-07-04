async function fetchStocks() {
  try {
    const res = await fetch(
      "https://finnhub.io/api/v1/stock/symbol?exchange=US&token=calf0eiad3ie9ojgktpg"
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("DATAFINNHUB.tsx - something wrong");
  }
}

export default fetchStocks;
