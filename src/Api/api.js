import axios from "axios";

const apiKey = import.meta.env.VITE_APP_APIKEY
const baseUrl = import.meta.env.VITE_APP_BASEURL

// Fungsi untuk mengambil daftar genre movie
async function getGenresMovie() {
    try {
        const response = await axios.get(`${baseUrl}/genre/movie/list?api_key=${apiKey}`)
        return response.data.genres
    } catch (err) {
        console.error("Error fetching genres: ", err)
        return []
    }
}

// Mengambil film populer dan menggabungkan dengan genre
export async function getPopularMovies() {
    try {
        // Ambil daftar film populer
        const movieResponse = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`)
        const popularMovies = movieResponse.data.results

        // Ambil daftar genre
        const genres = await getGenresMovie()

        // Gabungkan genre id dengan nama genre
        const moviesWithGenres = popularMovies.map((movie) => {
            const movieGenres = movie.genre_ids.map(id => {
                const genre = genres.find(g => g.id === id)
                return genre ? genre.name : "Unknown"
            })

            // Kembalikan film denggan genre yang sudah digabungkan
            return {
                ...movie,
                genres: movieGenres // Tambahkan genres (nama genre)
            }

        })

        return moviesWithGenres 
    } catch (err) {
        console.error("Error fetching movie: ", err)
    }
}

// Mengambil daftar genre Tv
async function getGenresTv() {
    try {
        const response = await axios.get(`${baseUrl}/genre/tv/list?api_key=${apiKey}`)
        return response.data.genres
    } catch (err) {
        console.error("Error fetching genres: ", err)
        return []
    }
}

// Mengambil Tv Popular dan Menggabungkan dengan genre
export async function getPopularTv() {
    try {
        // Ambil daftar film populer
        const tvResponse = await axios.get(`${baseUrl}/tv/top_rated?api_key=${apiKey}`)
        const popularTv = tvResponse.data.results

        // Ambil daftar genre
        const genres = await getGenresTv()

        // Gabungkan genre id dengan nama genre
        const tvWithGenres = popularTv.map((tv) => {
            const tvGenres = tv.genre_ids.map(id => {
                const genre = genres.find(g => g.id === id)
                return genre ? genre.name : "Unknown"
            })

            // Kembalikan film dengan genre yang sudah digabungkan
            return {
                ...tv,
                genres: tvGenres // Tambahkan genres (nama genre)
            }
        })
        return tvWithGenres
    } catch (err) {
        console.error("Error fetching TV: ", err)
    }
    
}

// Fungsi Search all movie & tv
export async function searchAll(query) {
    try {
        // Ambil daftar genre untuk movie dan tv
        const movieGenres = await getGenresMovie();
        const tvGenres = await getGenresTv();

        // Ambil hasil pencarian
        const response = await axios.get(`${baseUrl}/search/multi?api_key=${apiKey}&query=${query}`);
        const results = response.data.results;

        // Gabungkan genre pada setiap hasil pencarian
        const resultsWithGenres = results.map((item) => {
            // Tentukan daftar genre yang akan digunakan, sesuai jenis media
            const relevantGenres = item.media_type === 'movie' ? movieGenres : tvGenres;

            // Map genre_ids ke nama genre
            const itemGenres = item.genre_ids ? item.genre_ids.map(id => {
                const genre = relevantGenres.find(g => g.id === id);
                return genre ? genre.name : "Unknown";
            }) : [];

            return {
                ...item,
                genres: itemGenres // Tambahkan genres (nama genre)
            };
        });

        return resultsWithGenres;
    } catch (err) {
        console.error("Error fetching search results: ", err);
        return [];
    }
}