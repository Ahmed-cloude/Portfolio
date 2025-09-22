'use client'
import { useState } from 'react'
import NavBar from '../../navbar/page'
import { FaLeftLong, FaRightLong, FaArrowRight } from 'react-icons/fa6';
import { FaGithub   } from 'react-icons/fa';
import Image from 'next/image';
const ProjectData ={
    counter:0,
    project:[
        {
            number:'01',
            title:"Front-End Project1",
            discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum praesentium,",
            lang:"Html, css, Js",
            photo:<Image src='/images/photo_2025-09-17_15-36-20.jpg' alt="add Photo" width={500} height={200}></Image>
        },
        {
            number:'02',
            title:"Front-End Project2",
            discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum praesentium,",
            lang:"Html, css, Js",
            photo:<Image src='/images/photo_2025-09-18_15-48-57.jpg' alt="add Photo" width={500} height={200}></Image>
        },
        {
            number:'03',
            title:"Front-End Project3",
            discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum praesentium,",
            lang:"Html, css, Js",
            photo:<Image src='/images/photo_2025-09-19_18-08-22.jpg' alt="add Photo" width={500} height={200}></Image>
        },
        {
            number:'04',
            title:"Front-End Project4",
            discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum praesentium,",
            lang:"Html, css, Js",
            photo:<Image src='/images/photo_2025-09-17_15-36-20.jpg' alt="add Photo" width={500}  height={200}></Image>
        },
        {
            number:'05',
            title:"Front-End Project5",
            discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum praesentium,",
            lang:"Html, css, Js",
            photo:<Image src='/images/photo_2025-09-17_15-36-20.jpg' alt="add Photo" width={500} height={200}></Image>
        },
    ]
}
{/* <FaAlignRight /> */}
const ProjectCreater =(ele)=>{
    return (
        <div className=' w-[40%] min-h-[300px] text-white max-[820px]:w-[90%] '>
            <div className='text-7xl'>{ProjectData.project[ele].number}</div>
            <div className='text-2xl py-2'>{ProjectData.project[ele].title}</div>
            <div className='text-sm py-2'>{ProjectData.project[ele].discription}</div>
            <div className='text-green-700 py-2'>{ProjectData.project[ele].lang}</div>
            <hr className='py-2'/>
            <div className='inline-block py-2 bg-green-500 p-3 mx-3 rounded-full hover:bg-gray-700 cursor-pointer '><FaArrowRight /></div>
            <div className='inline-block py-2 bg-green-500 p-3 rounded-full hover:bg-gray-700 cursor-pointer '><FaGithub /></div>
        </div>
    )
}
const ProjectCreater2=(ele)=>{
    return (
        <div className='h-[85%] '>{ProjectData.project[ele].photo}</div>
    )
}

const page = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [counter,setCounter]=useState(0)
    return (
        <div className='font-mono max-[820px]:h-[120vh]'>
            <NavBar />
            <div className='min-h-[100vh] bg-teal-950 flex items-center justify-center flex-col max-[820px]:flex-wrap  max-[820px]:h-[130vh]'>
                <div className='flex justify-between w-[800px] max-[820px]:flex-wrap max-[820px]:w-[95%] max-[820px]:justify-center'>
                    {ProjectCreater(counter)}
                    <div className=' w-[55%] min-h-[300px] max-[820px]:flex max-[820px]:flex-col-reverse max-[560px]:w-[90%]  '>
                        {ProjectCreater2(counter)}
                        <div className='text-white flex justify-end cursor-pointer gap-2' >
                            <p className='bg-green-500 p-2 mt-3'  onClick={()=>counter===0? setCounter(ProjectData.project.length-1):  setCounter(counter-1)  }><FaLeftLong /></p> 
                            <p className='bg-green-500 p-2 mt-3' onClick={()=>counter===ProjectData.project.length-1 ? setCounter(0):  setCounter(counter+1)}> <FaRightLong /> </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default page
