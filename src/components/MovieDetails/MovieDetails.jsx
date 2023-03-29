import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieDetailsApi } from '../../utils/fetchApi';

const MovieDetails = () => {
	const { id } = useParams();

	const [movie, setMovie] = useState({});

	useEffect(() => {
		fetchMovieDetailsApi(id).then((res) => {
			setMovie(res);
		});
	}, [id]);

	return (
		<div className=''>
			<div className=''>
				<img
					src={`https://image.tmdb.org/t/p/original/${
						movie.backdrop_path || movie.poster_path
					}`}
					width={500}
					height={300}
					className='rounded-lg'
					style={{
						maxWidth: '100%',
						height: '100%',
					}}
					placeholder='blur'
					blurDataURL='/spinner.svg'
					alt='Movie poster'
				/>
				<div className=''>
					<h2 className=''>{movie.title || movie.name}</h2>
					<p className=''>
						<span className=''>Overview:</span>
						{movie.overview}
					</p>
					<p className=''>
						<span className=''>Date Released:</span>
						{movie.release_date || movie.first_air_date}
					</p>
					<p className=''>
						<span className=''>Rating:</span>
						{movie.vote_count}
					</p>
				</div>
			</div>
		</div>
	);
};
export default MovieDetails;
