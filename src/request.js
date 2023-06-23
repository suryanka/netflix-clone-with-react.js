const API_KEY= "f27d8867e0d3c683029216b8861a7aac";

const requests= {
    Trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    NetflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;