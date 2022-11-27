import React, { useContext } from 'react'
import toast from 'react-hot-toast'
import { AuthContext } from '../../Contexts/Usercontext'

const ProductCard = ({ product, setCamera }) => {
  const { user } = useContext(AuthContext)
  const email = user?.email

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

  const handleAddToWishList = () => {
    const wishlist = {
      product: name,
      price: resalePrice,
      originalPrice,
      condition,
      email,
      location,
    }

    fetch('http://localhost:8000/wishlists', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(wishlist),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.acknowledged) {
          // setCamera(null)
          toast.success('Added to the wishlists')
          // refetch()
        } else {
          toast.error(data.message)
        }
      })

    // TODO: send data to the server
    // and once data is saved then close the modal
    // and display success toast
  }

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
                  defaultChecked
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
              onClick={handleAddToWishList}
              className="btn btn-primary btn-outline flex gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Add to Wishlist
            </label>
            <label
              htmlFor="product-modal"
              onClick={() => setCamera(product)}
              className="btn btn-primary flex"
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
