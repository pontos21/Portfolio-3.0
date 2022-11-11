import React from 'react'

function About() {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>
                    I have always had an undersirable thirst for technology and working with computers. In 2021 i started working with HTML & CSS to make some minor edits on my first blog i was operating at the time. What i thought was just afew small edits eventuated into a love for programming.
                </p>
                <p className='py-2 text-gray-600'>
                    Fascinated with how intricate programming can be i was quickly drawn to learn more and expand my knowledge. I started learning JavaScript and was even more enthused with making websites interactive. I am now spending my time building progrects with React Js, Firebase and learning new technologies.
                </p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About