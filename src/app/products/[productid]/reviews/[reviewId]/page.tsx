"use client"
import { notFound } from 'next/navigation'
import React from 'react'

const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count)
}

const ReviewDetails = ({params}: {params: {reviewId: string, productid: string}}) => {
  const random = getRandomInt(2)
  

  if (parseInt(params.reviewId) > 1000) {
    notFound();
  } 

  // if(random === 1) {
  //   throw new Error("Error loading reiview")
  // }

  return (
    <div>
      Review {params.reviewId} for product {params.productid}
    </div>
  )
}

export default ReviewDetails
