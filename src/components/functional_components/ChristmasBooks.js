import axios from 'axios';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Button, CloseButton, PaginationButton } from "../styling_components/AllButtons";
import InfoContainer from '../styling_components/InfoContainer';
import { StyledList, StyledListSavedItems } from "../styling_components/AllStyledLists";

const BASE_URL = "https://openlibrary.org/search.json";
const IMAGE_BASE_URL = "https://covers.openlibrary.org/b/id/";

const ChristmasBooks = ({ savedBooks, setSavedBooks }) => {
  const [books, setBooks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBook, setShowBook] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 
    const fetchBooks = async () => {
      try {
        const response = await axios.get(BASE_URL, {
          params: { q: "christmas", limit: 5 },
        });
        setBooks(response.data.docs);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();


  const handleNextBook = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % books.length);
    setShowBook(true);
  };

  const saveBook = () => {
    const currentBook = books[currentIndex];
    if (currentBook && !savedBooks.some(book => book.key === currentBook.key)) {
      setSavedBooks([...savedBooks, currentBook]);
    }
  };

  const removeBook = (indexToRemove) => {
    setSavedBooks(savedBooks.filter((_savedBook, index) => index !== indexToRemove));
  };

  if (loading) return <p>Oh! <br></br> there are so many nice books to read! <br></br>Pls have some patience! Go drink some coffee! <br></br> We are loading...</p>;
  if (error) return <p>Error loading books!</p>;

  const currentBook = books[currentIndex];

  return (
    <InfoContainer>
      <h1>Step 1/4</h1>
      <p>Click on the button below <br></br> to choose and add a Book <br></br> to your Advent Calendar</p>
      <InfoContainer>
        {showBook && currentBook && (
          <>
            {currentBook.cover_i ? (
              <img
                src={`${IMAGE_BASE_URL}${currentBook.cover_i}-L.jpg`}
                alt={currentBook.title}
                style={{ height: '300px', objectFit: 'cover', borderRadius: '15px' }}
              />
            ) : (
              <p>No Image Available</p>
            )}
            <h2>{currentBook.title}</h2>
            {currentBook.author_name && <p>by {currentBook.author_name.join(", ")}</p>}
            {currentBook.first_publish_year && <p>Published: {currentBook.first_publish_year}</p>}
          </>
        )}

        <div style={{ marginTop: '20px' }}>
          <Button onClick={handleNextBook} style={{ margin: '0 10px' }}>
            {showBook ? 'Another' : 'Show'}
          </Button>
          <Button onClick={saveBook} disabled={!showBook} style={{ margin: '0 10px' }}>
            Save
          </Button>
          <Link to="/ideaspage">
            <PaginationButton style={{ margin: '0 10px' }}>Next</PaginationButton>
          </Link>
        </div>
      </InfoContainer>

      {savedBooks.length > 0 && (
        <InfoContainer className="saved-books" style={{ marginTop: '30px' }}>
          <h3>Saved Books:</h3>
          <StyledListSavedItems>
            {savedBooks.map((book, index) => (
              <StyledList key={index}>
                <span>{book.title}</span>
                {book.cover_i ? (
                  <img
                    src={`${IMAGE_BASE_URL}${book.cover_i}-M.jpg`}
                    alt={book.title}
                    style={{ maxWidth: '100px', marginTop: '10px', borderRadius: '15px' }}
                  />
                ) : (
                  <img
                    src="https://via.placeholder.com/400"
                    alt="Placeholder"
                    style={{ maxWidth: '100px', marginTop: '10px', borderRadius: '5px' }}
                  />
                )}
                <CloseButton onClick={() => removeBook(index)} style={{ marginLeft: '10px' }}>
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

export default ChristmasBooks;
