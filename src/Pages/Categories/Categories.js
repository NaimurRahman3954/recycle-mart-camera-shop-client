// import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import Banner from '../Home/Banner'
import CategoryCard from './CategoryCard'

const Categories = () => {
  const [categories, setCategories] = useState([])
  const [loading, setloading] = useState(true)

  // React Query
  // 📌 facing unusual issue. will look into it later.

  // const { data: categories = [] } = useQuery({
  //   queryKey: ['categories'],
  //   queryFn: () =>
  //     fetch('https://assignment-12-server-sage.vercel.app/categories').then((res) => {
  //       res.json()
  //       setloading(false)
  //     }),
  // })

  useEffect(() => {
    fetch('https://assignment-12-server-sage.vercel.app/categories')
      .then((res) => res.json())
      .then((data) => {
        setCategories(data)
        setloading(false)
      })
  }, [])

  return (
    <div className="container mx-auto my-10 text-center">
      {/* <Banner></Banner> */}
      <>
        {loading ? (
          <button className="btn loading bg-primary my-16">loading</button>
        ) : (
          <div className="flex flex-wrap align-middle justify-center">
            {categories.map((category) => (
              <CategoryCard
                key={category._id}
                category={category}
              ></CategoryCard>
            ))}
          </div>
        )}
      </>
    </div>
  )
}

export default Categories
