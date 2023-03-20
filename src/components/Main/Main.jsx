import { useState } from "react";
import { fetchTrendingApi } from "../../utils/fetchApi";
import Result from "../Result/Result";

function Main() {
  const [trending, SetTrending] = useState([]);

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
        <form className='form-container'>
          <input
            type='search'
            className='form-input'
            placeholder='The movie title...'
          />
          <button className='form-button'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-search'
              viewBox='0 0 16 16'
            >
              <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
            </svg>
          </button>
        </form>
      </div>
      <div className='result-container'>
        {trending.map((item) => {
          return <Result key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
}

export default Main;
