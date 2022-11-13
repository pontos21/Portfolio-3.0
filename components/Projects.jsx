import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Nftinternship from '../public/assets/projects/nftinternship.png'
import netflixImg from '../public/assets/projects/netflixImg.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full scroll-smooth'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Netflix'
            backgroundImg={netflixImg}
            projectUrl='/netflixClone'
            tech='React JS'
          />
          <ProjectItem
            title='Nft - Internship'
            backgroundImg={Nftinternship}
            projectUrl='intership'
            tech='React JS'

          />
          <ProjectItem
            title='G-mail'
            backgroundImg={netflixImg}
            projectUrl='/netflixClone'
            tech='React JS'

          />
          <ProjectItem
            title='Netflix'
            backgroundImg={netflixImg}
            projectUrl='/netflixClone'
            tech='Next JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;