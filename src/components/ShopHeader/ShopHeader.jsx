import React from 'react';
import './ShopHeader.scss';
import { Link } from 'react-router-dom';

const ShopHeader = ({itemsCount, total}) => {
  return (
    <header>
      <div className="container">
        <Link to="/" className="logo">ReBook</Link>
        <Link className="header-cart" to="cart">
          <i className="cart-icon fa fa-shopping-cart" />
          {itemsCount} items (${total})
        </Link>
      </div>
    </header>
  )
}

export default ShopHeader;
