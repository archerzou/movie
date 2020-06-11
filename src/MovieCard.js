import React from 'react';

const MovieCard = ({movie}) => (
    <div className="card">
        <img className="card--image"
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
            alt={movie.title+ ' poster'}
        />
        <div className="card--content">
            <h1 className="card--title">{movie.title}</h1>
            <h2>上映日期： {movie.release_date}</h2>
            <h2>评分： {movie.vote_average}</h2>
            <p className="card--desc">{movie.overview}</p>
        </div>              
    </div>
);

export default MovieCard;