import React, { useState } from 'react';
import callApi from '../../utils-(api)/apiCaller'
import { Link, useHistory } from 'react-router-dom'
import './ProductActionPage.css';

function ProductActionPage() {

  const [stateForm, setStateForm] = useState({
    id: '',
    txtName: '',
    price: 0,
    checkBox: false
  })

  const history = useHistory()

  const onDataChange = (e) => {
    var target = e.target
    var name = target.name
    var value = target.type === "checkbox" ? target.checked : target.value
    setStateForm({
      ...stateForm,
      [name]: value
    })
  }

  const onSave = (e) => {
    e.preventDefault()
    callApi('products', 'POST', {
      name: stateForm.txtName,
      price: stateForm.price,
      status: stateForm.checkBox
    }).then(res => {
      history.goBack()
    })
  }

  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <form onSubmit={onSave}>
        <legend>Add New Product</legend>
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            className="form-control"
            name="txtName"
            value={stateForm.txtName}
            onChange={onDataChange}
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={stateForm.price}
            onChange={onDataChange}
          />
        </div>
        <div className="form-group">
          <label>Status</label>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                name="checkBox"
                value={stateForm.checkBox}
                onChange={onDataChange}
              />
                In Stock
              </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary mr-10">Add</button>
        <Link to="/product-list" className="btn btn-danger">Back</Link>
      </form>
    </div>
  );
}

export default ProductActionPage;