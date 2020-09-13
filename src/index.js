import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './store';
import App from './components/App/App.jsx';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.jsx';
import BookStoreService from './services/bookstore-service';
import { BookStoreServiceProvider } from './components/BookStoreService-context/BookStoreService-context.jsx';
import './assets/styles/style.scss';


const bookstoreService = new BookStoreService(); 

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BookStoreServiceProvider value={bookstoreService}>
        <Router>
          <App />
        </Router>
      </BookStoreServiceProvider>
    </ErrorBoundary>
  </Provider>, 
  document.getElementById('root')
);
