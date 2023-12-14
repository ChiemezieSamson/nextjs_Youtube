"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import "./style.css";
import React, { useState } from 'react'

const navLinks = [
   { name: "Register", href: "/register"},
   { name: "Login", href: "/login"},
   { name: "Forgot Password", href: "/forgot-password"}
]

const AuthLayOut = ({children}: {children: React.ReactNode}) => {
  const [input, setInput] = useState("")
  const pathname = usePathname()
  return (
    <div>
      {children}
      <h2>Features products</h2>
      <div>

      <input type="text" value={input} onChange={(e) => setInput(() => e.target.value)}/>
      </div>
      {navLinks.map((authLink) => {
        const isActive = pathname.startsWith(authLink.href)
        return (
          <Link href={authLink.href} key={authLink.name} className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4" }>{authLink.name}</Link>
        )
      })}
    </div>
  )
}

export default AuthLayOut
