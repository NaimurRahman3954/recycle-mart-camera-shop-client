import { Link } from 'react-router-dom'
import Banner from './Banner'
import React, { useState } from 'react'
import Contact from './Contact'
// import AboutMe from './AboutMe'
// import AppointmentDayPicker from '../Appointment/AppointmentDayPicker'
import Categories from '../Categories/Categories'

const Home = () => {
  // const [selected, setSelected] = useState(new Date())
  return (
    <div className="App">
      <Banner></Banner>
      <h1 className="text-5xl font-bold mt-12">Categories</h1>
      <Categories></Categories>
      <Link to="/categories">
        <button className="btn btn-primary">See All →</button>
      </Link>
      {/* <AppointmentDayPicker
        selected={selected}
        setSelected={setSelected}
      ></AppointmentDayPicker> */}
      {/* <AboutMe></AboutMe> */}
      <Contact></Contact>
    </div>
  )
}

export default Home
