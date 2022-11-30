import { useEffect, useState } from 'react'

const useToken = (email) => {
  const [token, setToken] = useState('')
  useEffect(() => {
    if (email) {
      fetch(`https://assignment-12-server-sage.vercel.app/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.accessToken) {
            localStorage.setItem('accessToken', data.accessToken)
            // setToken(data.accessToken)
            //triggering infinite loop 🛑
          }
        })
    }
  }, [email])
  return [token]
}

export default useToken
