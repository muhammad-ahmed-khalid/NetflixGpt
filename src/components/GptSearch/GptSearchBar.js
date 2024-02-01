import React from 'react'

function GptSearchBar() {
  return (
    <div className='w-1/2 mr-auto ml-auto pt-[10%]'>
      <form onSubmit={(e) => e.preventDefault()} className=' bg-black gird grid grid-cols-12 px-4 rounded-md'>
        <input type="text" placeholder="Search Here..." className='col-span-9 m-3 py-2 px-4 rounded-md'/>
        <button className="bg-red-600 px-6 py-2 rounded text-white  m-3 font-bold h-auto col-span-3">Search</button>
      </form>
    </div>
  )
}

export default GptSearchBar