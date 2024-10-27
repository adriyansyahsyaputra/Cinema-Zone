import React from "react";
import Navbar from "../components/template/Navbar";
import Footer from "../components/template/Footer";
import TrendingNow from "../components/Tv/TrendingNow";
import TopRated from "../components/Tv/TopRated";
import PlayingNow from "../components/Tv/PlayingNow";

export default function TvSeries() {
    return (
        <>
        <Navbar />
        <main className="my-24 mx-4 lg:mx-9 px-4 lg:px-8">
            <TrendingNow />
            <TopRated />
            <PlayingNow />
        </main>
        <Footer />
        </>
    )
}