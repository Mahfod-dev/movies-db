const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchTrendingApi = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );
  const data = await response.json();
  console.log(data);
  return data.results;
};
