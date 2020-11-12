/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([])
    console.log(requests.fetchNetflixOriginals)
    console.log(fetchUrl)
    // A snippet of code which runs based on a specific condition/variable
    useEffect(() => {
        //if [], run once when the row loads, and dont run again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl])

    console.log(movies)


    return (
        <div className="row">
            <h2>{ title }</h2>
            <div className="row__posters">
                {/* {several row__poster(s)} */}
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        className="row__poster"  
                        src={`${base_url}${movie.poster_path}`} alt={movie.name}
                    />
                ))}
            </div>
            {/* {container -> posters} */}
        </div>
    )
}

export default Row;