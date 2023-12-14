"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const OrderProduct = () => {
  const router = useRouter()
  const handleClick = () => {
    console.log("placing your order");
    router.push("/")
    router.back()
    router.forward()
    router.replace("/")
    router.refresh()
  }
  return (
    <div>
      <h1>Order product</h1>
      <button type='button' onClick={handleClick}>Place Order</button>
    </div>
  )
}

export default OrderProduct


