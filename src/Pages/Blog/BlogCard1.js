import React from 'react'

const BlogCard1 = () => {
  return (
    <div className="m-5">
      <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg bg-[#201F23]">
        <div className="flex items-center justify-between">
          <span className="text-sm dark:text-gray-500">Nov 24, 2022</span>
          <button className="font-bold rounded btn-error px-3 py-1 my-2">
            React
          </button>
        </div>
        <div className="mt-3">
          <h3 className="text-2xl font-bold hover:underline">
            What are the different ways to manage state in a React application?
          </h3>
          <p className="mt-2 text-justify">
            In React apps, there are at least seven ways to handle the state.
            Let us briefly explore a few of them in this part.
          </p>
          <ol className="list-decimal pl-9 pt-2">
            <li>URL</li>
            <li>Web Storage</li>
            <li>Local State</li>
            <li>Lifted State</li>
            <li>Derived State</li>
          </ol>
        </div>
        <div className="flex items-center justify-between mt-4">
          <a
            href="https://blog.saeloun.com/2021/11/11/8-ways-to-handle-react-state-part1.html"
            className="hover:underline text-warning"
          >
            Read more →
          </a>
        </div>
      </div>
    </div>
  )
}

export default BlogCard1
