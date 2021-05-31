import { ThumbUpSharp } from '@material-ui/icons';
import React from 'react'
import TextTruncate from 'react-text-truncate';
import "./VideoCard.css"

const base_url = "https://image.tmdb.org/t/p/original/";

function VideoCard({ movie }) {

    return (
        <div className="videoCard">
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="movie poster" />
            <TextTruncate
                line={1}
                element="p"
                truncateText="..."
                text={movie.overview}
            />
            <h2>{movie.title || movie.original_title}</h2>
            <p className="videoCard__stats">
                {movie.media_type && `${movie.media_type} ${" "} • ${" "}`}
                {movie.release_date || movie.first_air_date} {" "} • {" "}
                < ThumbUpSharp /> {" "} {movie.vote_count}</p>
        </div>
    )
}

export default VideoCard
