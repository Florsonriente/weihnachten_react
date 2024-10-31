import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Button, CloseButton, PaginationButton } from "../styling_components/AllButtons";
import InfoContainer from '../styling_components/InfoContainer';
import { StyledList, StyledListSavedItems } from "../styling_components/AllStyledLists";


const BASE_URL = 'https://api.themoviedb.org/3/search/movie'; 
const API_KEY = 'edfffb78499bcd6f85acc629a32e9799'; 
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'; 

const MovieList = ({ savedMovies, setSavedMovies }) => {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMovie, setShowMovie] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 
    const fetchMovies = async () => {
      try {
        const response = await axios.get(BASE_URL, {
          params: {
            api_key: API_KEY,
            query: 'christmas',
          },
        });
        setMovies(response.data.results);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();


  const handleNextMovie = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    setShowMovie(true);
  };

  const saveMovie = () => {
    const currentMovie = movies[currentIndex];
    if (currentMovie && !savedMovies.some(movie => movie.id === currentMovie.id)) {
      setSavedMovies([...savedMovies, currentMovie]);
    }
   
  };

  const removeMovie = (indexToRemove) => {
    const updatedMovies = savedMovies.filter((_savedMovie, index) => index !== indexToRemove);
    setSavedMovies(updatedMovies);
   
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading movies!</p>;

  const currentMovie = movies[currentIndex];

  return (
    <InfoContainer>
      <h1>Step 2/4</h1>
      <p>Click on the button below <br></br> to choose and add a Movie<br></br>  to your Advent Calendar</p>
      <InfoContainer>
        {showMovie && currentMovie && (
          <>
            <img
              src={currentMovie.poster_path ? `${IMAGE_BASE_URL}${currentMovie.poster_path}` : 'path/to/default-image.jpg'}
              alt={currentMovie.title}
              style={{ /*width: '300px',*/ height: '300px', objectFit: 'cover', borderRadius: '15px' }}
            />
            <h2>{currentMovie.title}</h2>
            <p>{currentMovie.overview}</p>
          </>
        )}

        <div style={{ marginTop: '20px' }}>
          <Button onClick={handleNextMovie} style={{ margin: '0 10px' }}>
            {showMovie ? 'Another' : 'Show'}
          </Button>
          <Button onClick={saveMovie} disabled={!showMovie} style={{ margin: '0 10px' }}>
            Save
          </Button>
          <Link to="/ideaspage">
            <PaginationButton style={{ margin: '0 10px' }}>Next</PaginationButton>
          </Link>
        </div>
      </InfoContainer>

      {savedMovies.length > 0 && (
        <InfoContainer className="saved-movies" style={{ marginTop: '30px' }}>
          <h3>Saved Movies:</h3>
          <StyledListSavedItems>
            {savedMovies.map((movie, index) => (
              <StyledList key={index}>
                <span>{movie.title}</span>
                {movie.poster_path ? (
                  <img
                    src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                    alt={movie.title}
                    style={{ maxWidth: '100px', marginTop: '10px', borderRadius: '15px' }}
                  />
                ) : (
                  <img
                    src="https://via.placeholder.com/100"
                    alt="Placeholder"
                    style={{ maxWidth: '100px', marginTop: '10px', borderRadius: '15px' }}
                  />
                )}
                <CloseButton onClick={() => removeMovie(index)} style={{ marginLeft: '10px' }}>
                  X
                </CloseButton>
              </StyledList>
            ))}
          </StyledListSavedItems>
        </InfoContainer>
      )}
    </InfoContainer>
  );
};

export default MovieList;