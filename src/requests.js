const API_KEY = process.env.REACT_APP_API_KEY;

export default {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/trending/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/trending/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/trending/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/trending/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/trending/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchMystery: `/trending/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchSciFi: `/trending/movie?api_key=${API_KEY}&with_genres=878`,
    fetchWestern: `/trending/movie?api_key=${API_KEY}&with_genres=37`,
    fetchAnimation: `/trending/movie?api_key=${API_KEY}&with_genres=16`,
    fetchTV: `/trending/movie?api_key=${API_KEY}&with_genres=10770`,
}