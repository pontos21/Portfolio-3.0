import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { motion } from 'framer-motion'

function Main() {
    const [text, count] = useTypewriter({
        words: [
            "A Front-End Web Developer",
            "Chronically Fuelled By Caffeine ☕️",
            "<CodeIsLife.jsx />"
        ],
        loop: true,
        delaySpeed: 2000,
       }) 

  return (
    <div id="home" className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>
                    LETS'S BUILD SOMETHING TOGETHER
                </p>
                <motion.div
                initial={{
                    opacity: 0, 
                 }}
                 animate={{
                    scale: [1,2,2,3,1],
                    opacity: [0.4, 0.3, 0.4, 0.8, 0.1, 1.0],
                 }}
                 transition={{
                     duration: 2.5
                 }}>
                <h1 className='py-4 text-gray-700'>
                    Hey, Im <span className='text-[#5651e5]'>Paul 👋</span> 
                </h1>
                <div className='animation'>
                    <img className='rounded-full h-32 w-32 mx-auto object-cover transform:scale(0)' src="https://i.ibb.co/X54T7S2/future-goal.jpg" alt="" />
                </div>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1>
                <p className='py-4 text-gray-600 mx-w-[70$] m-auto'>
                    I'm a <span className='text-[#5651e5] font-semibold'>Front-end Software Engineer</span> with a strong passion for building responsive and perfomative web applications with great user experiences that positively impacts the world. <br/>I am currently focused on building responsive front-end web applications. <br/> I live, breathe <span className='text-[#5651e5] font-semibold'>React.</span>
                </p>
                </motion.div>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>
                        <a href="https://www.linkedin.com/in/paul-serafim-9a0605255/" target='_blank'><FaLinkedinIn /></a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300  border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>
                        <a href="https://github.com/pontos21" target='_blank'><FaGithub /></a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300  border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>
                        <a href="#contact"><AiOutlineMail /></a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300  border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>
                        <a href="#contact"><BsFillPersonLinesFill /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main