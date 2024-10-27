import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Navbar from "../template/Navbar";
import Footer from "../template/Footer";
import axios from "axios";

export default function MovieDetails() {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const apiKey = import.meta.env.VITE_APP_APIKEY
            const baseUrl = import.meta.env.VITE_APP_BASEURL

            try {
                const response = await axios.get(`${baseUrl}/movie/${id}?api_key=${apiKey}`)
                setMovie(response.data)
            } catch (err) {
                console.error("Error fetching movie details:", err)
            }
        }
        fetchMovieDetails()
        setLoading(false)
    }, [id])

    if(loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
            </div>
        )
    }

    return (
        <>
        <Navbar />
        <div className="my-24 mx-4 lg:mx-9 px-4 lg:px-8">
            <div className="w-full h-full my-10">
                    <div className="md:flex">
                        <div className="md:w-full">
                            <img src={`${import.meta.env.VITE_APP_BASEIMGURL}/${movie?.poster_path}`} alt={movie?.title} className="bg-cover bg-center w-full md:w-full object-cover" />    
                        </div>
                        <div className="font-inter py-1 pl-4">
                            <h1 className="text-white text-xl">{movie?.title}</h1>
                            <p className="text-white text-sm mb-1 md:text-base">{movie?.genres?.map(genre => genre.name).join(', ')}</p>
                            <p className="text-white text-xs lg:text-base">{movie?.vote_average} || {movie?.release_date}</p> 
                            <p className="text-white py-2 text-sm font-thin">{movie?.overview}</p>
                        </div>
                    </div>
                </div>
        </div>
        <Footer />
        </>
    )
}