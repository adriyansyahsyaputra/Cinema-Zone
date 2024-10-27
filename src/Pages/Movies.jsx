import React from "react";
import Navbar from "../components/template/Navbar";
import Footer from "../components/template/Footer";
import TopRated from "../components/Movies/TopRated";
import NowPlaying from "../components/Movies/NowPlaying";
import UpComing from "../components/Movies/UpComing";
import TrendingNow from "../components/Movies/TrendingNow";

export default function Movies() {
    return (
        <>
        <Navbar />
        <main className="my-24 mx-4 lg:mx-9 px-4 lg:px-8">
            <TrendingNow />
            <TopRated />
            <NowPlaying />
            <UpComing />
        </main>
        <Footer />
        </>
    )
}