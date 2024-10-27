import axios from "axios";

const apiKey = import.meta.env.VITE_APP_APIKEY
const baseUrl = import.meta.env.VITE_APP_BASEURL

// Fungsi untuk mengambil daftar genre tv
async function getGenresTv() {
    try {
        const response = await axios.get(`${baseUrl}/genre/tv/list?api_key=${apiKey}`)
        return response.data.genres
    } catch (err) {
        console.error("Failed Fetching Genres: ", err)
        return []
    }
}

// Mengambil Data Tv Trending dan menggabungkan dengan genre
export async function getTrendingTv() {
    try {
        // Ambil daftar tv trending
        const tvRes = await axios.get(`${baseUrl}/trending/tv/day?api_key=${apiKey}`)
        const tv = tvRes.data.results

        // Ambil daftar genre
        const genres = await getGenresTv()

        // Gabungkan genre id dengan nama gennre
        const tvWithGenres = tv.map((tv) => {
            const tvGenres = tv.genre_ids   .map((id) => {
                const genre = genres.find((genre) => genre.id === id)
                return genre ? genre.name : "Unknown"
            })

            // Kembalikan film dengan genre yang sudah digabungkan
            return {
                ...tv,
                genres: tvGenres
            }
        })
        return tvWithGenres
    } catch (err) {
        console.error("Failed Fetch data Tv Trending: ", err)
    }
}


// Mengambil Data Tv Trending dan menggabungkan dengan genre
export async function getTopRatedTv() {
    try {
        // Ambil daftar tv trending
        const tvRes = await axios.get(`${baseUrl}/tv/top_rated?api_key=${apiKey}`)
        const tv = tvRes.data.results

        // Ambil daftar genre
        const genres = await getGenresTv()

        // Gabungkan genre id dengan nama gennre
        const tvWithGenres = tv.map((tv) => {
            const tvGenres = tv.genre_ids   .map((id) => {
                const genre = genres.find((genre) => genre.id === id)
                return genre ? genre.name : "Unknown"
            })

            // Kembalikan film dengan genre yang sudah digabungkan
            return {
                ...tv,
                genres: tvGenres
            }
        })
        return tvWithGenres
    } catch (err) {
        console.error("Failed Fetch data Tv Trending: ", err)
    }
}

// Mengambil Data Tv Trending dan menggabungkan dengan genre
export async function getPlayingNow() {
    try {
        // Ambil daftar tv trending
        const tvRes = await axios.get(`${baseUrl}/tv/top_rated?api_key=${apiKey}`)
        const tv = tvRes.data.results

        // Ambil daftar genre
        const genres = await getGenresTv()

        // Gabungkan genre id dengan nama gennre
        const tvWithGenres = tv.map((tv) => {
            const tvGenres = tv.genre_ids   .map((id) => {
                const genre = genres.find((genre) => genre.id === id)
                return genre ? genre.name : "Unknown"
            })

            // Kembalikan film dengan genre yang sudah digabungkan
            return {
                ...tv,
                genres: tvGenres
            }
        })
        return tvWithGenres
    } catch (err) {
        console.error("Failed Fetch data Tv Trending: ", err)
    }
}