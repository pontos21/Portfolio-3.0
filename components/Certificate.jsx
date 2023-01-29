import React from 'react'

function Certificate() {
  return (
    <div id='certificate' className='w-full scroll-smooth'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Frontend Simplified Bootcamp
        </p>
        <h2 className='py-4'>Certificate of Completion</h2>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <img className='rounded-xl max-w-[900px] px-5 mx-auto' src="https://i.ibb.co/nwdm1m8/certificate-of-completion.png" alt="" />
        </div>
    </div>
  )
}

export default Certificate