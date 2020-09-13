const actions = {
  booksLoaded: (newBooks) => {
    return {
      type: 'BOOKS_LOADED',
      payload: newBooks,
    }
  },
  booksRequested: () => {
    return {
      type: 'BOOKS_REQUESTED',
    }
  },
  booksError: (payload) => {
    return {
      type: 'BOOKS_ERROR',
      payload: payload,
    }
  }
}

export default actions;