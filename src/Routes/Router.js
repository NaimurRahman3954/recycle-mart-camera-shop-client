import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import DashboardLayout from '../Layout/DashboardLayout'
import Main from '../Layout/Main'
import PageNotFound from '../Pages/404/PageNotFound'
import Blog from '../Pages/Blog/Blog'
import Categories from '../Pages/Categories/Categories'
import Products from '../Pages/Categories/Products'
import AddProduct from '../Pages/Dashboard/AddProduct'
import AllUsers from '../Pages/Dashboard/AllUsers'
import MyOrders from '../Pages/Dashboard/MyOrders'
import MyProducts from '../Pages/Dashboard/MyProducts'
import MyWishList from '../Pages/Dashboard/MyWishList'
import Payment from '../Pages/Dashboard/Payment'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Login/Register'
import AdminRoute from './AdminRoute'
import PrivateRoute from './PrivateRoute'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch(''),
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
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: '/dashboard',
        element: <MyOrders></MyOrders>,
      },
      {
        path: '/dashboard/wishlist',
        element: <MyWishList></MyWishList>,
      },
      {
        path: '/dashboard/allusers',
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/addproduct',
        element: (
          <AdminRoute>
            <AddProduct></AddProduct>
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/myproducts',
        element: (
          <AdminRoute>
            <MyProducts></MyProducts>
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/payment/:id',
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`http://localhost:8000/bookings/${params.id}`),
      },
    ],
  },
  {
    path: '*',
    element: <PageNotFound></PageNotFound>,
  },
])

export default Router
