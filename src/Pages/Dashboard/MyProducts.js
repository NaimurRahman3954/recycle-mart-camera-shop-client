import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import ConfirmationModal from '../Shared/ConfirmationModal'
import Loading from '../Shared/Loading'

const MyProducts = () => {
  const [deletingProduct, setDeletingProduct] = useState(null)
  const closeModal = () => {
    setDeletingProduct(null)
  }
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      try {
        const res = await fetch(
          'https://assignment-12-server-sage.vercel.app/products',
          {
            headers: {
              authorization: `bearer ${localStorage.getItem('accessToken')}`,
            },
          }
        )
        const data = await res.json()
        return data
      } catch (error) {}
    },
  })

  const handleDeleteProduct = (product) => {
    fetch(
      `https://assignment-12-server-sage.vercel.app/products/${product._id}`,
      {
        method: 'DELETE',
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch()
          toast.success(`Product ${product.name} deleted successfully`)
        }
      })
  }

  const handleAdvertise = (product) => {
    fetch(
      `https://assignment-12-server-sage.vercel.app/products/${product._id}`,
      {
        method: 'PUT',
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch()
          toast.success(`${product.name} advertised successfully`)
        }
      })
  }

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div>
      <Toaster></Toaster>
      <h1 className="text-5xl font-bold mt-12 text-center">My Products</h1>
      <div className="overflow-x-auto pt-5 text-black">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Photo</th>
              <th>Name</th>
              <th>Price</th>
              <th>Availability</th>
              <th>Advertise</th>
              <th>Delete</th>
              {/* <th></th> */}
            </tr>
          </thead>
          <tbody>
            {products.length &&
              products?.map((product, i) => (
                <tr key={product._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src={product.photo} alt="product_photo" />
                      </div>
                    </div>
                  </td>
                  <td>{product.name}</td>
                  <td>৳ {product.resalePrice}</td>
                  <td>
                    {!product.paid && (
                      <label className="btn btn-sm btn-outline btn-disabled bg-transparent btn-warning">
                        Available
                      </label>
                    )}
                    {product.paid && <span className="text-success">sold</span>}
                  </td>
                  <td>
                    {!product.advertised && (
                      <label
                        onClick={() => handleAdvertise(product)}
                        className="btn btn-sm btn-warning"
                      >
                        Advertise
                      </label>
                    )}
                    {product.advertised && product.advertised && (
                      <span className="text-success">advertised</span>
                    )}
                  </td>
                  <td>
                    <label
                      onClick={() => setDeletingProduct(product)}
                      htmlFor="confirmation-modal"
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </label>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {deletingProduct && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`If you delete ${deletingProduct.name}. It cannot be undone.`}
          successAction={handleDeleteProduct}
          successButtonName="Delete"
          modalData={deletingProduct}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  )
}

export default MyProducts
