import React, { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { useLoaderData } from 'react-router-dom'
import BookingModal from './BookingModal'
import ProductCard from './ProductCard'

const Products = () => {
  const category = useLoaderData()
  const [camera, setCamera] = useState(null)
  const { products } = category
  return (
    <div className="container mx-auto my-10 text-center">
      <div className="flex flex-wrap align-middle justify-center">
        {products.map((product) => (
          <div>
            <ProductCard
              key={product.name}
              product={product}
              setCamera={setCamera}
            ></ProductCard>
          </div>
        ))}
      </div>
      {camera && (
        <BookingModal camera={camera} setCamera={setCamera}></BookingModal>
      )}
      <Toaster></Toaster>
    </div>
  )
}

export default Products
