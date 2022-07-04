//https://finnhub.io/api/v1/stock/profile2?symbol=AAPL&token=calf0eiad3ie9ojgktpg

fetch(
  // "https://finnhub.io/api/v1/stock/profile2?symbol=AAPL&token=calf0eiad3ie9ojgktpg"
  "https://finnhub.io/api/v1/stock/symbol?exchange=US&token=calf0eiad3ie9ojgktpg"
)
  .then((response) => response.json())
  .then((data) => console.log(data));
