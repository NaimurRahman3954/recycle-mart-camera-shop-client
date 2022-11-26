import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = (props) => {
  const { _id, title, photo, products } = props.category
  return (
    <div>
      <div className="m-5 w-80">
        <div className="card outline outline-1 outline-base-300">
          <figure className="h-72 m-3">
            <img src={photo} alt="" width={250} height={250} />
          </figure>
          <div className="card-body bg-base-200">
            <h2 className="card-title">{title}</h2>
            <div className="card-actions justify-start">
              <div className="badge badge-outline">
                {products.length} products available
              </div>
            </div>
            <div className="card-actions justify-start w-full mt-6">
              <Link to={`/categories/${_id}`}>
                <button className="btn btn-outline btn-primary">
                  Explore →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryCard
