import React from 'react'

const BlogCard2 = () => {
  return (
    <div className="m-5">
      <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg bg-[#201F23]">
        <div className="flex items-center justify-between">
          <span className="text-sm dark:text-gray-600">Nov 24, 2022</span>
          <button className="font-bold rounded btn-error px-3 py-1 my-2">
            Javascript
          </button>
        </div>
        <div className="mt-3">
          <h3 className="text-2xl font-bold hover:underline text-justify">
            How does prototypical inheritance work?
          </h3>
          <p className="mt-2 text-justify">
            Every object with its methods and properties contains an internal
            and hidden property known as [[Prototype]]. The Prototypal
            Inheritance is a feature in javascript used to add methods and
            properties in objects. It is a method by which an object can inherit
            the properties and methods of another object. Traditionally, in
            order to get and set the [[Prototype]] of an object, we use
            Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern
            language, it is being set using __proto__.
          </p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <a
            href="https://www.geeksforgeeks.org/prototypal-inheritance-using-__proto__-in-javascript/"
            className="hover:underline text-blue-700"
          >
            Read more →
          </a>
        </div>
      </div>
    </div>
  )
}

export default BlogCard2
