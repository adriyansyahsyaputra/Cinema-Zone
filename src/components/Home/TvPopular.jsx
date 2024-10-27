import React, {useState, useEffect} from "react";
import { getPopularTv } from "../../Api/api";
import { Link } from "react-router-dom";

export default function TvPopular() {
    const [popularTv, setPopularTv] = useState([]);

    useEffect(() => {
        getPopularTv().then(data => setPopularTv(data))
    }, [])

    function PopularTvList() {
        return popularTv.map((tv) => {
            return (
                <div className="text-white rounded-lg shadow-md h-full cursor-pointer hover:scale-105 transition duration-300" key={tv.id}>
                    <Link to={`/tv-details/${tv.id}`}>
                        <div className="relative">
                            <img src={`${import.meta.env.VITE_APP_BASEIMGURL}/${tv.poster_path}`} alt="tv 1" className="rounded-t-lg bg-cover h-60 w-full"/>
                            <div className="absolute top-3 left-3 bg-primary text-white text-sm px-2 py-1 rounded-md">{tv.genres[0]}</div>
                        </div>
                        <div className="px-2 pt-2">
                            <h5 className="text-lg font-inter text-white">{tv.name}</h5>
                            <p className="text-white font-inter text-sm">{tv.first_air_date}</p>
                        </div>
                    </Link>
                </div>
            )
        })
    }

    return (
        <>
        {/* Tv List */}
         <div className="container mt-14">
            <h1 className="text-white font-semibold font-inter text-3xl">Most TV Popular</h1>
            {/* Cards */}
            <div className="container mt-4 grid grid-cols-2 lg:grid-cols-6 gap-3">
                <PopularTvList />
            </div>
            
         </div>
        </>
    )
}