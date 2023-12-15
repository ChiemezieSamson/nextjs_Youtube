import React from 'react'

const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count)
}

const ProductDetailsLayOut = ({children}: {children: React.ReactNode}) => {
  const random = getRandomInt(2)


  if(random === 1) {
    throw new Error("Error loading product")
  }

  return (
    <div>
      {children}
      <h2>Features products</h2>
    </div>
  )
}

export default ProductDetailsLayOut
