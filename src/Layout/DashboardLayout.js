import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AuthContext } from '../Contexts/Usercontext'

// import useAdmin from '../hooks/useAdmin'
import Header from '../Pages/Shared/Header'
import Footer from '../Pages/Shared/Footer'

const DashboardLayout = () => {
  const { user } = useContext(AuthContext)
  //   const [isAdmin] = useAdmin(user?.email)
  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile container mx-auto">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 mr-6 mb-6 w-60 bg-base-200 text-base-content text-center rounded-lg">
            <li>
              <Link to="/dashboard">My Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/wishlist">My Wishlist</Link>
            </li>
            {/* {isAdmin && ( */}
            <>
              <li>
                <Link to="/dashboard/allusers">All Users</Link>
              </li>
            </>
            {/* )} */}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default DashboardLayout
