import Link from 'next/link'
import React from 'react'

const ProductList = () => {
  const productId = 100
  return (
    <div>
      <Link href={"/"}>Home</Link>
      
      <h2>
        <Link href={`products/1`}>ProductId 1</Link>
      </h2>
      <h2>
        <Link href={`products/2`}>ProductId 2</Link>
      </h2>
      <h2>
        <Link href={`products/3`} replace>ProductId 3</Link>
      </h2>
      <h2>
        <Link href={`products/${productId}`}>ProductId {productId}</Link>
      </h2>
    </div>
  )
}

export default ProductList
