import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../template/Navbar";
import Footer from "../template/Footer";

export default function TvDetails() {
    const { id } = useParams()
    const [tv, setTv] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchTvDetails = async () => {
            const apiKey = import.meta.env.VITE_APP_APIKEY
            const baseUrl = import.meta.env.VITE_APP_BASEURL

            try {
                const response = await axios.get(`${baseUrl}/tv/${id}?api_key=${apiKey}`)
                setTv(response.data)
            } catch (err) {
                console.error("Error fetching Tv Series details: ",err)
            }
        }
        fetchTvDetails()
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
                        <img src={`${import.meta.env.VITE_APP_BASEIMGURL}/${tv?.poster_path}`} alt={tv?.name}
                            className="bg-cover bg-center w-full md:w-full object-cover" />
                    </div>
                        <div className="font-inter py-1 pl-4">
                            <h1 className="text-white text-xl">{tv?.name}</h1>
                            <p className="text-white text-sm mb-1 md:text-base">{tv?.genres?.map(genre => genre.name).join(', ')}</p>
                            <p className="text-white text-xs lg:text-base">{tv?.vote_average} || {tv?.first_air_date}</p>
                            <p className="text-white py-2 text-sm font-thin">{tv?.overview}</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}