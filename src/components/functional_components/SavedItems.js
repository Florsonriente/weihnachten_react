import React, { useState, useEffect } from 'react';
import { CloseButton } from '../styling_components/AllButtons';
import InfoContainer from '../styling_components/InfoContainer';
import ItemHolder from '../styling_components/ItemHolder';


function CalendarSquare({ day, item, onDrop, onRemove }) {
  const handleDrop = (event) => {
    event.preventDefault();
    const droppedItem = JSON.parse(event.dataTransfer.getData('application/json'));
    onDrop(day, droppedItem);
  };

  const handleDragOver = (event) => {
    event.preventDefault(); 
  };

  return (
    <InfoContainer
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{
        border: '1px dotted #ccc',
        width: '100%',
        height: '100%',
        minWidth: '100px',
        minHeight: '150px',
        textAlign: 'center',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        backgroundColor: '#e0e0e994',
        borderRadius:'1em',
      
      }}
    >
      <span className='calendar-day'
        style={{
          position: 'absolute',
          top: '5px',
          left: '5px',
          fontSize: '5em',
          zIndex: 1,
          opacity: 1, 
         
        }}
      >
        {day}
      </span>
      {item && (
        <div style={{ width: '100%', height: '100%' }}>
          {item.src && (
            <img
              src={item.src}
              alt={item.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          )}
          {item.title && (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: '#fff',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                cursor: 'default',
                padding: '5px 10px',
                borderRadius: '5px',
                textAlign: 'center',
              }}
            >
              <p style={{ margin: 0, fontSize: '12px' }}>{item.title}</p>
            </div>
          )}
          <CloseButton
            onClick={() => onRemove(day)}
            style={{
              position: 'absolute',
              top: '5px',
              right: '5px',
              background: 'rgba(255,255,255,0.7)',
              border: 'none',
              borderRadius: '50%',
              width: '20px',
              height: '20px',
              cursor: 'pointer',
              zIndex: 10,
            }}
          >
            ×
          </CloseButton>
        </div>
      )}
    </InfoContainer>
  );
}

function DraggableItem({ item, onRemove }) {
  const handleDragStart = (event) => {
    event.dataTransfer.setData('application/json', JSON.stringify(item));
  };

  return (
    <li
      draggable
      onDragStart={handleDragStart}
      style={{
        marginBottom: '10px',
        position: 'relative',
        cursor: 'grab',
      }}
    >
      {item.src && (
        <img
          src={item.src}
          alt={item.title}
          style={{
            width: '100px',
            height: '100px',
            objectFit: 'cover',
          }}
        />
      )}
      <p style={{ margin: '5px 0 0', fontSize: '14px', textAlign: 'center', maxWidth: '100px' }}>
        {item.title}
      </p>
      <CloseButton
        onClick={() => onRemove(item.id)}
        style={{
          position: 'absolute',
          top: '5px',
          right: '5px',
          background: 'rgba(255,255,255,0.7)',
          border: 'none',
          borderRadius: '50%',
          width: '20px',
          height: '20px',
          cursor: 'pointer',
        }}
      >
        ×
      </CloseButton>
    </li>
  );
}

function SavedItems({ savedMovies, savedIdeas, savedCustomThoughts, savedBooks }) {
  const [calendarItems, setCalendarItems] = useState({});
  const [availableItems, setAvailableItems] = useState([]);

  useEffect(() => {
    const initialItems = [
      ...savedMovies.map((movie, index) => ({
        id: `movie-${index}`,
        src: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        title: movie.title,
      })),
      ...savedIdeas.map((idea, index) => ({
        id: `idea-${index}`,
        src: idea.image,
        title: idea.title,
      })),
      ...savedCustomThoughts.map((thought, index) => ({
        id: `thought-${index}`,
        src: thought.image,
        title: thought.text,
      })),
      ...savedBooks.map((book, index) => ({
        id: `book-${index}`,
        src: `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`,
        title: book.title,
      })),
    ];
    setAvailableItems(initialItems);
  }, [savedMovies, savedIdeas, savedCustomThoughts, savedBooks]);

  const handleDrop = (day, droppedItem) => {
    setCalendarItems((prev) => ({
      ...prev,
      [day]: droppedItem,
    }));
    setAvailableItems((prevItems) => prevItems.filter((item) => item.id !== droppedItem.id));
  };

  const handleRemoveCalendarItem = (day) => {
    setCalendarItems((prev) => {
      const newItems = { ...prev };
      const removedItem = newItems[day];
      delete newItems[day];
  
      setAvailableItems((prevItems) => {
        if (!prevItems.some((item) => item.id === removedItem.id)) {
          return [...prevItems, removedItem];
        }
        return prevItems;
      });
  
      return newItems;
    });
  };
  
  const handleRemoveAvailableItem = (itemId) => {
    setAvailableItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <InfoContainer>
      <h1>Final touch!</h1>
      <p>Drag and drop your selections</p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(8, 1fr)',
          gridGap: '1.5em',
        }}
      >
        {Array.from({ length: 24 }, (_, i) => (
          <CalendarSquare
            key={i + 1}
            day={i + 1}
            onDrop={handleDrop}
            onRemove={handleRemoveCalendarItem}
            item={calendarItems[i + 1]}
          />
        ))}
      </div>
      <ItemHolder>
      <ul style={{ display: 'flex', flexWrap: 'wrap', listStyleType: 'none', padding: 0 }}>
        {availableItems.map((item) => (
          <DraggableItem key={item.id} item={item} onRemove={handleRemoveAvailableItem} />
        ))}
      </ul>
      </ItemHolder>
    </InfoContainer>
  );
}

export default SavedItems;
