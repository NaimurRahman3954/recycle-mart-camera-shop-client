import React from 'react'

const Hero = () => {
  return (
    <div
      className="pb-6 pt-1 -mt-20 h-screen"
      style={{
        backgroundImage: `url(https://i.ibb.co/C1YFsW2/best-low-light-photography-202108-medium.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        //   backdropFilter: 'blur(10px)',
      }}
    >
      <div className="container mx-auto my-16">
        {/* <h1 className="text-5xl font-bold mb-16">Download our Mobile App</h1> */}
        <div className="flex flex-wrap justify-center lg:mx-16">
          {/* <div className="basis-1/2"></div> */}
        </div>
      </div>
    </div>
  )
}

export default Hero
