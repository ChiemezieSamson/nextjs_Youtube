import { notFound } from 'next/navigation'
import React from 'react'

const ReviewDetails = ({params}: {params: {
  reviewId: string,
  productid: string
}}) => {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  } 
  return (
    <div>
      Review {params.reviewId} for product {params.productid}
    </div>
  )
}

export default ReviewDetails
