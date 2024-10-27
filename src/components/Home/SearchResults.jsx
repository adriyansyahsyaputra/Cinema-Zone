import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../template/Navbar";
import Footer from "../template/Footer";
import MovieOverview from "./TruncateText";
import { Link } from "react-router-dom";

export default function SearchResults() {
    const location = useLocation();
    const { results } = location.state || {}; // Ambil hasil pencarian dari state


    return (
        <>
            <Navbar />

            <div className="my-24 mx-4 lg:mx-9 px-4 lg:px-8">
                <h1 className="text-white font-semibold font-inter text-2xl md:text-3xl">Movies & Tv Series Popular</h1>
                {/* Cards */}
                <div className="w-full h-full my-10">
                    {results && results.length > 0 ? (
                        results.map((movie) => (
                        <div className="flex mb-5" key={movie.id}>
                            <Link to={`/${movie.media_type}-details/${movie.id}`}>
                                <div className="relative w-[130px] h-[150px] flex-shrink-0">
                                    <img src={`${import.meta.env.VITE_APP_BASEIMGURL}/${movie.poster_path}`} alt={movie.title || movie.name}className="bg-cover bg-center w-full h-full object-cover cursor-pointer" />
                                    <div className="absolute top-0 left-0 bg-primary text-white text-xs px-1 py-1 md:text-sm md:px-2 rounded-br-md">{movie.genres ? movie.genres[0] : "Unknown"}</div>
                                </div>
                                <div className="font-inter py-1 pl-4">
                                    <h1 className="text-white text-lg cursor-pointer">{movie.title || movie.name}</h1>
                                    <p className="text-white text-sm">{movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"} || {movie.release_date || movie.first_air_date}</p>
                                    <MovieOverview overview={movie.overview} />
                                </div>
                            </Link>
                        </div>
                        ))
                    ) : (
                        <div className="text-white text-lg font-inter font-semibold text-center">
                            No results found.
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </>
    );
}
