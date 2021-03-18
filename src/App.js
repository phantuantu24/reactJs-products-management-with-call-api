import './App.css';

function App() {
  return (
    <div>

      <div className="navbar navbar-default">
        <a className="navbar-brand">Call Api</a>
        <ul className="nav navbar-nav">
          <li className="active">
            <a>Home</a>
          </li>
          <li>
            <a>Product Management</a>
          </li>
        </ul>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <button type="button" className="btn btn-success">Add New Product</button><hr />
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">Product List</h3>
              </div>
              <div className="panel-body">
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th><strong>No</strong></th>
                      <th><strong>Code</strong></th>
                      <th><strong>Name</strong></th>
                      <th><strong>Price</strong></th>
                      <th><strong>Status</strong></th>
                      <th><strong>Action</strong></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>BCS345</td>
                      <td>Iphone X</td>
                      <td>8000$</td>
                      <td>
                        <span className="label label-danger">Out of stock</span>
                      </td>
                      <td>
                        <button type="button" className="btn btn-success mr-10">Edit</button>
                        <button type="button" className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
