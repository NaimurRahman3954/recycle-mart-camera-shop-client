import React from 'react'
import { useLoaderData, useNavigation } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Loading from '../Shared/Loading'
import CheckoutForm from './CheckoutForm'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK)

const Payment = () => {
  const booking = useLoaderData()
  const navigation = useNavigation()
  const { product, price } = booking

  if (navigation.state === 'loading') {
    return <Loading></Loading>
  }

  console.log('booking data', booking)
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold mt-48">
        Payment for <span className="text-error">{product}</span>
      </h1>
      <p className="text-xl mt-6">
        Please pay <span className="font-bold">৳ {price}</span> for completing
        the order.
      </p>
      <div className="w-full lg:w-1/2 my-12 mx-auto border border-1 border-zinc-800 p-12 py-16 rounded-lg">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  )
}

export default Payment
