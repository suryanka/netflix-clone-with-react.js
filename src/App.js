import "./App.css";
import Row from './Row.js'
import requests from "./request";
import Banner from "./Banner";
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      {/* Nav */}
      {/* Banner */}
      <Nav/>
      <Banner/>
      <Row title="Netflix Originals" fetchUrl={requests.NetflixOriginals}
       isLargeRow/>
      <Row title="Trending Now" fetchUrl={requests.Trending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
