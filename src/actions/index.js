const actions = {
  booksLoaded: (newBooks) => {
    return {
      type: 'BOOKS_LOADED',
      payload: newBooks,
    }
  }
}

export default actions;