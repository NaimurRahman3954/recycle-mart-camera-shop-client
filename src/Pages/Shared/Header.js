import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AuthContext } from '../../Contexts/Usercontext'

const Header = () => {
  const { user, logOut } = useContext(AuthContext)
  console.log('context', user)

  const location = useLocation()
  const isHome = location.pathname === '/'

  const handleSignOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/categories" className="justify-between">
          Categories
        </Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </>
  )

  const privateMenuItems = (
    <>
      <li className={`text-${isHome ? 'white' : 'black'}`}>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      {/* Buyer or Seller */}

      <div className="grid place-items-start lg:place-items-center mb-2 lg:mb-0">
        <select className="select select-bordered select-sm mx-2 mr-4">
          <option defaultValue>Buyer</option>
          <option>Seller</option>
        </select>
      </div>
    </>
  )

  return (
    <div className=" mx-auto py-2">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <Link
            to="/"
            className={`btn btn-ghost normal-case text-xl font-bold text-${
              isHome ? 'white' : 'primary'
            }`}
          >
            Recycle Mart
          </Link>
        </div>
        <div
          className={
            user === null
              ? 'navbar-center hidden lg:flex'
              : 'navbar-center hidden lg:flex'
          }
        >
          <ul className="menu menu-horizontal p-0 text-white">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          {!user?.uid && (
            <div className="flex justify-center gap-4">
              <Link
                className="btn btn-sm btn-outline text-white mx-1"
                to="/login"
              >
                Login
              </Link>
            </div>
          )}
          {user?.uid && (
            <div className="flex items-center align-middle">
              <div className="menu menu-horizontal p-0 hidden lg:flex">
                <ul className="menu menu-horizontal p-0">{privateMenuItems}</ul>
              </div>
              <div>
                <button onClick={handleSignOut} className="btn btn-sm">
                  Log Out
                </button>
              </div>
              <div
                className="rounded-full avatar w-12 mask mask-circle mx-2 tooltip"
                data-tip={user.displayName}
              >
                <img src={user.photoURL} alt="" width={36} />
              </div>
            </div>
          )}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z"
                />
              </svg>
            </label>
            <ul
              tabIndex={1}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
              {privateMenuItems}
            </ul>
          </div>
        </div>
        <label
          htmlFor="dashboard-drawer"
          tabIndex={2}
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-three-dots-vertical"
            viewBox="0 0 16 16"
          >
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg>
        </label>
      </div>
    </div>
  )
}

export default Header
