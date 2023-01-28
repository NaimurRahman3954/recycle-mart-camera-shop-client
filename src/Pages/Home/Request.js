import React from 'react'

const Request = () => {
  return (
    <div className="container mx-auto p-0 lg:p-12" id="request">
      <div className="hero-content mx-auto flex-col lg:flex-row-reverse">
        <div className="basis-1/2">
          <img
            src="https://i.ibb.co/GdnFbbF/request-blue.png"
            className="max-w-lg mx-auto "
            alt=""
          />
        </div>
        <div className="text-left basis-1/2">
          <div className="card max-w-lg  mx-auto">
            <div className="card-body">
              <h1 className="text-5xl font-bold mb-6">Request a Product</h1>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <textarea
                  className="textarea textarea-primary h-32"
                  placeholder="product details"
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Request</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Request
