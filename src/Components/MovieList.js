// MovieList.js
import React from 'react';

const MovieList = ({ movies, handleFavouritesClick, favouriteComponent: FavouriteComponent }) => {
	return (
		<div className='movie-grid'>
			{movies.map((movie, index) => (
				<div key={movie.imdbID} className='movie-item'>
					<img src={movie.Poster} alt='movie'></img>
					<div
						onClick={() => handleFavouritesClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						<FavouriteComponent />
					</div>
				</div>
			))}
		</div>
	);
};

export default MovieList;
