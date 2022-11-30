import { Link } from 'react-router-dom'
import Banner from './Banner'
import React from 'react'
import Categories from '../Categories/Categories'
import Request from './Request'
import Featured from './Featured'

const Home = () => {
  return (
    <div className="App">
      <Banner></Banner>
      <h1 className="text-5xl font-bold mt-12">Categories</h1>
      <Categories></Categories>
      <Link to="/categories">
        <button className="btn btn-primary mb-16">See All →</button>
      </Link>
      <Featured></Featured>
      <Request></Request>
    </div>
  )
}

export default Home
