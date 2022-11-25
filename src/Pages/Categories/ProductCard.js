import React from 'react'
import { Link } from 'react-router-dom'
import BookingModal from './BookingModal'

const ProductCard = ({ product, setCamera }) => {
  const {
    name,
    photo,
    location,
    resalePrice,
    originalPrice,
    yearsOfUse,
    condition,
    postTime,
    sellersName,
    verified,
  } = product

  console.log(product)

  return (
    <div>
      <div className="m-5">
        <div className="card w-96 outline outline-1 outline-base-300">
          <figure className="h-60 m-3">
            <img src={photo} alt="" width={250} height={250} />
          </figure>
          <div className="card-body bg-base-200">
            <h2 className="card-title">{name}</h2>
            <p className="text-sm text-justify ">Location: {location}</p>
            <p className="text-sm text-justify ">
              Original Price: ৳ {originalPrice}
            </p>
            <p className="text-sm text-justify ">Used for {yearsOfUse} years</p>
            <p className="text-sm text-justify ">{condition} condition</p>

            <div className="flex align-middle mt-3">
              <span className="text-sm">Seller's Name: {sellersName}</span>
              <div className={verified === false ? 'hidden' : 'block'}>
                <input
                  type="checkbox"
                  checked
                  className="checkbox checkbox-xs checkbox-primary checked disabled ml-1"
                />
              </div>
            </div>
            <p className="text-sm text-justify">Posted on: {postTime}</p>

            <div className="badge badge-warning font-extrabold my-3 p-3">
              ৳ {resalePrice}
            </div>

            {/* The button to open modal */}
            <label
              htmlFor="product-modal"
              onClick={() => setCamera(product)}
              className="btn btn-primary btn-outline flex"
            >
              Book Now
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
