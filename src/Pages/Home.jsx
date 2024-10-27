import React from "react";
import Navbar from "../components/template/Navbar";
import Footer from "../components/template/Footer";
import Hero from "../components/Home/Hero";
import MoviesPopular from "../components/Home/MoviesPopular";
import TvPopular from "../components/Home/TvPopular";
import BodyComment from "../components/Commentar/BodyComment";

export default function Home() {
    return (
        <>
        <Navbar />
        <Hero />
        <main className="my-24 mx-4 lg:mx-9 px-4 lg:px-8">
            <MoviesPopular />
            <TvPopular />
            <BodyComment />
        </main>
        <Footer />
        </>
    )
}