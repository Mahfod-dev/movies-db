import "./result.css";
import { Link } from 'react-router-dom';

function Result({ item }) {
  return (
		<div className='result-items'>
			<Link className='link' to={`/movie/${item.id}`}>
				<img
					className='result-img'
					src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
					alt=''
				/>
				<div className='result-details'>
					<h3 className='result-title'>{item.original_title}</h3>
					<p>{item.overview}</p>
				</div>
			</Link>
		</div>
  );
}

export default Result;
