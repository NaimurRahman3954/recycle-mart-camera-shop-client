import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { AuthContext } from '../../Contexts/Usercontext'
import Loading from '../Shared/Loading'

const AllUsers = () => {
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch(
        'https://assignment-12-server-sage.vercel.app/users',
        {
          headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      )
      const data = await res.json()
      return data
    },
  })

  const handleMakeAdmin = (id) => {
    fetch(`https://assignment-12-server-sage.vercel.app/users/admin/${id}`, {
      method: 'PUT',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success('Make admin successful.')
          refetch()
        }
      })
  }

  const handleVerify = (id) => {
    fetch(`https://assignment-12-server-sage.vercel.app/users/sellers/${id}`, {
      method: 'PUT',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success('Verification successful.')
          refetch()
        }
      })
  }

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div>
      <Toaster></Toaster>
      <h1 className="text-5xl font-bold mt-12 text-center">All Users</h1>
      <div className="overflow-x-auto pt-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Admin</th>
              <th>Verify</th>
              <th>Delete</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role || 'buyer'}</td>
                <td>
                  {user?.role !== 'admin' && (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-xs btn-success"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  {user?.verified !== true && (
                    <button
                      onClick={() => handleVerify(user._id)}
                      className="btn btn-xs btn-warning"
                    >
                      Verify
                    </button>
                  )}
                </td>
                <td>
                  <button className="btn btn-xs btn-error">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllUsers
