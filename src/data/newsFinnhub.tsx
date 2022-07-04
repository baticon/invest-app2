async function fetchNews() {
  try {
    const res = await fetch(
      "https://finnhub.io/api/v1/news?category=general&token=calf0eiad3ie9ojgktpg"
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("NEWSFINNHUB.TSX - something wrong");
  }
}

export default fetchNews;
