import React from 'react';
import BookListItem from '../BookListItem/BookListItem.jsx';
import Spinner from '../Spinner/Spinner.jsx';
import './BookList.scss';
import withBookStoreService from '../HOC/withBookStoreService';
import compose from '../../utils/compose';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator.jsx';
import { connect } from 'react-redux';
import actions from '../../actions/index';

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className="book-list">
      {
        books.map((book) => {
          return(
            <li  key={book.id}>
              <BookListItem book={book} onAddedToCart={() => onAddedToCart(book.id)}/>
            </li>
          )
        })
      }
    </ul>
  )
}

class BookListContainer extends React.Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;
    if (loading) {
      return (
        <div className="lodaing">
          <Spinner />
        </div>
      );
    }
    
    if (error) {
      return (
        <ErrorIndicator message={error} />
      )
    }
    return <BookList books={books} onAddedToCart={onAddedToCart} />
    
  }
}

const mapStateToProps = ({bookList: {books, loading, error}}) => {
  return {books, loading, error}
}

const mapDispatchToProps = (dispatch, { BookStoreService }) => {
  return {
    fetchBooks: actions.fetchBooks(dispatch, BookStoreService),
    onAddedToCart: (id) => dispatch(actions.bookAddedToCart(id))
  }
  // return bindActionCreators({
  //   booksLoaded: actions.booksLoaded,
  //   booksRequested: actions.booksRequested,
  //   booksError: actions.booksError,
  // }, dispatch)
}

export default compose(
  withBookStoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(BookListContainer);
