import React from 'react'

const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="carousel w-full border-1">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://i.ibb.co/GWTgmFT/1-dslr.png"
              className=" max-w-sm mr-0 lg:mr-16"
              alt=""
            />
            <div className="text-left pl-24">
              <h1 className="text-5xl font-bold">DSLR Camera</h1>
              <p className="py-6">
                I have developed country's first computer-delivered mock test
                exactly like British Council so that you can be ready and feel
                comfortable in your final text.
              </p>
              <button className="btn btn-primary">Learn More</button>
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
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://i.ibb.co/mS00TWs/2-mirrorless.png"
              className=" max-w-sm  mr-0 lg:mr-16"
              alt=""
            />
            <div className="text-left ml-24">
              <h1 className="text-5xl font-bold">Mirrorless Camera</h1>
              <p className="py-6">
                I will guide you throughout your IELTS journey and help you
                achieve the best score that will eventually lead you to a
                successful career.
              </p>
              <button className="btn btn-primary">Learn More</button>
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
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://i.ibb.co/DLTWNRx/3-polaroid.png"
              className=" max-w-sm  mr-0 lg:mr-16"
              alt=""
            />
            <div className="text-left ml-24">
              <h1 className="text-5xl font-bold">Polaroid Camera</h1>
              <p className="py-6">
                I will guide you for your IELTS listening preparation and help
                you achieve the best score that will eventually lead you to a
                successful career.
              </p>
              <button className="btn btn-primary">Learn More</button>
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
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://i.ibb.co/7JBPLns/4-movie-camera.png"
              className=" max-w-sm  mr-0 lg:mr-16"
              alt=""
            />
            <div className="text-left ml-24">
              <h1 className="text-5xl font-bold">Movie Camera</h1>
              <p className="py-6">
                I will guide you for your IELTS reading preparation and help you
                achieve the best score that will eventually lead you to a
                successful career.
              </p>
              <button className="btn btn-primary">Learn More</button>
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
