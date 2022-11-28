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
        const res = await fetch('http://localhost:8000/products', {
          headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`,
          },
        })
        const data = await res.json()
        return data
      } catch (error) {}
    },
  })

  const handleDeleteProduct = (product) => {
    fetch(`http://localhost:8000/products/${product._id}`, {
      method: 'DELETE',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch()
          toast.success(`Product ${product.name} deleted successfully`)
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
      <div className="overflow-x-auto pt-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Photo</th>
              <th>Name</th>
              <th>Price</th>
              <th>Delete</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, i) => (
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
