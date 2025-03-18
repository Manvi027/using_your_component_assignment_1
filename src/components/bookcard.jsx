// write the book component code here
// cart/bookcard.jsx
import React from 'react';
import '../index.css'

const BookCard = ({ id, image, name, genre, author }) => {
  return (
    <div className="book-card">
    <h3>{id}</h3>
      <img src={image} alt={name} className="book-image" />
      <h3>{name}</h3>
      <p><strong>Genre: </strong>{genre}</p>
      <p><strong>Author: </strong>{author}</p>
    </div>
  );
};

export default BookCard;
