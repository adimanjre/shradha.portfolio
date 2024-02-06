import React from 'react'

const TaglineCard = () => {
  return (
    <div className='relative py-20 px-10'>
        <div className="card relative z-10 rounded-2xl p-20 backdrop-blur-2xl bg-white/30">
            <h1 className='text-3xl font-bold text-center text-gray-800'>Transforming brands through the <br></br> language of 
                <span className='text-pink-500'> visual storytelling.</span>
            </h1>
        </div>
        <div className="bg-pink-500 top-40 left-10 h-20 w-20 z-0 rounded-full absolute"></div>
        <div className="bg-blue-500 top-20 left-20  h-20 w-20 z-0 rounded-full absolute"></div>
        <div className="bg-indigo-500 right-20 top-20 h-20 w-20 z-0 rounded-full absolute"></div>
    </div>
  )
}

export default TaglineCard