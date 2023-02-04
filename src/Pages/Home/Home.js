import { Link } from 'react-router-dom'
import React from 'react'
import Categories from '../Categories/Categories'
import Request from './Request'
import Featured from './Featured'
import MobileApp from './MobileApp'
import Hero from './Hero'

const Home = () => {
  return (
    <div className="App">
      <Hero></Hero>
      <h1 className="text-5xl font-bold mt-12">Categories 📸</h1>
      <Categories></Categories>
      <Link to="/categories">
        <button className="btn btn-warning mb-16">See All →</button>
      </Link>
      <Featured></Featured>
      <MobileApp></MobileApp>
      <Request></Request>
    </div>
  )
}

export default Home
