import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import nftinternship from '../public/assets/projects/nftinternship.png'

function nftMarketplace() {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={nftinternship}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 '>
          <h2 className='py-2'>NFT - Marketplace</h2>
          <h3>React JS </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p className="font-semibold">Project</p>
          <p className="italic underline">Overview:</p>
          <p className="mt-5">
            This app was built using React JS and takes inspiration from the evergrowing and emerging world of NFT collections & crypto. This build demonstrates a range of techniques including fetching data from an API, creation of prop based components, dynamically rending information and id and page/url routing.
          </p>
          <button className='px-8 py-2 mt-4 mr-8'><a target="_blank" rel="noreferrer" href="https://paul-serafim-internship.vercel.app/">Demo</a></button>
          <button className='px-8 py-2 mt-4'><a target="_blank" rel="noreferrer" href="https://github.com/pontos21/paul-serafim-internship">Code</a></button>
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
  );
}

export default nftMarketplace;