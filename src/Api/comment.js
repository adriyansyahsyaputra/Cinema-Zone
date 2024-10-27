const getDataComment = () => ([
    {
        id: 1,
        username: "Michael",
        body: "Situs ini benar-benar lengkap! Koleksi filmnya up-to-date, dan kualitas streaming-nya bagus. Nggak ada buffering meskipun koneksi internetku nggak terlalu cepat. Terima kasih CineZone!",
        createdAt: "2024-10-10",
        image: "1.png"
    },
    {
        id: 2,
        username: "John Nuke",
        body: "Fitur pencarian dan filter-nya sangat membantu! Bisa langsung cari genre favorit, dan hasilnya selalu akurat. Sangat memudahkan buat nonton film-film kesukaan.",
        createdAt: "2024-09-15",
        image: "4.png"
    },
    {
        id: 3,
        username: "Michelle Agatha",
        body: "Saya suka sekali tampilan situs ini, rapi dan mudah digunakan. Mungkin bisa dipertimbangkan untuk menambahkan subtitle bahasa Indonesia yang lebih banyak, terutama untuk film-film klasik.",
        createdAt: "2024-10-5",
        image: "3.png"
    },
    {
        id: 4,
        username: "Rukia Kuchiki",
        body: "Banyak pilihan film dan serial yang keren! Satu hal yang aku harap bisa diperbaiki adalah iklannya, kadang muncul di tengah film. Selain itu, overall sangat puas dengan situs ini.",
        createdAt: "2024-10-23",
        image: "2.png"
    }
])

const showFormattedDate = (date) => {
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }
    return new Date(date).toLocaleDateString("id-ID", options)
}

export { getDataComment, showFormattedDate }