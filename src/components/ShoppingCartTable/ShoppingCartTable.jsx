import React from 'react';
import './ShoppingCartTable.scss';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../actions';
const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
  const renderRow = (item, idx) => {
    const { id, title, count, total } = item;

    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{total}</td>
        <td>
          <button 
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger">
            <i className="fa fa-trash-o"></i>
          </button>
          <button 
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success">
            <i className="fa fa-plus-circle"></i>
          </button>
          <button 
            onClick={() => onDecrease(id)}
            className="btn btn-outline-warning">
            <i className="fa fa-minus-circle"></i>
          </button>
        </td>
      </tr>
    )
  }

  return (
    <div className="shopping-cart-table">
      <p>Your Order</p>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

            {items.map(renderRow)}
            
 
        </tbody>
      </table>
      <div className="cart-total">
        ${total}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    items: state.cart.items,
    total: state.cart.totalSum,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  onIncrease: (id) => {
    dispatch(actions.cart.itemIncrease(id));
  },
  onDecrease: (id) => {
    dispatch(actions.cart.itemDecrease(id));
  },
  onDelete: (id) => {
    dispatch(actions.cart.itemDelete(id));
  },};
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
