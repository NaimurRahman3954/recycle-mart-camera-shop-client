import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { AuthContext } from '../../Contexts/Usercontext'

const MyOrders = () => {
  const { user } = useContext(AuthContext)

  const url = `http://localhost:8000/bookings?email=${user?.email}`

  const { data: bookings = [] } = useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      // const res = await fetch(url)
      const data = await res.json()
      return data
    },
  })
  return (
    <div>
      <h1 className="text-5xl font-bold mt-12 text-center">My Orders</h1>
      <div className="overflow-x-auto pt-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Meeting Location</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookings.length &&
              bookings?.map((booking, i) => (
                <tr key={booking._id}>
                  <th>{i + 1}</th>
                  <td>{booking.product}</td>
                  <td>৳ {booking.price}</td>
                  <td>{booking.meetingLocation}</td>
                  <td></td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyOrders
