import React, { Component } from 'react';
import './Menu.css';
import { Route, Link } from 'react-router-dom'

const menus = [
  {
    name: 'Home',
    exact: true,
    to: '/'
  },
  {
    name: 'Product Management',
    exact: false,
    to: '/product-list'
  }
]

const MyCustomLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
      const active = match ? 'active' : ''
      return (
        <li className={active}>
          <Link to={to}>
            {label}
          </Link>
        </li>
      )
    }}/>
  )
}

const showMenu = (menus) => {
  var result = null
  if (menus.length > 0) {
    result = menus.map((menu, index) => (
      <MyCustomLink 
        key={index}
        label={menu.name} 
        activeOnlyWhenExact={menu.exact}
        to={menu.to} 
      />
    ))
  }
  return result
}
class Menu extends Component {

  render() {
    return (
      <div className="navbar navbar-default">
        <Link className="navbar-brand" to="/">Call Api</Link>
        <ul className="nav navbar-nav">
          { showMenu(menus) }
        </ul>
      </div>
    );
  }
}

export default Menu;