import React, { Component } from 'react';
import './ProductList.css';

class ProductList extends Component {
  render() {
    return (
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">Product List</h3>
        </div>
        <div className="panel-body">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th><strong>No</strong></th>
                <th><strong>Id</strong></th>
                <th><strong>Name</strong></th>
                <th><strong>Price</strong></th>
                <th><strong>Status</strong></th>
                <th><strong>Action</strong></th>
              </tr>
            </thead>
            <tbody>
              { this.props.children }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ProductList;