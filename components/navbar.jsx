"use client"
import React from 'react'
import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react"
import { useState } from 'react';
const navbar = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const { data: session } = useSession();
  console.log(session);
  
  return (

    <nav className="bg-zinc-950 text-white flex justify-between px-4 h-20 items-center border-b sticky top-0 z-20 ">
      <Link
      href={"/"}
      >
      <div className="logoside flex flex-row justify-center items-center gap-1 mx-8">
        <img 
        src="icon.gif" alt="" width={30} />
        <div className="logo font-bold text-2xl">Donate Momos! </div>
      </div>
      </Link>
      {/* <ul className="flex flex-row justify-between gap-4 mx-12">
        <li>Home</li>
        <li>About us</li>
        <li>Projects</li>
        <li>Signup</li>
        <li>Buy me a momo</li>
      </ul> */}

      <div className='relative'>

        {session ? <>


          <button
            onClick={() => {
              setShowDropDown(!showDropDown)
            }}
            onBlur={()=>{
              setTimeout(() => {
                setShowDropDown(false)
              }, 50);
            }}
            id="dropdownId" dataDropdown-toggle="dropdownId" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">{session.user.name} <svg className="w-2.5 h-2.5 ms-3" area-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>


          <div id="dropdown" className={`z-10 ${showDropDown ? "" : "hidden"} bg-white divide-y absolute right-0 divide-gray-100 rounded-lg shadow w-30 sm:w-44 dark:bg-gray-700`}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownId">
              <li>
                <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
              </li>
              
              <li>
                <Link href={`${session.user.name.split(" ")[0]}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile </Link>
              </li>
              <li>
                <Link onClick={()=>{ signOut({ callbackUrl: '/login' }) 
                

                }
                
              } href="/login" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
              </li>
            </ul>
          </div>
        </> :

          <Link
            href={"/login"}
          >
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Login
              </span>
            </button>
          </Link>




        }
      </div>


    </nav>
  )
}

export default navbar
