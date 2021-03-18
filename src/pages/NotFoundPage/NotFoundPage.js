import React, { Component } from 'react';
import './NotFoundPage.css';

class NotFoundPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="alert alert-danger">
          <strong>(404) </strong> Page Not Found
        </div>
      </div>
    );
  }
}

export default NotFoundPage;