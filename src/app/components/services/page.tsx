import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import NavBar from '../../navbar/page'

export default async function Services(){
    await new Promise((res)=>{
        setTimeout(()=>{
            res("delay...")
        },1500)
    })
    return (
        <div className=' flex  bg-teal-950 min-h-[100vh] '>
            <NavBar />
            <div className='flex justify-around items-center gap-y-3 flex-wrap bg-teal-950  w-[60%] m-auto  font-mono max-[700px]:w-[80%] max-[500px]:pb-[100px]'>
                <div className=' w-[47%] h-[200px] border-b-[2px] border-green-700  shadow-xl shadow-green-700 hover:shadow-red-200 max-[700px]:w-[100%] max-[700px]:mt-[120px] '>
                    <div className='flex justify-between'>
                        <span className='text-5xl font-bold p-3 text-white'>01</span>
                        <FontAwesomeIcon icon={faArrowCircleRight} className='w-[40px] h-[40px] m-3 text-green-700 rotate-[45deg] hover:rotate-[0deg] duration-[0.5s] cursor-pointer text-4xl'></FontAwesomeIcon>
                    </div>
                    <div className='text-3xl text-white text-center' > WEB DEVELOPER</div>
                    <p className='pl-3 pt-3 text-white'>- Lorem ipsum dolor sit amet consectetur  </p>
                </div>
                <div className=' w-[47%] h-[200px] border-b-[2px] border-green-700  shadow-xl shadow-green-700 hover:shadow-red-200 max-[700px]:w-[100%] max-[700px]:pt-5'>
                    <div className='flex justify-between'>
                        <span className='text-5xl font-bold p-3 text-white'>02</span>
                        <FontAwesomeIcon icon={faArrowCircleRight} className='w-[40px] h-[40px] m-3 text-green-700 rotate-[45deg] hover:rotate-[0deg] duration-[0.5s] cursor-pointer text-4xl'></FontAwesomeIcon>
                    </div>
                    <div className='text-3xl text-white text-center' > UI/UX</div>
                    <p className='pl-3 pt-3 text-white'>- Lorem ipsum dolor sit amet consectetur  </p>
                </div>
                <div className=' w-[47%] h-[200px] border-b-[2px] border-green-700  shadow-xl shadow-green-700 hover:shadow-red-200 max-[700px]:w-[100%] max-[700px]:pt-5'>
                    <div className='flex justify-between'>
                        <span className='text-5xl font-bold p-3 text-white'>03</span>
                        <FontAwesomeIcon icon={faArrowCircleRight} className='w-[40px] h-[40px] m-3 text-green-700 rotate-[45deg] hover:rotate-[0deg] duration-[0.5s] cursor-pointer text-4xl'></FontAwesomeIcon>
                    </div>
                    <div className='text-3xl text-white text-center' > SEO</div>
                    <p className='pl-3 pt-3 text-white'>- Lorem ipsum dolor sit amet consectetur  </p>
                </div>
                <div className=' w-[47%] h-[200px] border-b-[2px] border-green-700  shadow-xl shadow-green-700 hover:shadow-red-200 max-[700px]:w-[100%] max-[700px]:p-5 '>
                    <div className='flex justify-between'>
                        <span className='text-5xl font-bold p-3 text-white'>04</span>
                        <FontAwesomeIcon icon={faArrowCircleRight} className='w-[40px] h-[40px] m-3 text-green-700 rotate-[45deg] hover:rotate-[0deg] duration-[0.5s] cursor-pointer text-4xl'></FontAwesomeIcon>
                    </div>
                    <div className='text-3xl text-white text-center' > WEB DEVELOPER</div>
                    <p className='pl-3 pt-3 text-white'>- Lorem ipsum dolor sit amet consectetur  </p>
                </div>
            </div>
        </div>
    )
}


