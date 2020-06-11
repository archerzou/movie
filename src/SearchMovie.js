import React, { useState } from 'react';
import MovieCard from './MovieCard';

const SearchMovie = (props) => {

    const [query, setQuery] = useState('');

    const [movies,setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();
        console.log("Submit!");

        const url = `https://api.themoviedb.org/3/search/movie?api_key=ca3bdd598c7cb4a2ea5f8a11c09333d3&language=zh&query=${query}&page=1&include_adult=false`;
        try {
            const res = await fetch(url);
            const data  = await res.json();
            setMovies(data.results);
        }catch(err){
            console.error(err);
        }
    }

    const handleChange = event => {
        setQuery(event.target.value);
    }

    return (
        <div>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">电影名称</label>
                <input 
                    className="input" 
                    type="text" 
                    name="query"
                    placeholder="侏罗纪公园"
                    onChange={handleChange}
                    value={query}  
                />
                <button className="button" type="submit">
                    搜！！！
                </button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie=> (
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
        </div>
        
    )
}

export default SearchMovie;
