import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './ProductItem.css';

class ProductItem extends Component {

  onDelete = (id, name) => {
    if (window.confirm(`Are you sure to delete ${name}`)) {
      this.props.onDeleteById(id)
    }
  }

  render() {

    const { product, index } = this.props
    const statusName = product.status ? 'In Stock' : 'Out of Stock'
    const statusClass = product.status ? 'success' : 'danger'

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}$</td>
        <td>
          <span className={`label label-${statusClass}`}>{statusName}</span>
        </td>
        <td>
          <Link
            to={`/product/${product.id}/edit`}
            className="btn btn-success mr-10"
          >
            Edit
          </Link>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.onDelete(product.id, product.name)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;