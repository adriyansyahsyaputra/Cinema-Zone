import React from "react";
import { useState } from "react";
import { searchAll } from "../../Api/api";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate()

    const toggleMobileMenu = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

   // Fungsi untuk melakukan pencarian film dan tv
    async function handleSearch(query) {
        if(query.length > 3) {
            const results = await searchAll(query)
            setSearchResults(results)
            if(results.length > 0) {
                navigate('/search', { state: {results} })
            }
        } else if (query.length === 0) {
            setSearchResults([])
        }
    }

    return(
        <>
        {/* Navbar Start */}
        <nav className="shadow">
            <div className="max-w-7xl mx-3 lg:mx-9 px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <a href="/" className="text-3xl font-semibold font-roboto text-primary">CineZone</a>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <a href="/" className="text-white hover:text-primary">Home</a>
                        <a href="movies" className="text-white hover:text-primary">Movies</a>
                        <a href="tvseries" className="text-white hover:text-primary">Tv Series</a>
                    </div>
                    <div className="hidden md:flex">
                        <input type="text"
                            className="border rounded-md bg-[#1f2032] px-2 py-1 font-roboto text-white placeholder-slate-200"
                            placeholder="Search..." onChange={(e) => handleSearch(e.target.value)} />
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button id="menu-button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-primary focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-white focus:ring-white"
                            aria-controls="mobile-menu" onClick={toggleMobileMenu} aria-expanded={isHamburgerOpen ? 'true' : 'false'}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className={`md:hidden mx-4 ${isHamburgerOpen ? '' : 'hidden'}`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a href="/" className="block text-white hover:text-primary">Home</a>
                    <a href="movies" className="block text-white hover:text-primary">Movies</a>
                    <a href="tvseries" className="block text-white hover:text-primary">Tv Series</a>
                </div>
                <div className="px-2 pb-3 sm:px-3">
                    <input type="text" placeholder="Search..."
                    className="border rounded-md px-2 py-1 w-full bg-[#1f2032] font-roboto placeholder-slate-200 text-white" onChange={(e) => handleSearch(e.target.value)} />
                </div>
            </div>
        </nav>
        {/* Navbar End */}

        
        </>
    )
}