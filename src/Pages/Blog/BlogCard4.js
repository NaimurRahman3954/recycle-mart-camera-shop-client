import React from 'react'

const BlogCard4 = () => {
  return (
    <div className="m-5 mb-12">
      <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-base-200">
        <div className="flex items-center justify-between">
          <span className="text-sm dark:text-gray-500">Nov 24, 2022</span>
          <button className="font-bold rounded btn-error px-3 py-1 my-2">
            Server
          </button>
        </div>
        <div className="mt-3">
          <h3 className="text-2xl font-bold hover:underline">
            React vs Angular vs Vue?
          </h3>
          <p className="mt-2 text-justify">
            React offers a Getting Started guide that should help one set up
            React in about an hour. The documentation is thorough and complete,
            with solutions to common issues already present on Stack Overflow.
            React is not a complete framework and advanced features require the
            use of third-party libraries. This makes the learning curve of the
            core framework not so steep but depends on the path you take with
            additional functionality. However, learning to use React does not
            necessarily mean that you are using the best practices.
          </p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <a
            href="https://www.codeinwp.com/blog/angular-vs-vue-vs-react/"
            className="hover:underline text-blue-700"
          >
            Read more →
          </a>
        </div>
      </div>
    </div>
  )
}

export default BlogCard4
