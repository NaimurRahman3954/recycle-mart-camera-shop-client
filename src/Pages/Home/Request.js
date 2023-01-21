import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'

const Request = () => {
  return (
    <div className="container mx-auto mb-16 p-0 lg:p-12" id="request">
      <div className="hero-content mx-auto flex-col lg:flex-row-reverse">
        <div className="basis-1/2">
          <Player
            src="https://assets3.lottiefiles.com/packages/lf20_abqysclq.json"
            className="player"
            loop
            autoplay
            // speed={10}
            // direction={-1}
            // style={{ height: '300px', width: '300px' }}
          />
        </div>
        <div className="text-left basis-1/2">
          <div className="card max-w-lg bg-[#201F23] mx-auto">
            <div className="card-body">
              <h1 className="text-5xl font-bold mb-6">Request a Product</h1>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered bg-black"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered bg-black"
                />
              </div>
              <div className="form-control">
                <textarea
                  className="textarea bg-black h-32"
                  placeholder="product details"
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-warning">Request</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Request
