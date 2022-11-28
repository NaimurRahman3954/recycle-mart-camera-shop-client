import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import toast from 'react-hot-toast'
import { AuthContext } from '../../Contexts/Usercontext'

const MyWishList = () => {
  const { user } = useContext(AuthContext)

  const url = `http://localhost:8000/wishlists?email=${user?.email}`

  const { data: wishlists = [], refetch } = useQuery({
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

  const handleBookNow = (id) => {
    fetch(`http://localhost:8000/bookings/${id}`, {
      method: 'PUT',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        //   console.log('made admin', data)
        if (data.modifiedCount > 0) {
          toast.success('Booking successful.')
          refetch()
        }
      })
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
                    onClick={() => handleBookNow(wishlist._id)}
                    className="btn btn-xs btn-success"
                  >
                    Book Now
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyWishList
