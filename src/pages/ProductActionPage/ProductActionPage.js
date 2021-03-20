import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import * as Actions from '../../actions/index'
import './ProductActionPage.css';

class ProductActionPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      id: '',
      txtName: '',
      price: 0,
      checkBox: false
    }
  }

  componentDidMount() {
    const { match } = this.props
    const id = match.params.id
    if (id) {
      this.props.onEditProduct(id)
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps) {
      const { itemEditing } = nextProps
      this.setState({
        id: itemEditing.id,
        txtName: itemEditing.name,
        price: itemEditing.price,
        checkBox: itemEditing.status
      })
    }
  }

  onDataChange = (e) => {
    var target = e.target
    var name = target.name
    var value = target.type === "checkbox" ? target.checked : target.value
    this.setState({
      [name]: value
    })
  }

  onSave = (e) => {
    e.preventDefault()
    const { id, txtName, price, checkBox } = this.state
    const { history, match } = this.props
    const idEdit = match.params.id
    const newProduct = {
      id: id,
      name: txtName,
      price: price,
      status: checkBox
    }
    if (!idEdit) {
      this.props.onAddProduct(newProduct)
    } else {
      this.props.onUpdateProduct(newProduct)
    }
    history.goBack()
  }

  render() {
    const { txtName, price, checkBox } = this.state
    const { match } = this.props
    const id = match.params.id
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form onSubmit={this.onSave}>
          <legend>{id ? 'Edit' : 'Add New'} Product</legend>
          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              className="form-control"
              name="txtName"
              value={txtName}
              onChange={this.onDataChange}
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              className="form-control"
              name="price"
              value={price}
              onChange={this.onDataChange}
            />
          </div>
          <div className="form-group">
            <label>Status</label>
            <div className="checkbox">
              <label>
                <input
                  type="checkbox"
                  name="checkBox"
                  value={checkBox}
                  onChange={this.onDataChange}
                  checked={checkBox}
                />
                  In Stock
                </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary mr-10">{id ? 'Edit' : 'Add'}</button>
          <Link to="/product-list" className="btn btn-danger">Back</Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itemEditing: state.itemEditing
  }
}

const matDispatchToProps = (dispatch, props) => {
  return {
    onAddProduct: (product) => {
      dispatch(Actions.actAddProductRequest(product))
    },
    onEditProduct: (id) => {
      dispatch(Actions.actGetProductRequest(id))
    },
    onUpdateProduct: (product) => {
      dispatch(Actions.actUpdateProductRequest(product))
    }
  }
}

export default connect(mapStateToProps, matDispatchToProps)(ProductActionPage);