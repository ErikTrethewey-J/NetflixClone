/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([])
    console.log(requests.fetchNetflixOriginals)
    console.log(fetchUrl)
    // A snippet of code which runs based on a specific condition/variable
    useEffect(() => {
        //if [], run once when the row loads, and dont run again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request)
            // setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [])


    return (
        <div>
            <h2>{ title }</h2>
            
            {/* {container -> posters} */}
        </div>
    )
}

export default Row;