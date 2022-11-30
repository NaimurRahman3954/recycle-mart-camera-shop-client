import { useQuery } from '@tanstack/react-query'
import React, { useContext, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { AuthContext } from '../../Contexts/Usercontext'
import BookingModal from '../Categories/BookingModal'
import ProductCard from '../Categories/ProductCard'
import Loading from '../Shared/Loading'

const MyWishList = () => {
  const { user } = useContext(AuthContext)
  const [camera, setCamera] = useState(null)

  const url = `http://localhost:8000/wishlists?email=${user?.email}`

  const {
    data: wishlists = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['wishlists', user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      const data = await res.json()
      return data
    },
  })

  const handleBookNow = (wishlist) => {
    const { product, price, photo, location } = wishlist

    const newBooking = {
      product: product,
      price: price,
      photo: photo,
      email: user.email,
      // phone,
      meetingLocation: location,
      paid: false,
    }
    fetch(`http://localhost:8000/bookings/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newBooking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success('Booking successful.')
          refetch()
        }
      })
  }

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div>
      <h1 className="text-5xl font-bold mt-12 text-center">My Wishlist</h1>
      <div className="overflow-x-auto pt-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Original Price</th>
              <th>Condition</th>
              <th>Location</th>
              <th>Book</th>
            </tr>
          </thead>
          <tbody>
            {wishlists.map((wishlist, i) => (
              <tr key={wishlist._id}>
                <th>{i + 1}</th>
                <td>{wishlist.product}</td>
                <td>৳ {wishlist.price}</td>
                <td>৳ {wishlist.originalPrice}</td>
                <td>{wishlist.condition}</td>
                <td>{wishlist.location}</td>
                <td>
                  <button
                    onClick={() => handleBookNow(wishlist)}
                    className="btn btn-xs btn-success block"
                  >
                    Book Now
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Toaster></Toaster>
      </div>
    </div>
  )
}

export default MyWishList
