import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AuthContext } from '../Contexts/Usercontext'

// import useAdmin from '../hooks/useAdmin'
import Header from '../Pages/Shared/Header'
import Footer from '../Pages/Shared/Footer'
import useAdmin from '../hooks/useAdmin'

const DashboardLayout = () => {
  const { user } = useContext(AuthContext)
  const [isAdmin] = useAdmin(user?.email)
  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile container mx-auto">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content mb-6">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side lg:bg-base-200 lg:mb-6 lg:rounded-lg lg:mr-6">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60 text-base-content text-center lg:bg-transparent sm:bg-white">
            <li>
              <Link to="/dashboard">My Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/wishlist">My Wishlist</Link>
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allusers">All Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/addproduct">Add a Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/myproducts">My Products</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default DashboardLayout
