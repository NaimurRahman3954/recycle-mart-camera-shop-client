import React from 'react'

const Loading = () => {
  return (
    <div class="flex justify-center items-center">
      {/* <div
        class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
        role="status"
      >
        <span class="visually-hidden">...</span>
      </div> */}
      <button className="btn loading bg-primary my-16">loading</button>
    </div>
  )
}

export default Loading
