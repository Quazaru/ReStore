import React from 'react';
import './BookListItem.scss';


const BookListItem = ({ book }) => {
  const { title, author, price, img } = book;
  return (
    <div className="book-list-item">
      <div className="book-list-item__img">
        <img src={img} alt="book-img"/>
      </div>
      <div className="book-list-item__body">
        <div className="book-list-item__title">{title}</div>
        <div className="book-list-item__author">{author}</div>
        <div className="book-list-item__price">{price}</div>
        <button className="btn btn-primary">Add to cart</button>
      </div>
    </div>
  )
}


export default BookListItem;
