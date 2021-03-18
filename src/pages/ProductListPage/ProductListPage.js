import React, { Component } from 'react';
import ProductItem from '../../components/ProductItem/ProductItem';
import ProductList from '../../components/ProductList/ProductList';
import './ProductListPage.css';

class ProductListPage extends Component {

  showProductItem = (products) => {
    var result = null
    if (products.length > 0) {
      result = products.map((product, index) => (
        <ProductItem 
          key={index}
          product={product}
          index={index}
        />
      ))
    }
    return result
  }

  render() {
    const products = []
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <button type="button" className="btn btn-success">Add New Product</button><hr />
        <ProductList>
          { this.showProductItem(products) }
        </ProductList>
      </div>
    );
  }
}

export default ProductListPage;