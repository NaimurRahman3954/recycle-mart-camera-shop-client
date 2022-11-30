import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Contexts/Usercontext'
import Loading from '../Shared/Loading'

const MyOrders = () => {
  const { user } = useContext(AuthContext)

  const url = `http://localhost:8000/bookings?email=${user?.email}`

  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ['bookings', user?.email],
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

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div>
      <h1 className="text-5xl font-bold mt-12 text-center">My Orders</h1>
      <div className="overflow-x-auto pt-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Photo</th>
              <th>Product</th>
              <th>Price</th>
              <th>Meeting Location</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length &&
              bookings?.map((booking, i) => (
                <tr key={booking._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src={booking.photo} alt="product_photo" />
                      </div>
                    </div>
                  </td>
                  <td>{booking.product}</td>
                  <td>৳ {booking.price}</td>
                  <td>{booking.meetingLocation}</td>
                  <td>
                    {booking.price && !booking.paid && (
                      <Link to={`/dashboard/payment/${booking._id}`}>
                        <button className="btn btn-warning btn-sm">Pay</button>
                      </Link>
                    )}
                    {booking.price && booking.paid && (
                      <span className="text-success">paid</span>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyOrders
