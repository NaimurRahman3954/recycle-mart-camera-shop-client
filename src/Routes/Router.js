import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import PageNotFound from '../Pages/404/PageNotFound'
import Blog from '../Pages/Blog/Blog'
import Categories from '../Pages/Categories/Categories'
import Products from '../Pages/Categories/Products'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Login/Register'
import PrivateRoute from './PrivateRoute'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () =>
          fetch(
            'https://b6a11-service-review-server-side-naimur-rahman3954.vercel.app/services'
          ),
      },
      {
        path: '/home',
        element: <Home></Home>,
      },
      {
        path: '/categories',
        element: <Categories></Categories>,
      },
      {
        path: '/services/review',
        // element: <AddReview></AddReview>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/categories/:id',
        element: <Products></Products>,
        loader: ({ params }) =>
          fetch(`http://localhost:8000/categories/${params.id}`),
      },

      {
        path: '/services/:id/checkout',
        // element: <Checkout></Checkout>,
        loader: ({ params }) =>
          fetch(
            `https://b6a11-service-review-server-side-naimur-rahman3954.vercel.app/services/${params.id}`
          ),
      },
      {
        path: '/myreviews/',
        element: <PrivateRoute>{/* <MyReviews></MyReviews> */}</PrivateRoute>,
        loader: ({ params }) =>
          fetch(
            `https://b6a11-service-review-server-side-naimur-rahman3954.vercel.app/reviews/`
          ),
      },
      {
        path: '/addservice/',
        element: <PrivateRoute>{/* <AddService></AddService> */}</PrivateRoute>,
        loader: ({ params }) =>
          fetch(
            `https://b6a11-service-review-server-side-naimur-rahman3954.vercel.app/reviews/`
          ),
      },
    ],
  },
  {
    path: '*',
    element: <PageNotFound></PageNotFound>,
  },
])

export default Router
