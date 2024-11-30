import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import { FaHome, FaCalendarAlt } from 'react-icons/fa'; 

import AdventIdeas from "./components/functional_components/AdventIdeas";
import ChristmasMovies from "./components/functional_components/ChristmasMovies";

import ChristmasBooks from "./components/functional_components/ChristmasBooks";
import CustomThoughts from "./components/functional_components/CustomThoughts";
import SavedItems from "./components/functional_components/SavedItems";


import SnowEffectButton from "./components/effects_components/SnowFall";
import Snowfall from "react-snowfall";

import GlobalStyles from "./components/styling_components/GlobalStyles";
import {  TypographyWrapper,  StyledWord} from "./components/effects_components/StyledTypography";
import { Button } from "./components/styling_components/AllButtons";


function App() {

  const [savedMovies, setSavedMovies] = useState([]);
  const [savedIdeas, setSavedIdeas] = useState([]);
  const [savedCustomThoughts, setSavedCustomThoughts] = useState([]);
  const [savedBooks, setSavedBooks] = useState([]);
  const [showSnow, setShowSnow] = useState(true);
  const [totalSavedItems, setTotalSavedItems] = useState(0);


  useEffect(() => {
    const totalCount =
      savedMovies.length +
      savedIdeas.length +
      savedCustomThoughts.length +
      savedBooks.length;
    setTotalSavedItems(totalCount);
  
  }, [savedMovies, savedIdeas, savedCustomThoughts, savedBooks]);

  return (
    <>
      <GlobalStyles />
      {showSnow && <Snowfall />}
      <Router>
        <div className="App">
  
          <header className="App-header">
            <nav className="navigation">
              <Link to="/" className="icon" data-testid = 'home'
              
                 >
                <FaHome  />
              </Link>

              <SnowEffectButton data-testid = 'snowButton'
                showSnow={showSnow}
                setShowSnow={setShowSnow}
                size="2x"
              />
              <Link to="/bookspage" >
                Books
              </Link>
              <Link to="/moviespage" >
                Movies
              </Link>
              <Link to="/ideaspage" >
                Activities
              </Link>
              <Link to="/customthoughtspage" >
                More
              </Link>
             
              <Link
                to="/saved-items"
                className="icon"
                style={{ position: "relative" }}
              >
                 <FaCalendarAlt  
                 /> 
                {totalSavedItems > 0 && (
                  <span
                    style={{
                      position: "absolute",
                      top: "-10px",
                      right: "-10px",
                      backgroundColor: "red",
                      borderRadius: "50%",
                      color: "white",
                      padding: "5px 10px",
                      fontSize: "8px",
                    }}
                  >
                    {totalSavedItems}
                  </span>
                )}
              </Link>
            </nav>
          </header>

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <TypographyWrapper>
                    <StyledWord>
                      {/* <h2>soon is</h2> */}
                    </StyledWord>
                    <h3>MAKE YOUR OWN ADVENT CALENDAR <br></br>FOR THE MAGIC</h3>
                    <StyledWord>
                      {"ADVENT TIME".split("").map((letter, index) => (
                        <React.Fragment key={index}>
                          <span>{letter}</span>
                        </React.Fragment>
                      ))}
                    </StyledWord>  
                     <Link to="/bookspage">
                      <Button>Start!</Button>
                    </Link> 
                    <br />

                 
                  </TypographyWrapper>
                  <div>
                     </div>
                </>
              }
            />
            <Route
              path="/saved-items"
              element={
                <SavedItems
                  savedMovies={savedMovies}
                  // savedRecipes={savedRecipes}
                  savedIdeas={savedIdeas}
                  savedCustomThoughts={savedCustomThoughts}
                  savedBooks={savedBooks}
                />
              }
            />

    <Route
  path="/bookspage"
  element={
    <ChristmasBooks
      savedBooks={savedBooks}
      setSavedBooks={setSavedBooks}
    />
  }
/>
            <Route
              path="/moviespage"
              element={
                <ChristmasMovies
                  savedMovies={savedMovies}
                  setSavedMovies={setSavedMovies}
                />
              }
            />
            <Route
              path="/customthoughtspage"
              element={
                <CustomThoughts
                  savedCustomThoughts={savedCustomThoughts}
                  setSavedCustomThoughts={setSavedCustomThoughts}
                />
              }
            />
            <Route
              path="/ideaspage"
              element={
                <AdventIdeas
                  savedIdeas={savedIdeas}
                  setSavedIdeas={setSavedIdeas}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
