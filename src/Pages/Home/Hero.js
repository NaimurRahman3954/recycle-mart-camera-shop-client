import React from 'react'
import Header from '../Shared/Header'
import Banner from './Banner'

const Hero = () => {
  return (
    <div
      className="pb-6 pt-1 -mt-20 h-screen"
      style={{
        backgroundImage: `url(https://i.ibb.co/C1YFsW2/best-low-light-photography-202108-medium.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backdropFilter: '',
      }}
    >
      <div className="container mx-auto my-16">
        <div className="flex flex-wrap justify-center lg:mx-16">
          {/* <div className="basis-1/2"></div> */}
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75">
            <Header></Header>
            <div className="grid place-items-center h-[80vh] text-white">
              <Banner></Banner>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
