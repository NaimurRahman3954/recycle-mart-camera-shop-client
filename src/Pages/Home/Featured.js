import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import BookingModal from '../Categories/BookingModal'
import ProductCard from '../Categories/ProductCard'
import Loading from '../Shared/Loading'

const Featured = () => {
  const url = `http://localhost:8000/products/?advertised=true`
  const [camera, setCamera] = useState(null)

  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      try {
        const res = await fetch(url, {
          headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`,
          },
        })
        const data = await res.json()
        return data
      } catch (error) {}
    },
  })

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div>
      {products.length && (
        <div className="container mx-auto mt-6 p-16">
          <h1 className="text-5xl font-bold mb-12">Featured 🔥</h1>
          <div className="container mx-auto my-10 text-center">
            <div className="flex flex-wrap align-middle justify-center">
              {products.map((product) => (
                <div>
                  {product.advertised && (
                    <ProductCard
                      key={product.name}
                      product={product}
                      setCamera={setCamera}
                    ></ProductCard>
                  )}
                </div>
              ))}
            </div>
            {camera && (
              <BookingModal
                camera={camera}
                setCamera={setCamera}
              ></BookingModal>
            )}
            <Toaster></Toaster>
          </div>
        </div>
      )}
    </div>
  )
}

export default Featured
