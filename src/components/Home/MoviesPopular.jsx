import React, {useEffect, useState} from "react";
import { getPopularMovies } from "../../Api/api";
import { Link } from "react-router-dom";

export default function MoviesPopular() {
    const [popularMovies, setPopularMovies] = useState([])

    useEffect(() => {
        getPopularMovies().then(data => {
            setPopularMovies(data)
        })
    }, [])
    
    function PopularMovieList() {
        return popularMovies.map((movie) => {
            return (
                <div className="text-white rounded-lg shadow-md h-full cursor-pointer hover:scale-105 transition duration-300" key={movie.id}>
                    <Link to={`/movie-details/${movie.id}`}>
                        <div className="relative">
                            <img src={`${import.meta.env.VITE_APP_BASEIMGURL}/${movie.poster_path}`} alt="movie 1" className="rounded-t-lg bg-cover h-60 w-full"/>
                            <div className="absolute top-3 left-3 bg-primary text-white text-sm px-2 py-1 rounded-md">{movie.genres[0]}</div>
                        </div>
                        <div className="px-2 pt-2">
                            <h5 className="text-lg font-inter text-white">{movie.title}</h5>
                            <p className="text-white font-inter text-sm">{movie.release_date}</p>
                        </div>
                    </Link>
                </div>
            )
        })
    }

    return (
        <>
        {/* Movies List */}
         <div className="container">
            <h1 className="text-white font-semibold font-inter text-3xl">Most Movies Popular</h1>
            {/* Cards */}
            <div className="container mt-4 grid grid-cols-2 lg:grid-cols-6 gap-3">
                <PopularMovieList />
            </div>
            
         </div>
        </>
    )
}