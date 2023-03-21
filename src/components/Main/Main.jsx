import { useState } from "react";
import { fetchTopRatedApi, fetchTrendingApi } from "../../utils/fetchApi";
import { useSearchParams } from 'react-router-dom';
import Result from "../Result/Result";
import SearchForm from "../Search/SearchForm";

function Main() {
  const [trending, SetTrending] = useState([]);
  const [searchMovie, setSearchMovie] = useState([]);
  const [topRated, setTopRated] = useState([]);

 let [searchParams, setSearchParams] = useSearchParams(); 

  return (
    <section className='main-container'>
      <div className='search-container'>
        <ul className='search-list'>
          <li
            className='search-item'
            onClick={() => {

              let params = ('top_rated')

              setSearchParams(params)
              // fetchTopRatedApi().then((res) => {
              //   setTopRated(res);
              // });
            }}
          >
            Top Rate Movies
          </li>
          <li
            className='search-item search-active'
            onClick={() => {
              let params = ('trending')

              setSearchParams(params)


              // fetchTrendingApi().then((res) => {
              //   SetTrending(res);
              // });
            }}
          >
            Top Trend Movies
          </li>
        </ul>
        <SearchForm setSearchMovie={setSearchMovie} />
      </div>
      <div className='result-container'>
        {(topRated || trending || searchMovie).map((item) => {
          return <Result key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
}

export default Main;
