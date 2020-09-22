const updateCartItems = (cartItems, item, idx = 0) => {
  if (!item || item.count === 0 ) {
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

const updateCartTotal = (items, discount = 0,) => {
  return items.reduce((main, current) => {
    return main + (current.total - (current.total * discount));
  }, 0)

}

const updateCartCount = (items) => {
  return items.reduce((prev, current) => {
    return prev + current.count
  }, 0)
}

const updateCartState = (state, id, newCartItems) => {
  const bookId = id;
  const book = state.bookList.books.find((book) => bookId === book.id);
  const cartBook = state.cart.items.find((book) => book.id === bookId);
  const newBook = updateBookItem( book, cartBook);
  const newItems = updateCartItems(state.cart.items, newBook, state.cart.items.indexOf(cartBook) )
  if (newCartItems) {
    return {
        items: newCartItems,
        totalSum: updateCartTotal(newCartItems),
        count: updateCartCount(newCartItems),
    };
  } else {
    return {
      items: newItems,
      totalSum: updateCartTotal(newItems),
      count: updateCartCount(newItems),
    }
  }
;
}

const updateBookItem = (book, item = {}, addCoef = 1) => {
  const {price = book.price, id = book.id, count = 0, title = book.title, total = 0} = item;
  return {
    id,
    title,
    count: count + addCoef,
    total:  total + (price * addCoef),
  }
}

const updateCart = (state, action) => {
  if(!state) {
    return  {
      items: [],
      totalSum: 0,
      count: 0,
    }
  }
  switch(action.type) {
    case 'BOOK_ADDED_TO_CART' :
    case 'CART_ITEM_INCREASE' :
      return updateCartState(state, action.payload );
    case 'CART_ITEM_DECREASE' : 
      let bookId = action.payload;
      let book = state.bookList.books.find((book) => bookId === book.id);
      let cartBook = state.cart.items.find((book) => book.id === bookId);
      let newBook = updateBookItem( book, cartBook, -1);
      const newItems = updateCartItems(state.cart.items, newBook, state.cart.items.indexOf(cartBook));
      return updateCartState(state, action.payload, newItems);
    case 'CART_ITEM_DELETE' :
      return updateCartState(state, action.payload, updateCartItems(state.cart.items));
    default : 
      console.log('default')
      return {
        items: [],
        totalSum: 0,
        count: 0,
      };
  }
}

export default updateCart;
  