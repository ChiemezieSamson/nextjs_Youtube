import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Link href={"/blog"}>Blog</Link>
      <Link href={"/products"}>Product</Link>
     Welcome to Home Page
    </div>
  )
}

export default Home
