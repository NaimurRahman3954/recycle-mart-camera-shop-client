// import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  const [categories, setCategories] = useState([])
  const [loading, setloading] = useState(true)

  // React Query
  // 📌 facing unusual issue. will look into it later.

  // const { data: categories = [] } = useQuery({
  //   queryKey: ['categories'],
  //   queryFn: () =>
  //     fetch('http://localhost:8000/categories').then((res) => {
  //       res.json()
  //       setloading(false)
  //     }),
  // })

  useEffect(() => {
    fetch('http://localhost:8000/categories')
      .then((res) => res.json())
      .then((data) => {
        setCategories(data)
        setloading(false)
      })
  }, [])

  return (
    <div className="container mx-auto my-10 text-center">
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
