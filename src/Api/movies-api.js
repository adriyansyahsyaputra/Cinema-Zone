import axios from "axios";

const apiKey = import.meta.env.VITE_APP_APIKEY
const baseUrl = import.meta.env.VITE_APP_BASEURL

// Fungsi untuk mengambl daftar genre movie
async function getGenresMovies() {
   try {
        const response = await axios.get(`${baseUrl}/genre/movie/list?api_key=${apiKey}`)
        return response.data.genres
   } catch (err) {
        console.error("Error fetching genres: ",err)
        return []
   }
}

// Mengambil film top rated dan menggabungkan dengan genre
export async function getTopratedMovies() {
    try {
        // Ambil daftar film top
        const movieRes = await axios.get(`${baseUrl}/movie/top_rated?api_key=${apiKey}`)
        const movies = movieRes.data.results

        // Ambil daftar genre
        const genres = await getGenresMovies()

        // Gabungkan genre id dengan nama genre
        const moviesWithGenres = movies.map((movie) => {
            const movieGenres = movie.genre_ids.map((id) => {
                const genre = genres.find((genre) => genre.id === id)
                return genre ? genre.name : "Unknown"
            })

            // Kembalikan film dengan genre yang sudah digabungkan
            return {
                ...movie,
                genres: movieGenres
            }
        })
        return moviesWithGenres
    } catch (err) {
        console.error("Error fetching top rated movies: ", err)
    }
}


// Mengambil film now playing dan menggabungkan dengan genre
export async function getNowplayingMovies() {
    try {
        // Ambil daftar film top
        const movieRes = await axios.get(`${baseUrl}/movie/now_playing?api_key=${apiKey}`)
        const movies = movieRes.data.results

        // Ambil daftar genre
        const genres = await getGenresMovies()

        // Gabungkan genre id dengan nama genre
        const moviesWithGenres = movies.map((movie) => {
            const movieGenres = movie.genre_ids.map((id) => {
                const genre = genres.find((genre) => genre.id === id)
                return genre ? genre.name : "Unknown"
            })

            // Kembalikan film dengan genre yang sudah digabungkan
            return {
                ...movie,
                genres: movieGenres
            }
        })
        return moviesWithGenres
    } catch (err) {
        console.error("Error fetching now playing movies: ", err)
    }
}


// Mengambil film upcoming dan menggabungkan dengan genre
export async function getUpcomingMovies() {
    try {
        // Ambil daftar film upcoming
        const movieRes = await axios.get(`${baseUrl}/movie/upcoming?api_key=${apiKey}`)
        const movies = movieRes.data.results

        // Ambil daftar genre
        const genres = await getGenresMovies()

        // Gabungkan genre id dengan nama genre
        const moviesWithGenres = movies.map((movie) => {
            const movieGenres = movie.genre_ids.map((id) => {
                const genre = genres.find((genre) => genre.id === id)
                return genre ? genre.name : "Unknown"
            })

            // Kembalikan film dengan genre yang sudah digabungkan
            return {
                ...movie,
                genres: movieGenres
            }
        })
        return moviesWithGenres
    } catch (err) {
        console.error("Error fetching upcoming movies: ", err)
    }
}

export async function getTrendingMovies() {
    try {
        const movieRes = await axios.get(`${baseUrl}/trending/movie/day?api_key=${apiKey}`)
        const movies = movieRes.data.results
        
        const genres = await getGenresMovies()

        const moviesWithGenres = movies.map((movie) => {
            const movieGenres = movie.genre_ids.map((id) => {
                const genre  = genres.find((genre) => genre.id === id)
                return genre ? genre.name : "Unknown"
            })

            return {
                ...movie,
                genres: movieGenres 
            }
        })
        return moviesWithGenres
    } catch (err) {
        console.error("Error Fetching data movie: ", err)
    }
}