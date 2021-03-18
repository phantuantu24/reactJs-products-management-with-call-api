import React, { Component } from 'react';
import './ProductActionPage.css';

class ProductActionPage extends Component {
  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form >
          <legend>Add New Product</legend>
          <div className="form-group">
            <label>Product Name</label>
            <input type="text" className="form-control"/>
          </div>
          <div className="form-group">
            <label>Price</label>
            <input type="text" className="form-control"/>
          </div>
          <div className="form-group">
            <label>Status</label>
            <div className="checkbox">
              <label>
                <input type="checkbox"/>
                In Stock
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
        
      </div>
    );
  }
}

export default ProductActionPage;