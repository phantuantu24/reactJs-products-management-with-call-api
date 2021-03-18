import React, { Component } from 'react';
import './ProductItem.css';

class ProductItem extends Component {
  render() {
    return (
      <tr>
        <td>1</td>
        <td>BCS345</td>
        <td>Iphone X</td>
        <td>8000$</td>
        <td>
          <span className="label label-danger">Out of stock</span>
        </td>
        <td>
          <button type="button" className="btn btn-success mr-10">Edit</button>
          <button type="button" className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;