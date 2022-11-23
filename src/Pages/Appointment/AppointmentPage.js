import React, { useState } from 'react'
import AppointmentDayPicker from './AppointmentDayPicker'
import AvailableAppointments from './AvailableAppointments'

const AppointmentPage = () => {
  const [selected, setSelected] = useState(new Date())

  return (
    <div>
      <AppointmentDayPicker
        selected={selected}
        setSelected={setSelected}
      ></AppointmentDayPicker>
      <AvailableAppointments selected={selected}></AvailableAppointments>
    </div>
  )
}

export default AppointmentPage
