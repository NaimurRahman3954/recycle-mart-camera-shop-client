import { format } from 'date-fns'
import React from 'react'

// 📌📌 step-6: receive the state 👇🏻 from the sibling component
// 📌📌 step-9.1: receive the state from the 👇🏻 parent component (prop drilling)
// 📌📌 step-15.2: [closing modal] receive setTreatment 👇🏻 state
const AppointmentModal = ({ treatment, selected, setTreatment }) => {
  // 📌📌 step-7: destructure from the state
  const { name, slots } = treatment

  // 📌📌 step-9.2: format date from 'selected' state
  const date = format(selected, 'PP')

  // 📌📌 step-12.2: event handler
  const handleBooking = (event) => {
    event.preventDefault()
    const form = event.target
    const slot = form.slot.value
    const name = form.name.value
    const email = form.email.value
    const phone = form.phone.value

    // 📌📌 step-14: create booking object
    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: name,
      slot,
      email,
      phone,
    }

    // TODO: send data to the server
    // and once data is saved then close the modal
    // and display success toast

    // 📌📌 step-15.3: [closing modal] reset setTreatment state to null onSubmit
    setTreatment(null)
  }

  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>

          {/* 📌📌 step-10: add form to the modal */}
          <form
            // 📌📌 step-12.1: event handler
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              type="text"
              disabled
              value={date}
              className="input w-full input-bordered "
            />

            {/* 📌📌 step-11: mapping the slots */}
            <select name="slot" className="select select-bordered w-full">
              {/* 📌📌 step-13: 👇🏻 handle 'missing key error' by providing index */}
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="btn btn-primary w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default AppointmentModal
