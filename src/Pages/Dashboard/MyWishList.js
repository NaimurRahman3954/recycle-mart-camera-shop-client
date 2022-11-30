import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Contexts/Usercontext'
import Loading from '../Shared/Loading'

const MyWishList = () => {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  const url = `https://assignment-12-server-sage.vercel.app/wishlists?email=${user?.email}`

  const { data: wishlists = [], isLoading } = useQuery({
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
      meetingLocation: location,
      paid: false,
    }
    fetch(`https://assignment-12-server-sage.vercel.app/bookings/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newBooking),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success('Booking successful.')
        navigate('/dashboard/')
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
