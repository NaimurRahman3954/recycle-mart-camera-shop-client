import React from 'react'
import './MobileApp.css'

const MobileApp = () => {
  return (
    <div className="container mx-auto my-16">
      <div className="flex flex-wrap">
        <div className="basis-1/2 grid place-items-center">
          <h1 className="text-5xl font-bold mb-6">Download our Mobile App</h1>
        </div>
        <div className="basis-1/2">
          <div className="mobile-phone">
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
        </div>
      </div>
    </div>
  )
}

export default MobileApp
