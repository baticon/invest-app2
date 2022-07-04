fetch(
  "https://finnhub.io/api/v1/news?category=general&token=calf0eiad3ie9ojgktpg"
)
  .then((response) => response.json())
  .then((data) => console.log(data));
