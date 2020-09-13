import React from 'react';
import BookListItem from '../BookListItem/BookListItem.jsx';
import Spinner from '../Spinner/Spinner.jsx';
import './BookList.scss';
import withBookStoreService from '../HOC/withBookStoreService';
import compose from '../../utils/compose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../../actions/index';

class BookList extends React.Component {

  componentDidMount() {
    
    const { booksLoaded, booksRequested, booksError, BookStoreService }  = this.props;
    booksRequested();
    BookStoreService.getBooks()
      .then((data) => {
        booksLoaded(data);
      })
      .catch((error) => booksError(error))
  }

  render() {
    const { books, loading, error } = this.props;
    if (loading) {
      return (
        <div className="lodaing">
          <Spinner />
        </div>
      );
    }
    
    if (error) {
      throw new Error(error)
    }

    return (
      <ul className="book-list">
        {
          books.map((book) => {
            return(
              <li  key={book.id}>
                <BookListItem book={book} />
              </li>
            )
          })
        }
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
    loading: state.loading,
    error: state.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    booksLoaded: actions.booksLoaded,
    booksRequested: actions.booksRequested,
    booksError: actions.booksError,
  }, dispatch)
}

export default compose(
  withBookStoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(BookList);
