import React from 'react'

const Contact = () => {
  return (
    <div className="container mx-auto p-0 lg:p-12" id="contact">
      {/* <h3>This is about me</h3> */}
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/34Fk56F/contact-1.png"
          className="max-w-lg"
          alt=""
        />
        <div className="text-left">
          <div className="card max-w-lg bg-base-100">
            <div className="card-body">
              <h1 className="text-5xl font-bold mb-6">Seats are Limited!</h1>
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
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  className="textarea textarea-primary"
                  placeholder="message"
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Join Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
