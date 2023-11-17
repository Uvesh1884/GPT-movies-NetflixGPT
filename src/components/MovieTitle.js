import React from 'react'

function MovieTitle({ title, overview}) {
  return (
    <div className=' relative py-[8rem] z-[9] px-8 bg-gradient-to-r from-black top-0'>
      <h1 className='font-bold text-white text-5xl mb-10'>{title}</h1>
      <p className='w-1/3 mt-4 text-white'>{overview}</p>
      <div className='mt-6'>
        <button className='bg-white hover:bg-slate-200 font-bold text-black p-2  px-10 mr-4 rounded-md'>Play</button>
        <button className='bg-gray-900 font-bold hover:bg-gray-800  text-white opacity-80 p-2 px-10 rounded-md'>More Info</button>
      </div>
    </div>
  );
};

export default MovieTitle