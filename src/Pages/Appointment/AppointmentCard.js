import React from 'react'

// 📌📌 step-3: receive the state from parent 👇🏻 component
const AppointmentCard = ({ appointment, setTreatment }) => {
  const { name, slots } = appointment
  return (
    <div>
      <div>
        <div className="card bg-blue-100">
          <div className="card-body text-center">
            <h2 className="text-2xl text-secondary font-bold text-center">
              {name}
            </h2>
            <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
            <p>
              {slots.length} {slots.length > 1 ? 'spaces' : 'space'} available
            </p>
            <div className="card-actions justify-center">
              {/* The button to open modal */}
              <label
                disabled={slots.length === 0}
                htmlFor="booking-modal"
                className="btn btn-primary text-white"
                // 📌📌 step-4: update the state with a button click
                onClick={() => setTreatment(appointment)}
              >
                Book Appointment
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppointmentCard
