import React from 'react'
import { Link } from 'react-router-dom'
import { PhotoProvider, PhotoView } from 'react-photo-view'

const CategoryCard = (props) => {
  const { title, photo, products } = props.category
  return (
    <div>
      <div className="m-5">
        <div className="card outline outline-1 outline-base-300">
          <figure className="h-60 m-3">
            <PhotoProvider>
              <PhotoView src={photo}>
                <img src={photo} alt="" width={250} height={250} />
              </PhotoView>
            </PhotoProvider>
          </figure>
          <div className="card-body bg-base-200">
            <h2 className="card-title">{title}</h2>
            {/* <p className="text-sm text-justify py-2">
              {description.slice(0, 100)}...
            </p> */}
            <div className="card-actions justify-start">
              {/* <div className="badge badge-outline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>{' '}
                {duration} hours
              </div> */}
              <div className="badge badge-outline">
                {products.length} products available
              </div>
            </div>
            {/* <div className="badge badge-warning font-extrabold my-3 p-3">
              ৳ {price}
            </div> */}
            <div className="flex align-middle">
              {/* <div className="rating rating-md pt-3">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
              </div> */}
              <div className="card-actions justify-start w-full mt-6">
                <Link to={`/categories/${title}`}>
                  <button className="btn btn-outline btn-primary">
                    Explore →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryCard
