import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Shared/Footer'
import Header from '../Shared/Header'

const PageNotFound = () => {
  return (
    <div>
      <Header></Header>
      <div className="hero min-h-screen bg-base-100 bg-dotted-spacing-4 bg-dotted-gray-700">
        <div className="hero-content text-center mb-12">
          <div className="max-w-md">
            <img src="https://i.ibb.co/c85MP0v/404-1.png" alt="" />
            {/* <h1 className="text-3xl font-bold">⚠️ 404</h1> */}
            <p className="py-6">
              The webpage you are looking for does not exist!
            </p>
            <Link to="/services">
              <button className="btn btn-primary mb-12">
                Explore my Services
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default PageNotFound
