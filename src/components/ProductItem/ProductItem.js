import React, { Component } from 'react';
import './ProductItem.css';

class ProductItem extends Component {
  render() {

    const { product, index } = this.props
    const statusName = product.status ? 'In Stock' : 'Out of Stock'
    const statusClass = product.status ? 'success' : 'danger'

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <span className={`label label-${statusClass}`}>{statusName}</span>
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