import React from 'react';
import './ShoppingCartTable.scss';

const ShoppingCartTable = (props) => {
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
          <tr>
            <td>1</td>
            <td>Магия утра</td>
            <td>1</td>
            <td>$34</td>
            <td>
              <button className="btn btn-outline-danger"><i className="fa fa-trash-o"></i></button>
              <button className="btn btn-outline-success"><i className="fa fa-plus-circle"></i></button>
              <button className="btn btn-outline-warning"><i className="fa fa-minus-circle"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="cart-total">
        ${props.total}
      </div>
    </div>
  )
}

export default ShoppingCartTable;
