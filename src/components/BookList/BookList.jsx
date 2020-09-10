import React from 'react';
import BookListItem from '../BookListItem/BookListItem.jsx';
import './BookList.scss';
import withBookStoreService from '../HOC/withBookStoreService';
import compose from '../../utils/compose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../../actions/index';

class BookList extends React.Component {

  componentDidMount() {
    const { BookStoreService } = this.props;
    const data = BookStoreService.getBooks();
    console.log(data);
    this.props.booksLoaded(data);
  }

  render() {
    const { books } = this.props;
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    booksLoaded: actions.booksLoaded,
  }, dispatch)
}

export default compose(
  withBookStoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(BookList);
