import { Link } from 'react-router-dom'
import Banner from './Banner'
import React, { useState } from 'react'
import Contact from './Contact'
import AboutMe from './AboutMe'
import AppointmentDayPicker from '../Appointment/AppointmentDayPicker'

const Home = () => {
  const [selected, setSelected] = useState(new Date())
  return (
    <div className="App">
      <Banner></Banner>
      <AppointmentDayPicker
        selected={selected}
        setSelected={setSelected}
      ></AppointmentDayPicker>
      <Link to="/appointment">
        <button className="btn btn-primary my-16">See All →</button>
      </Link>
      <AboutMe></AboutMe>
      <Contact></Contact>
    </div>
  )
}

export default Home
