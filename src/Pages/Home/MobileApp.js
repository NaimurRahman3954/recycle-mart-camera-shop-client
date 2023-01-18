import React from 'react'
import './MobileApp.css'

const MobileApp = () => {
  return (
    <div
      className="pb-6 pt-1 my-72 h-72"
      style={{
        backgroundImage: `url(https://i.ibb.co/vY6f8pf/background.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }}
    >
      <div className="container mx-auto my-48">
        <h1 className="text-5xl font-bold mb-16 -mt-[420px]">
          Download our Mobile App 📲
        </h1>
        {/* <div className="flex flex-wrap justify-center lg:mx-16"> */}
        {/* <div className="basis-1/2"> */}
        <div className="mobile-phone bg-white">
          <div className="brove">
            <span class="speaker"></span>
          </div>
          <div className="screen grid place-items-center gap-0">
            <img
              src="https://sites.google.com/site/idontgetitbutton/_/rsrc/1444103808278/home/blog/untitledpost/appstorebadges.png"
              alt=""
              className="w-4/5 mx-auto"
            />
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default MobileApp
