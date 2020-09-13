import React from 'react';
import BookList from '../BookList/BookList.jsx';
import ShoppingCartTable from '../ShoppingCartTable/ShoppingCartTable.jsx';

const HomePage = () => (
  <> 
    <BookList />
    <ShoppingCartTable total={122}/>
  </>
);

export default HomePage;  