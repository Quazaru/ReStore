import updateCart from './modules/updateCart';
import updateBookList from './modules/updateBookList';



const reducer = (state, action) => {
  return {
    ...state,
    bookList: updateBookList(state, action),
    cart: updateCart(state, action),
  }
}

export default reducer;