import React from 'react'
import HomePage from './pages/HomePage/HomePage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

const routes = [
  {
    path: "/",
    exact: true,
    main: () => {
      return <HomePage />
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