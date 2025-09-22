import React from 'react'
import NavBar from '../../navbar/page'
import { FaPhone} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaLocationPin } from 'react-icons/fa6'

const ContactForm =()=>{
    return (
        <div className='bg-gray-700  w-[500px] max-[520px]:w-[95%]  '>
            <div className='text-green-500 text-3xl p-3'>Let`s work together</div>
            <div className='text-white text-sm p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque odit dolore quibusdam minima fugiat officia,</div>
            <form className=' w-[500px] max-[820px]:w-[95%] '>
                <input type='string' className='w-[225px] bg-teal-950 m-2 p-1 text-white focus:outline-none max-[820px]:w-[95%]' placeholder='Firstname' /> 
                <input type='text' className='w-[225px] bg-teal-950 m-2 p-1 text-white focus:outline-none max-[820px]:w-[95%]' placeholder='Lastname'  /> 
                <input type='email' className='w-[225px] bg-teal-950 m-2 p-1 text-white focus:outline-none max-[820px]:w-[95%]' placeholder='Email Address'  /> 
                <input type='text' className='w-[225px] bg-teal-950 m-2 p-1 text-white focus:outline-none max-[820px]:w-[95%]' placeholder='Phone number'  /> 
            </form>
            <form className='w-[500px] max-[520px]:w-[95%] '>
                <input type='text' className='bg-teal-950 m-2 p-1 text-white focus:outline-none w-[95%]' placeholder='service ??' />
                <textarea  className='bg-teal-950 m-2 p-1 text-white focus:outline-none w-[95%] pb-[100px]' placeholder='Write your message' />
            </form>
            <button className='bg-green-500 py-2 px-4 rounded-full m-2 text-white hover:bg-green-300'> send</button>
        </div>
    )
}

const contactInfo =()=>{
    return (
        <div className=' h-[200px] w-[280px]'>
            <div className='flex  items-center'>
                <div className='bg-gray-700 p-3 text-xl text-green-500'>
                    <FaPhone />
                </div>
                <div className='pl-2 text-white '>
                    <p className='text-xs '>Phone</p>
                    <p >+963 953 726 286</p>
                </div>
            </div>
            <div className='flex items-center my-4'>
                <div className='bg-gray-700 p-3 text-xl text-green-500'>
                    <MdEmail />
                </div>
                <div className='pl-2 text-white '>
                    <p className='text-xs '>Email</p>
                    <p >salmoahmad079@gmail.com</p>
                </div>
            </div>
            <div className='flex  items-center'>
                <div className='bg-gray-700 p-3 text-xl text-green-500'>
                    <FaLocationPin />
                </div>
                <div className='pl-2 text-white '>
                    <p className='text-xs '>Address</p>
                    <p >Syria, Lattakia</p>
                </div>
            </div>
        </div>
    )
}

export default async function Contact(){
    await new Promise((res)=>{
        setTimeout(()=>{
            res("delay....")
        },1500)
    })
    return (
        <div className=' min-h-[100vh] bg-teal-950 font-mono max-[830px]:min-h-[150vh]'>
            <NavBar />
            
            <div className='h-screen bg-teal-950 flex items-center justify-center max-[830px]:h-[130vh] '>
                <div className=' w-[800px]  flex justify-between mt-25 max-[570px]:w-[95%] max-[830px]:w-[95%] max-[830px]:flex-wrap max-[830px]:justify-center'>
                    
                    {ContactForm()}
                    {contactInfo()}
                    
                </div>
            </div>
        </div>
    )
}

// const page = () => {
//     return (
//         <div className=' min-h-[100vh] bg-teal-950 font-mono max-[830px]:min-h-[150vh]'>
//             <NavBar />
            
//             <div className='h-screen bg-teal-950 flex items-center justify-center max-[830px]:h-[130vh] '>
//                 <div className=' w-[800px]  flex justify-between mt-25 max-[570px]:w-[95%] max-[830px]:w-[95%] max-[830px]:flex-wrap max-[830px]:justify-center'>
                    
//                     {ContactForm()}
//                     {contactInfo()}
                    
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default page
