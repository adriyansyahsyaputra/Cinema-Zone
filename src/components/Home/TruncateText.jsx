import React, { useState, useEffect } from 'react';

function truncateWords(text, wordLimit) {
    if(!text) return ""
    const words = text.split(" ");
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
}

function MovieOverview({ overview }) {
    const [wordLimit, setWordLimit] = useState(window.innerWidth < 768 ? 20 : 35); // 20 kata untuk mobile, 35 untuk desktop/tablet

    useEffect(() => {
        function handleResize() {
            setWordLimit(window.innerWidth < 768 ? 20 : 35);
        }
        
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return <p className="text-white py-2 text-sm font-thin">{truncateWords(overview, wordLimit)}</p>;
}

export default MovieOverview;