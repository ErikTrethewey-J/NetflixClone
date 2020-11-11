import React, { useState } from 'react';

function Row({ title }) {
    const [movie, setMovies] = useState([])

    

    return (
        <div>
            <h2>{ title }</h2>
            
            {/* {container -> posters} */}
        </div>
    )
}

export default Row;