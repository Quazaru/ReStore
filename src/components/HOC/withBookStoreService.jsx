// Получаем доступ к сервису для получения и обработки даты

import React from 'react';
import { BookStoreServiceConsumer } from '../BookStoreService-context/BookStoreService-context.jsx';

const withBookStoreService = () => (Wrapped) => {
  return (props) => {
    return (
      <BookStoreServiceConsumer>
        {(BookStoreService) => {
          return (
            <Wrapped {...props} BookStoreService={BookStoreService} /> 
          )
        }}
      </BookStoreServiceConsumer>
      
    )
  }
}

export default withBookStoreService;
