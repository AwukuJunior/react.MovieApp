import React from 'react';
import { useState,useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
/* import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import First from './components/first';
import Second from './components/second';
 */
//da49d1c9

const API_URL = 'http://www.omdbapi.com?apikey=da49d1c9';


const App = () => {
const [movies, setMovies] = useState([]);
const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async(title)=>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search); // this means that the api fully works.
    }
    
    useEffect(()=> {
        searchMovies('Superman');
    },[]);
    return(
      <div className = "app">
        <h1>Movie Land</h1>

        <div className = "search">
            <input 
            placeholder='Search for movies'
            value={searchTerm}
            onChange={(e)=> setSearchTerm(e.target.value)}
            />
            <img
            src = {SearchIcon}
            alt="search"
            onClick={()=>searchMovies(searchTerm)}
            />
        </div>

        {
            movies?.length > 0
            ?(<div className = 'container'>
                {movies.map((movie)=>(
                    <MovieCard  movie={movie}/>
                ))}
    
           </div>
            ):
            (
            <div className="empty">
                <h2>No Movies Found</h2>
            </div>
            )
        }

        
      </div>    
    );
}
export default App;



//this is in the retuen okay
 /*  <Router>
            <Routes>
                <Route path= "/" element= {<First/>} />
                <Route path= "/second" element= {<Second/>} />
                </Routes>
                </Router>
 */