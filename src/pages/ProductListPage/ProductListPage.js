import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ProductItem from '../../components/ProductItem/ProductItem';
import ProductList from '../../components/ProductList/ProductList';
import callApi from '../../utils-(api)/apiCaller'
import * as Actions from '../../actions/index'
import './ProductListPage.css';

class ProductListPage extends Component {

  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     products: []
  //   }
  // }

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

  // onDelete = (id) => {
  //   callApi(`products/${id}`, 'DELETE', null).then(res => {
  //     if (res.status === 200) {
  //       const { products } = this.state
  //       var index = this.findIndexById(products, id)
  //       if (index !== -1) {
  //         products.splice(index, 1)
  //         this.setState(products)
  //       }
  //     }
  //   })
  // }

  findIndexById = (products, id) => {
    var result = -1
    products.forEach((product, index) => {
      if (product.id === id) {
        result = index
      }
    });
    return result
  }
  render() {
    const { products } = this.props
    console.log(products)
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);