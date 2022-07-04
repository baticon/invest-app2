async function FetchLogo(stockName: string) {
  try {
    const res = await fetch(
      `https://finnhub.io/api/v1/stock/profile2?symbol=${stockName}&token=calf0eiad3ie9ojgktpg`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("LOGOFETCH.tsx - something wrong");
  }
}

export default FetchLogo;
