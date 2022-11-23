import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import AppointmentCard from './AppointmentCard'
import AppointmentModal from './AppointmentModal'

const AvailableAppointments = ({ selected }) => {
  // 📌📌 step-1: declare a state for treatment
  const [treatment, setTreatment] = useState(null)

  const [appointments, setAppointments] = useState([])
  useEffect(() => {
    fetch('appointmentOptions.json')
      .then((res) => res.json())
      .then((data) => setAppointments(data))
  }, [])
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold my-9 text-center">
        Available Appointments on{' '}
        <span className="text-primary">{format(selected, 'PP')}</span>
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 justify-center align-middle my-9">
        {appointments.map((appointment) => (
          <AppointmentCard
            key={appointment._id}
            appointment={appointment}
            // 📌📌 step-2: send the state as a prop to the child component
            setTreatment={setTreatment}
          ></AppointmentCard>
        ))}
      </div>
      {
        // 📌📌 step-8: handle 'treatment is null' error => show modal if there is a value of treatment
        treatment && (
          <AppointmentModal
            // 📌📌 step-5: pass the state to the sibling component (modal)
            treatment={treatment}
            // 📌📌 step-15.1: [closing modal] pass setTreatment state to the modal
            setTreatment={setTreatment}
            selected={selected}
          ></AppointmentModal>
        )
      }
    </div>
  )
}

export default AvailableAppointments
