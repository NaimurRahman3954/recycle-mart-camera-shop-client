import React from 'react'
import { format } from 'date-fns'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

const AppointmentDayPicker = ({ selected, setSelected }) => {
  let footer = <p className="py-6 text-primary">Please pick a day.</p>
  if (selected) {
    footer = (
      <p className="pt-6 text-primary">You picked {format(selected, 'PP')}.</p>
    )
  }
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold mt-12 text-center">
        Select Your Appointment Date
      </h1>
      <div className="hero-content flex-col lg:flex-row py-9">
        <img
          src="https://i.ibb.co/34Fk56F/contact-1.png"
          className="max-w-md"
          alt=""
        />
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={setSelected}
          footer={footer}
          className="px-12"
        />
      </div>
    </div>
  )
}

export default AppointmentDayPicker
