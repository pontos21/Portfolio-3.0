import React from 'react'
import Image from 'next/image';
import gym from '../public/assets/skills/gym.jpg'

function About() {
  return (
    <div id="about" className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>
                I have had a longstanding interest in technology and computer systems. In 2021, I began utilizing HTML and CSS to make modifications to my initial blog, which sparked my interest in programming. 
                </p>
                <p className='py-2 text-gray-600'>
                I became captivated by the complexity and potential of programming, leading me to further expand my knowledge by learning JavaScript. This further fueled my passion for creating interactive websites. Though I am most proficient in building front-end applications using HTML, CSS, Javascript, and React, I am a quick learner and can pick up new tech stacks as
                needed. I believe that being a great developer is not using one specific language, but choosing the best tool for the job. Currently, I am dedicating my time to developing projects using React JS, Firebase, and exploring new technologies to enhance my skillset.
                </p>
                <p className='py-2 text-gray-600'>
                    During my off time, i belong to a Greek Pontian Dance Group where we learn and dance immersive war time dances in which we perform all over Melbourne and Australia for events and private functions. I also love my fitness and you will find me spending my free time in the gym.
                </p>
                <p className='py-2 text-gray-600 underline cursor-pointer'><a href="#projects">Check out some of my latest projects</a></p>
            </div>
            <div className='w-auto h-200 m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' src={gym} alt="" />
            </div>
        </div>
    </div>
  )
}

export default About