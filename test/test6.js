fetch(
  "`https://financialmodelingprep.com/api/v3/quote-short/AAPL?apikey=baecc0262339879d3acf0579f9f25b36`"
)
  .then((response) => response.json())
  .then((data) => console.log(data));
