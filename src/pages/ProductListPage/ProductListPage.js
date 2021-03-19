import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ProductItem from '../../components/ProductItem/ProductItem';
import ProductList from '../../components/ProductList/ProductList';
import callApi from '../../utils-(api)/apiCaller'
import './ProductListPage.css';

function ProductListPage() {

  const [products, setProducts] = useState([])

  const showProductItem = (products) => {
    var result = null
    if (products.length > 0) {
      result = products.map((product, index) => (
        <ProductItem
          key={index}
          product={product}
          index={index}
          onDeleteById={onDelete}
        />
      ))
    }
    return result
  }

  useEffect(() => {
    callApi('products', 'GET', null).then(res => {
      setProducts(res.data)
    })
  }, [])

  const onDelete = (id) => {
    callApi(`products/${id}`, 'DELETE', null).then(res => {
      if (res.status === 200) {
        var index = findIndexById(products, id)
        if (index !== -1) {
          products.splice(index, 1)
          setProducts([...products])
        }
      }
    })
  }

  const findIndexById = (products, id) => {
    var result = -1
    products.forEach((product, index) => {
      if (product.id === id) {
        result = index
      }
    });
    return result
  }

  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <Link to="/product/add" className="btn btn-success">Add New Product</Link><hr />
      <ProductList>
        {showProductItem(products)}
      </ProductList>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, null)(ProductListPage);