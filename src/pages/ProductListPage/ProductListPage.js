import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ProductItem from '../../components/ProductItem/ProductItem';
import ProductList from '../../components/ProductList/ProductList';
import * as Actions from '../../actions/index'
import './ProductListPage.css';

class ProductListPage extends Component {

  componentDidMount() {
    this.props.fetchAllProducts()
  }

  showProductItem = (products) => {
    var result = null
    if (products.length > 0) {
      result = products.map((product, index) => (
        <ProductItem
          key={index}
          product={product}
          index={index}
          onDeleteById={this.onDelete}
        />
      ))
    }
    return result
  }

  onDelete = (id) => {
    this.props.deleteProduct(id)
  }

  render() {
    const { products } = this.props
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to="/product/add" className="btn btn-success">Add New Product</Link><hr />
        <ProductList>
          {this.showProductItem(products)}
        </ProductList>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: () => {
      dispatch(Actions.actFetchProductsRequest())
    },
    deleteProduct: (id) => {
      dispatch(Actions.actDeleteProductRequest(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);