import { useState } from "react";
import { fetchTrendingApi } from "../../utils/fetchApi";
import Result from "../Result/Result";
import SearchForm from "../Search/SearchForm";

function Main() {
  const [trending, SetTrending] = useState([]);
  const [searchMovie, setSearchMovie] = useState([]);

  return (
    <section className='main-container'>
      <div className='search-container'>
        <ul className='search-list'>
          <li className='search-item'>Top Rate Movies</li>
          <li
            className='search-item search-active'
            onClick={() => {
              fetchTrendingApi().then((res) => {
                SetTrending(res);
              });
            }}
          >
            Top Trend Movies
          </li>
        </ul>
        <SearchForm setSearchMovie={setSearchMovie} />
      </div>
      <div className='result-container'>
        {searchMovie.map((item) => {
          return <Result key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
}

export default Main;
