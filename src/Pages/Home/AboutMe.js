import React from 'react'

const AboutMe = () => {
  return (
    <div className="container mx-auto p-0 lg:p-12" id="about-me">
      {/* <h3>This is about me</h3> */}
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://i.ibb.co/r3x0zpy/me-1.png"
          className="max-w-lg"
          alt=""
        />
        <div className="text-left p-10">
          <h1 className="text-5xl font-bold">About Me</h1>
          <p className="py-6">
            Hi! My name is Naimur Rahman. I'll help you prepare for your IELTS
            exam. I'll teach you all the tips and tricks you need to know in
            order to ace the test. I have also developed country's first
            computer-delivered mock test exactly like British Council so that
            you can be ready and feel comfortable in your final text.
          </p>
          <button className="btn btn-primary">Explore Services</button>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
