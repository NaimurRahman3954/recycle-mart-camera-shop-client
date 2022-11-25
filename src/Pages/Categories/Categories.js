import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  const [categories, setCategories] = useState([])
  const [loading, setloading] = useState(true)

  // React Query
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 align-middle justify-center">
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
