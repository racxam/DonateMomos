"use client"
import React from 'react'
import Link from 'next/link';

import { useSession, signIn, signOut } from "next-auth/react"
const navbar = () => {
  const { data: session } = useSession()
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>}
  return (
    
    <nav className="bg-zinc-950 text-white flex justify-between px-4 h-20 items-center border-b ">
      <div className="logoside flex flex-row justify-center items-center gap-1 mx-8">
        <img src="icon.gif" alt="" width={30} />
        <div className="logo font-bold text-2xl">Donate Momos! </div>
      </div>
      <ul className="flex flex-row justify-between gap-4 mx-12">
        <li>Home</li>
        <li>About us</li>
        <li>Projects</li>
        <li>Signup</li>
        <li>Buy me a momo</li>
      </ul>
      <Link
      href={"/login"}
      >
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Login
        </span>
      </button>
      </Link>


    </nav>
  )
}

export default navbar
