import React from "react";

export default function Footer() {
    return (
        <>
        {/* Footer Start */}
        <footer className="text-white p-6 lg:p-8 border-t-[1px] border-white h-24">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center h-full">
                <div className="flex items-center mb-4">
                    <h1 className="text-[#ed8a01] text-3xl font-inter font-semibold">CineZone</h1>
                </div>
                <div className="flex flex-wrap items-center justify-center mb-4 md:mb-0">
                    <a href="/" className="mr-4 font-inter text-sm hover:text-[#ed8a01]">Home</a>
                    <a href="movies" className="mr-4 font-inter text-sm hover:text-[#ed8a01]">Movies</a>
                    <a href="tvseries" className="mr-4 font-inter text-sm hover:text-[#ed8a01]">Tv Series</a>
                </div>
                <div className="flex items-center pb-4 md:pb-0">
                    <a href="https://web.facebook.com/saputra.adrian.18?locale=id_ID" className="mr-4"><img src="/img/icon/facebook.png" alt="fb" className="w-5" /></a>
                    <a href="https://www.instagram.com/adrnsyhsptr.nst/" className="mr-4"><img src="/img/icon/instagram.png" alt="fb" className="w-5" /></a>
                    <a href="https://x.com/Equalizerr99" className="mr-4"><img src="/img/icon/twitter.png" alt="fb" className="w-5" /></a>
                </div>
            </div>
        </footer>
        {/* Footer End */}
        </>
    )
}