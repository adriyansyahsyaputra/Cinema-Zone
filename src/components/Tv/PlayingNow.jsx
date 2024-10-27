import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { getPlayingNow } from "../../Api/tv-api";

export default function PlayingNow() {
    const [playingNow, setPlayingNow] = useState([])

    useEffect(() => {
        getPlayingNow().then((data) => setPlayingNow(data))
    })


    return (
        <>
        <div className="container mt-20">
            <div className="w-full flex items-center my-10">
                <span className="flex-grow h-px bg-slate-300"></span>
                <h1 className="text-white font-semibold font-inter text-xl md:text-3xl mx-4">Playing Now</h1>
                <span className="flex-grow h-px bg-slate-300"></span>
            </div> 
            {/* Cards */}
            <div className="container mt-4 grid grid-cols-2 lg:grid-cols-6 gap-3">
                {playingNow && playingNow.length > 0 ? (
                    playingNow.map((movie) => (
                        <div className="text-white rounded-lg shadow-md h-full cursor-pointer hover:scale-105 transition duration-300" key={movie.id}>
                            <Link to={`/tv-details/${movie.id}`}>
                                <div className="relative">
                                    <img src={`${import.meta.env.VITE_APP_BASEIMGURL}/${movie.poster_path}`} alt="movie" className="rounded-t-lg bg-cover h-60 w-full"/>
                                    <div className="absolute top-3 left-3 bg-primary text-white text-sm px-2 py-1 rounded-md">{movie.genres ? movie.genres[0] : "Unknown"}</div>
                                </div>
                                <div className="px-2 pt-2">
                                    <h5 className="text-lg font-inter text-white">{movie.title}</h5>
                                    <p className="text-white font-inter text-sm">{movie.release_date}</p>
                                </div>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className="text-white text-center col-span-full">No movies currently playing.</p>
                )}
            </div>
            
        </div> 
        </>
    )
}