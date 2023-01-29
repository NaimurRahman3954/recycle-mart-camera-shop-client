import React from 'react'
import BlogCard1 from './BlogCard1'
import BlogCard2 from './BlogCard2'
import BlogCard3 from './BlogCard3'

const Blog = () => {
  return (
    <div className="mt-5">
      {/* 📌📌 Blog 1 */}
      <BlogCard1></BlogCard1>
      {/* 📌📌 Blog 2 */}
      <BlogCard2></BlogCard2>
      {/* 📌📌 Blog 3 */}
      <BlogCard3></BlogCard3>
      <div className="text-gray-900 m-5">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-base-200">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-600">Nov 24, 2022</span>
            <button className="font-bold rounded btn-error px-3 py-1 my-2">
              Debugging
            </button>
          </div>
          <div className="mt-3">
            <h3 className="text-2xl font-bold hover:underline">
              What is a unit test? Why should we write unit tests?
            </h3>
            <p className="mt-2 text-justify">
              The main objective of unit testing is to isolate written code to
              test and determine if it works as intended. Unit testing is an
              important step in the development process, because if done
              correctly, it can help detect early flaws in code which may be
              more difficult to find in later testing stages.
              <br />
              <br />
              Unit tests save time and money. Usually, we tend to test the happy
              path more than the unhappy path. If you release such an app
              without thorough testing, you would have to keep fixing issues
              raised by your potential users. The time to fix these issues
              could’ve been used to build new features or optimize the existing
              system. Bear in mind that fixing bugs without running tests could
              also introduce new bugs into the system.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <a
              href="https://moduscreate.com/blog/heres-why-you-should-write-unit-tests/"
              className="hover:underline text-blue-700"
            >
              Read more →
            </a>
          </div>
        </div>
      </div>
      {/* 📌📌 Blog 4 */}
      <div className="text-gray-900 m-5 mb-12">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-base-200">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-600">Nov 24, 2022</span>
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
              React in about an hour. The documentation is thorough and
              complete, with solutions to common issues already present on Stack
              Overflow. React is not a complete framework and advanced features
              require the use of third-party libraries. This makes the learning
              curve of the core framework not so steep but depends on the path
              you take with additional functionality. However, learning to use
              React does not necessarily mean that you are using the best
              practices.
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
    </div>
  )
}

export default Blog
