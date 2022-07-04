//www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${companyID}&interval=5min&apikey=1NOAGJSJSLF48RY2

fetch(
  "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=DPZ&interval=5min&apikey=7EK7VDZ3A94RMBPR"
)
  .then((response) => response.json())
  .then((data) => console.log(data));
