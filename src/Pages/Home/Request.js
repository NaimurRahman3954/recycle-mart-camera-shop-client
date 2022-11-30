import React from 'react'

const Request = () => {
  return (
    <div className="container mx-auto p-0 lg:p-12" id="request">
      {/* <h3>This is about me</h3> */}
      <div className="hero-content mx-auto flex-col lg:flex-row-reverse">
        <div className="basis-1/2">
          <img
            src="https://i.ibb.co/GdnFbbF/request-blue.png"
            className="max-w-lg mx-auto "
            alt=""
          />
        </div>
        <div className="text-left basis-1/2">
          <div className="card max-w-lg bg-base-100 mx-auto">
            <div className="card-body">
              <h1 className="text-5xl font-bold mb-6">Request a Product</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product</span>
                </label>
                <textarea
                  className="textarea textarea-primary"
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
