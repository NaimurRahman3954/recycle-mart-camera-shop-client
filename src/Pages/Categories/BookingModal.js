import React, { useContext } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { AuthContext } from '../../Contexts/Usercontext'

const BookingModal = ({ camera, setCamera }) => {
  const { user } = useContext(AuthContext)
  const { name, resalePrice } = camera

  const handleBooking = (event) => {
    event.preventDefault()
    const form = event.target
    const buyer = form.name.value
    const email = form.email.value
    const phone = form.phone.value
    const meetingLocation = form.location.value

    const booking = {
      product: name,
      price: resalePrice,
      buyer: buyer,
      email,
      phone,
      meetingLocation,
    }

    fetch('http://localhost:8000/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.acknowledged) {
          setCamera(null)
          toast.success('Booking confirmed')
          // refetch()
        } else {
          toast.error(data.message)
        }
      })

    // TODO: send data to the server
    // and once data is saved then close the modal
    // and display success toast
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
