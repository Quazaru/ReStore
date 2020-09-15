const actions = {
  booksLoaded: (newBooks) => {
    return {
      type: 'FETCH_BOOKS_SUCCESS',
      payload: newBooks,
    }
  },
  booksRequested: () => {
    return {
      type: 'FETCH_BOOKS_REQUEST',
    }
  },
  booksError: (payload) => {
    return {
      type: 'FETCH_BOOKS_ERROR',
      payload: payload,
    }
  },
  bookAddedToCart: (BookId) => {
    return {
      type: 'BOOK_ADDED_TO_CART',
      payload: BookId,
    }
  },
  cart: {
    itemIncrease: (id) => {
      return {
        type: 'CART_ITEM_INCREASE',
        payload: id,
      }
    },
    itemDecrease: (id) => {
      return {
        type: 'CART_ITEM_DECREASE',
        payload: id,
      }
    },
    itemDelete: (id) => {
      return {
        type: 'CART_ITEM_DELETE',
        payload: id,
      }
    },
  },
  fetchBooks: (dispatch, BookStoreService ) => () => {
      const { booksRequested, booksLoaded, booksError } = actions;
      dispatch(booksRequested());
      BookStoreService.getBooks()
        .then((data) => {
          dispatch(booksLoaded(data));
        })
        .catch((error) => dispatch(booksError(error)))
   },

}

export default actions;