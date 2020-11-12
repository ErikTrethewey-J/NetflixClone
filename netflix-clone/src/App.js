import React from "react";
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  console.log(requests.fetchNetflixOriginals)
  return (
    <div className="App">
      <h1>Create a Netflix Clone!</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
