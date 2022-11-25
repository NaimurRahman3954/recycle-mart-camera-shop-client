import React, { useContext } from 'react'
import { AuthContext } from '../../Contexts/Usercontext'

const BookingModal = ({ camera, setCamera }) => {
  const { user } = useContext(AuthContext)
  const { name, resalePrice } = camera
  //   console.log(name, resalePrice)

  const handleBooking = (event) => {
    event.preventDefault()
    const form = event.target
    const buyer = form.name.value
    const email = form.email.value
    const phone = form.phone.value
    const location = form.location.value

    const booking = {
      // meetingDate: date,
      // product: name,
      buyer: buyer,
      email,
      phone,
      location,
    }

    console.log(booking)

    setCamera(null)

    // TODO: send data to the server
    // and once data is saved then close the modal
    // and display success toast

    // 📌📌 step-15.3: [closing modal] reset setTreatment state to null onSubmit
  }

  return (
    <div>
      <input type="checkbox" id="product-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="product-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-3xl font-bold">{name}</h3>
          <div className="badge badge-warning font-extrabold my-3 p-3">
            ৳ {resalePrice}
          </div>
          <form
            // 📌📌 step-12.1: event handler
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              defaultValue={user?.displayName}
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              defaultValue={user?.email}
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <input
              name="location"
              type="text"
              placeholder="Meeting Location"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="btn btn-primary w-full"
              type="submit"
              value="Book Now"
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default BookingModal
