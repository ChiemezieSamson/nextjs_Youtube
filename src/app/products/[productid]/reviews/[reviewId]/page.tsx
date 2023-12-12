import React from 'react'

const ReviewDetails = ({params}: {params: {
  reviewId: string,
  productid: string
}}) => {
  return (
    <div>
      Review {params.reviewId} for product {params.productid}
    </div>
  )
}

export default ReviewDetails
