import React from "react";
import { useState, useRef, useEffect } from "react";
import { getPopularMovies } from "../../Api/api";
import { Link } from "react-router-dom";
import MovieOverview from "./TruncateText";

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = 3;
    const carouselRef = useRef(null);
    const [popularMovies, setPopularMovies] = useState([])

    useEffect(() => {
        getPopularMovies().then(data => {
            setPopularMovies(data)
        })
    }, [])

    useEffect(() => {
        const moveToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        };

        const intervalId = setInterval(moveToNextSlide, 4000); // Berpindah setiap 4 detik

        return () => {
        clearInterval(intervalId); // Bersihkan interval saat komponen di-unmount
        };
    }, [totalSlides]);

    useEffect(() => {
        if (carouselRef.current) {
        carouselRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }, [currentIndex]);

    return (
        <>
        {/* Hero Start */}
        <div className="carousel-wrapper w-full overflow-hidden relative">
            <div id="carousel" className="carousel-inner flex transform duration-500 ease-in-out" ref={carouselRef} >
                {popularMovies && popularMovies.length >= 3 ? (
                    popularMovies.slice(0, totalSlides).map((movie) => (
                        <div
                            className="carousel-item flex-shrink-0 w-full h-[500px] bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${import.meta.env.VITE_APP_BASEIMGURL}/${movie.poster_path})`
                            }} key={movie.id}>
                            <div className="flex items-center h-full bg-black bg-opacity-50 p-8 lg:p-16">
                                <div className="text-left max-w-md">
                                    <h2 className="text-4xl font-bold text-white">{movie.title}</h2>
                                    <MovieOverview overview={movie.overview} />
                                    <Link
                                        to={`/movie-details/${movie.id}`}
                                        className="mt-6 inline-block bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">
                                        See Detail
                                    </Link>
                                </div>
                            </div>
                        </div>
                        ))
                    ) : (
                        <p className="text-white text-center col-span-full">No movies currently playing.</p>
                    )}
            </div>
        </div>
        {/* Hero End */}
        </>
    )
}