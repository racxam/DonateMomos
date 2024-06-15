import React from 'react'

function Username({ params }) {
  return (
    <>

      <div className='cover w-full h-[44vh] bg-red-300 relative'>
        <img
          className='object-cover w-full h-full '
          src="coverimg.jpeg" alt="" />

        <div
          className='absolute bottom-[-18%] left-[50%] border-8 rounded-full translate-x-[-45%] '
        >
          <img
            className='rounded-full'
            src="dp.jpeg" alt="" width={150} height={150} />
        </div>


      </div>

      <div
        className='text-center mt-20 flex flex-col items-center gap-1'
      >
        <div className="font-bold text-xl">

          @{params.username}
        </div>
        <div className='dp-info text-md text-zinc-200'>
          creating Mixed media Art, experiments with techniques and mateia
        </div>
        <div className='dp-moreinfo text-zinc-400'>
          8 posts . $4.52/month
        </div>

      </div>
      <div className="payment flex flex-col items-center lg:flex-row md:justify-start lg:justify-even lg:items-stretch w-[80%] mx-auto gap-20 mt-6 pb-20">
        <div className="supporters bg-slate-800 rounded w-full md:w-[80%] lg:w-[50%] p-5 z-10" >
          <h2 className='font-bold text-lg mb-3'>Supported By:- </h2>
          <hr
            className='text-slate-100 w-[70%]'
          />
          <br />

          <ul className='mx-7'>
            <li className='my-2 flex gap-5 items-center'>
              <img src="avatar.gif" alt="" width={50} className='rounded-full' />
              Mansi donated $500 rs with a message "I support him"</li>
            <li className='my-2 flex gap-5 items-center'>
              <img src="avatar.gif" alt="" width={50} className='rounded-full' />
              Mansi donated $500 rs with a message "I support him"</li>
            <li className='my-2 flex gap-5 items-center'>
              <img src="avatar.gif" alt="" width={50} className='rounded-full' />
              Mansi donated $500 rs with a message "I support him"</li>
            <li className='my-2 flex gap-5 items-center'>
              <img src="avatar.gif" alt="" width={50} className='rounded-full' />
              Mansi donated $500 rs with a message "I support him"</li>
            <li className='my-2 flex gap-5 items-center'>
              <img src="avatar.gif" alt="" width={50} className='rounded-full' />
              Mansi donated $500 rs with a message "I support him"</li>
          </ul>

        </div>
        <div className="payment bg-slate-800 rounded w-full md:w-[80%] lg:w-[50%] z-10 p-5">
          < h2 className='font-bold text-lg mb-3'>Make a Payment:- </h2>
          <hr
            className='text-slate-100 w-[70%]'
          />
          <br />
          <div className='flex flex-col gap-2'>

            <input type="text" className='w-[80%] p-2 rounded-lg text-orange-500 bg-slate-600 mt-3 ml-10 mr-5 placeholder-white' placeholder="Enter Name" />
            <textarea rows={4} className='w-[80%] p-2 rounded-lg text-orange-500 bg-slate-600 mt-3 ml-10 mr-5 placeholder-white' placeholder="Enter Message" />
            <input type="text" className='w-[80%] p-2 rounded-lg text-orange-500 bg-slate-600 mt-3 ml-10 mr-5 placeholder-white' placeholder="Enter Amount" />
            <button
              className='bg-zinc-600 p-2 rounded-lg mx-auto mt-5 px-8
              border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              '
            >Pay Now</button>



          </div>
          <div className="options p-5 px-12 flex justify-center flex-wrap">

          <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Pay 10 </button>
          <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Pay 20 </button>
          <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Pay 50 </button>
          <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Pay 10 </button>
          <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Pay 50</button>

          </div>

        </div>

      </div>
    </>
  )
}

export default Username
