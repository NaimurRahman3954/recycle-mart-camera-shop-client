import { useEffect, useState } from 'react'

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false)
  const [isAdminLoading, setIsAdminLoading] = useState(true)
  useEffect(() => {
    if (email) {
      fetch(`https://assignment-12-server-sage.vercel.app/users/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setIsAdmin(data.isAdmin)
          setIsAdminLoading(false)
        })
    }
  }, [email])
  //   return [isAdmin]
  return [isAdmin, isAdminLoading]
}

export default useAdmin
