import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="carousel w-full border-1">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="hero-content mx-auto flex-col lg:flex-row-reverse">
            <img
              src="https://i.ibb.co/b1337KS/1-dslr.png"
              className=" max-w-sm mr-0 lg:mr-16"
              alt=""
            />
            <div className="text-left px-9 lg:pl-24">
              <h1 className="text-5xl font-bold">DSLR Camera</h1>
              <p className="py-6">
                Discover a wide range of DSLR Cameras including Canon, Nikon,
                Sony at best price in Bangladesh.
              </p>
              <Link to="/categories">
                <button className="btn btn-primary">Explore</button>
              </Link>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle btn-outline">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle btn-outline">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="hero-content mx-auto flex-col lg:flex-row-reverse">
            <img
              src="https://i.ibb.co/XJpPVmZ/2-mirrorless.png"
              className=" max-w-sm  mr-0 lg:mr-16"
              alt=""
            />
            <div className="text-left px-9 lg:pl-24">
              <h1 className="text-5xl font-bold">Mirrorless Camera</h1>
              <p className="py-6">
                Welcome to our guide to the best mirrorless cameras you can buy
                in 2022, including our picks from Canon, Sony, Nikon. Fujifilm
                and more.
              </p>
              <Link to="/categories">
                <button className="btn btn-primary">Explore</button>
              </Link>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle btn-outline">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle btn-outline">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="hero-content mx-auto flex-col lg:flex-row-reverse">
            <img
              src="https://i.ibb.co/VSF4wGR/3-polaroid.png"
              className=" max-w-sm  mr-0 lg:mr-16"
              alt=""
            />
            <div className="text-left px-9 lg:pl-24">
              <h1 className="text-5xl font-bold">Polaroid Camera</h1>
              <p className="py-6">
                Find Best Instant Camera Price In Bangladesh 2022 at Recycle
                Mart. Buy Instant Camera Online with Best Instant Camera at Low
                Price. ✓EMI Installment.
              </p>
              <Link to="/categories">
                <button className="btn btn-primary">Explore</button>
              </Link>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle btn-outline">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle btn-outline">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div className="hero-content mx-auto flex-col lg:flex-row-reverse">
            <img
              src="https://i.ibb.co/5WS3nSp/4-movie-camera.png"
              className=" max-w-sm  mr-0 lg:mr-16"
              alt=""
            />
            <div className="text-left px-9 lg:pl-24">
              <h1 className="text-5xl font-bold">Movie Camera</h1>
              <p className="py-6">
                Best cinema cameras in 2022 · 1. Sony FX6 · 2. Canon EOS C300
                Mark III · 3. Blackmagic Ursa Mini Pro 12K · 4. Blackmagic
                Design URSA Mini Pro G2
              </p>
              <Link to="/categories">
                <button className="btn btn-primary">Explore</button>
              </Link>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle btn-outline">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle btn-outline">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
