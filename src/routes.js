import React from 'react'
import HomePage from './pages/HomePage/HomePage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import ProductActionPage from './pages/ProductActionPage/ProductActionPage'
import ProductListPage from './pages/ProductListPage/ProductListPage'

const routes = [
  {
    path: "/",
    exact: true,
    main: () => {
      return <HomePage />
    }
  },
  {
    path: '/product-list',
    exact: false,
    main: () => {
      return <ProductListPage />
    }
  },
  {
    path: '/product/add',
    exact: false,
    main: ({ match, history }) => {
      return <ProductActionPage match={match} history={history} />
    }
  },
  {
    path: '/product/:id/edit',
    exact: false,
    main: ({ match }) => {
      return <ProductActionPage match={match} />
    }
  },
  {
    path: '',
    exact: false,
    main: () => {
      return <NotFoundPage />
    }
  }
]

export default routes