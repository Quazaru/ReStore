const updateCartItems = (cartItems, item, idx = 0) => {
if (!item) {
  console.log([
    ...cartItems.slice(0, idx),
    ...cartItems.slice(idx + 1),
  ], idx)
  return [
    ...cartItems.slice(0, idx),
    ...cartItems.slice(idx + 1),
  ];
}
 if((!idx && idx !== 0) || idx === -1) {
   return [
     ...cartItems, item
   ]
 } else if (idx >= 0) {

   return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1),
  ];
 }
}

const updateBookItem = (book, item = {}, addCoef = 1) => {
  const {price = book.price, id = book.id, count = 0, title = book.title, total = 0} = item;
  if (item.count + addCoef === 0) {
    return undefined;
  }
  return {
    id,
    title,
    count: count + addCoef,
    total:  total + (price * addCoef),
  }
}

const updateCartTotal = (items, discount = 0,) => {
  return items.reduce((main, current) => {
    return main + (current.total - (current.total * discount));
  }, 0)

}

const updateCartState = (state, id, newCartItems) => {
  const bookId = id;
  const book = state.books.find((book) => bookId === book.id);
  const cartBook = state.cart.items.find((book) => book.id === bookId);
  const newBook = updateBookItem( book, cartBook);
  const newItems = updateCartItems(state.cart.items, newBook, state.cart.items.indexOf(cartBook) )
  if (newCartItems) {
    return {
      ...state,
      cart: {
        ...state.cart,
        items: newCartItems,
        totalSum: updateCartTotal(newCartItems),
      }
    };
  }
  return {
    ...state,
    cart: {
      ...state.cart,
      items: newItems,
      totalSum: updateCartTotal(newItems),
    }
  };
}

const initialState = {
  books: [
   
  ],
  cart: {
    items: [],
    totalSum: 320.4,
  },
  loading: true,
  error: null,
}

const reducer = (state = initialState, action) => {
  let bookId;
  let book;
  let cartBook;
  let newBook; 
  switch(action.type) {
    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_BOOKS_REQUEST' :
      return {
        ...state,
        books: [],
        loading: true,
        error: null,
      };
    case 'FETCH_BOOKS_ERROR' : 
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload,
      };
    case 'BOOK_ADDED_TO_CART' : 
      return updateCartState(state, action.payload );
    case 'CART_ITEM_INCREASE' :
      return updateCartState(state, action.payload );
    case 'CART_ITEM_DECREASE' : 
      bookId = action.payload;
      book = state.books.find((book) => bookId === book.id);
      cartBook = state.cart.items.find((book) => book.id === bookId);
      newBook = updateBookItem( book, cartBook, -1);
      const newItems = updateCartItems(state.cart.items, newBook, state.cart.items.indexOf(cartBook));
      return updateCartState(state, action.payload, newItems);
    case 'CART_ITEM_DELETE' :
      return updateCartState(state, action.payload, updateCartItems(state.cart.items, undefined));
    default: 
      return state;
  }
  
}

export default reducer;