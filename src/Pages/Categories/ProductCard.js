import React, { useContext } from 'react'
import toast from 'react-hot-toast'
import { AuthContext } from '../../Contexts/Usercontext'

const ProductCard = ({ product, setCamera }) => {
  const { user } = useContext(AuthContext)
  const email = user.email

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
              onClick={handleAddToWishList}
              className="btn btn-primary btn-outline flex"
            >
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
