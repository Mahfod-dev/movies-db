import "./result.css";

function Result({ item }) {
  return (
    <div className='result-items'>
      <img
        className='result-img'
        src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
        alt=''
      />
      <div className='result-details'>
        <h3 className='result-title'>{item.original_title}</h3>
        <p>{item.overview}</p>
      </div>
    </div>
  );
}

export default Result;
