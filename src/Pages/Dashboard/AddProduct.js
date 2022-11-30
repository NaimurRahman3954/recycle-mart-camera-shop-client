import { format } from 'date-fns'
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Contexts/Usercontext'

const AddProduct = () => {
  const { user } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const imageHostKey = process.env.REACT_APP_imgbb_key
  const navigate = useNavigate()
  const date = format(new Date(), 'PP')

  const handleProduct = (data) => {
    const image = data.image[0]
    const formData = new FormData()
    formData.append('image', image)
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`

    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())

      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url)
          const product = {
            name: data.name,
            photo: imgData.data.url,
            location: data.location,
            resalePrice: data.resalePrice,
            originalPrice: data.originalPrice,
            category: data.category,
            yearOfUse: data.yearOfUse,
            condition: data.condition,
            postTime: date,
            sellersName: user.displayName,
            verified: false,
          }

          fetch('http://localhost:8000/products', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `bearer ${localStorage.getItem('accessToken')}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result)
              toast.success(`${data.name} is added successfully`)
              navigate('/dashboard/myproducts')
            })
        }
      })
  }

  return (
    <div>
      <Toaster></Toaster>
      <h1 className="text-5xl font-bold mt-12 text-center">Add a Product!</h1>
      <div className="p-7 mx-auto w-full">
        <form onSubmit={handleSubmit(handleProduct)}>
          <div className="flex flex-col lg:flex-row flex-wrap w-full">
            {/* left half */}
            <div className=" basis-1/2 p-6">
              <div className="form-control w-full mt-3">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  {...register('name', {
                    required: 'Name is Required',
                  })}
                  className="input input-bordered  w-full"
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div className="form-control w-full mt-3">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  type="text"
                  {...register('location', {
                    required: 'Location is Required',
                  })}
                  className="input input-bordered  w-full"
                />
                {errors.location && (
                  <p className="text-red-500">{errors.location.message}</p>
                )}
              </div>
              <div className="form-control w-full mt-3">
                <label className="label">
                  <span className="label-text">Resale Price</span>
                </label>
                <input
                  type="number"
                  {...register('resalePrice', {
                    required: 'Resale Price is Required',
                  })}
                  className="input input-bordered  w-full"
                />
                {errors.resalePrice && (
                  <p className="text-red-500">{errors.resalePrice.message}</p>
                )}
              </div>
              <div className="form-control w-full mt-3">
                <label className="label">
                  <span className="label-text">Original Price</span>
                </label>
                <input
                  type="number"
                  {...register('originalPrice', {
                    required: 'Original Price is Required',
                  })}
                  className="input input-bordered  w-full"
                />
                {errors.originalPrice && (
                  <p className="text-red-500">{errors.originalPrice.message}</p>
                )}
              </div>
            </div>
            {/* right half */}
            <div className="basis-1/2 p-6">
              <div className="form-control w-full mt-3">
                <label className="label">
                  <span className="label-text">Product Category</span>
                </label>
                <select
                  {...register('category')}
                  className="select  input-bordered  w-full"
                >
                  <option value="dslr">DSLR Camera</option>
                  <option value="mirrorless">Mirrorless Camera</option>
                  <option value="polaroid">Polaroid Camera</option>
                  <option value="movieCamera">Movie Camera</option>
                  <option value="actionCamera">Action Camera</option>
                  <option value="vrCamera">360 VR Camera</option>
                </select>
                {errors.category && (
                  <p className="text-red-500">{errors.category.message}</p>
                )}
              </div>
              <div className="form-control w-full mt-3">
                <label className="label">
                  <span className="label-text">Years of Use</span>
                </label>
                <input
                  type="number"
                  {...register('yearOfUse', {
                    required: 'Years of Use is Required',
                  })}
                  className="input input-bordered  w-full"
                />
                {errors.yearOfUse && (
                  <p className="text-red-500">{errors.yearOfUse.message}</p>
                )}
              </div>
              <div className="form-control w-full mt-3">
                <label className="label">
                  <span className="label-text">Product Condition</span>
                </label>
                <select
                  {...register('condition')}
                  className="select  input-bordered  w-full"
                >
                  <option value="excellent">Excellent</option>
                  <option value="good">Good</option>
                  <option value="fair">Fair</option>
                </select>
                {errors.condition && (
                  <p className="text-red-500">{errors.condition.message}</p>
                )}
              </div>
              <div className="form-control w-full mt-3">
                <label className="label">
                  {' '}
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="file"
                  {...register('image', {
                    required: 'Photo is Required',
                  })}
                  className="input input-bordered p-0 h-auto w-full"
                />
                {errors.image && (
                  <p className="text-red-500">{errors.image.message}</p>
                )}
              </div>
            </div>
          </div>

          <input
            className="btn btn-success mt-4 mx-6"
            value="Add Product"
            type="submit"
          />
        </form>
      </div>
    </div>
  )
}

export default AddProduct
