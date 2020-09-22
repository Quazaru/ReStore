
const updateBookList = (state, action) => {
  if (!state) {
    return  {
      books: [],
      loading: true,
      error: null,
    }
  };
  switch(action.type) {
    case 'FETCH_BOOKS_SUCCESS':
      return {
        loading: false,
        error: null,
        books: action.payload,
      };
    case 'FETCH_BOOKS_REQUEST' :
      return {
        loading: true,
        error: null,
        books: [],

      };
    case 'FETCH_BOOKS_ERROR' : 
      return {
        loading: false,
        error: action.payload,
        books: [],
      };
    default :
      console.log('books default')
      return {
        ...state.bookList
      };
    }
}

export default updateBookList;