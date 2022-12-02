import React from 'react'
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import teslaclone from '../public/assets/projects/teslaclone.png'
import AirbnbImg from '../public/assets/projects/AirbnbImg.png'

function airbnb() {
  return (
     <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={AirbnbImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 '>
          <h2 className='py-2'>Airbnb</h2>
          <h3>React JS </h3>
          <h3>React JS / TypeScript / Firebase</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p className='font-bold'>Project</p>
          <p className='italic underline'>Overview</p>
          <p className='mt-5'>
          This app was built using React JS & Typescript and takes inspiration from the offical Airbnb website. This build demonstrates a range of flex-box layouts and styling components. This Airbnb clone utilizes a fully functional calender and search options which are customizable that also reflects your choice of stay.
          </p>
          <button className='px-8 py-2 mt-4 mr-8'><a href="https://airbnb-clone-z84e-or2rup85u-pontos21.vercel.app/" target="_blank" rel="noreferrer">Demo</a></button>
          <button className='px-8 py-2 mt-4'><a href="https://github.com/pontos21/Airbnb-Clone" target="_blank">Code</a></button>
        </div>
        <div className='col span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> JavaScript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Github
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects" >
           <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  )
}

export default airbnb