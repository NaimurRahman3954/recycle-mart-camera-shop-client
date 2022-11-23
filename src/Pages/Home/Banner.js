import React from 'react'

const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="carousel w-full border-1">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://i.ibb.co/q0p5DQt/1-1.png"
              className=" max-w-sm mr-0 lg:mr-16"
              alt=""
            />
            <div className="text-left pl-24">
              <h1 className="text-5xl font-bold">
                Computer-delivered IELTS Mock Test
              </h1>
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
              src="https://i.ibb.co/w6Fr2VX/2-1.png"
              className=" max-w-sm  mr-0 lg:mr-16"
              alt=""
            />
            <div className="text-left ml-24">
              <h1 className="text-5xl font-bold">
                Complete IELTS Preparation Mentorship Program
              </h1>
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
              src="https://i.ibb.co/rx9BcwP/3-1.png"
              className=" max-w-sm  mr-0 lg:mr-16"
              alt=""
            />
            <div className="text-left ml-24">
              <h1 className="text-5xl font-bold">
                IELTS Listening Preparation Mentorship Program
              </h1>
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
              src="https://i.ibb.co/7yDf68Y/4-1.png"
              className=" max-w-sm  mr-0 lg:mr-16"
              alt=""
            />
            <div className="text-left ml-24">
              <h1 className="text-5xl font-bold">
                IELTS Reading Preparation Mentorship Program
              </h1>
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
