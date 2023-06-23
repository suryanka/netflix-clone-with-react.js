import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./row.css";
import Youtube from "react-youtube";
import movietrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl , isLargeRow}) {
  const [movies, setMovies] = useState([]);
  const [trailerurl, settrailerurl]= useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  // console.log(movies);

  const handleClick= (movie) => {
    console.log("Handle Click called");
    if(trailerurl){
      settrailerurl("");
    }
    else{
      movietrailer(movie?.title || movie?.name || "").then((url)=>{
        const urlParams= new URLSearchParams(new URL(url).search);
        settrailerurl(urlParams.get("v"));
      })
      .catch(err=> {
        console.log(err);
      })
    }
  }

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {/* <img src={`${base_url}${}`}></img> */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={()=> handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>

      {trailerurl && <Youtube videoId={trailerurl} opts={opts}/>}
    </div>
  );
}

export default Row;
