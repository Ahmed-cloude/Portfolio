import React from 'react'

const page = () => {
    return (
        <div className=' w-[90%] m-auto' >
            <div className='flex'>
                <div>
                    <div className='circle h-[25px] w-[25px] rounded-full bg-green-700 mr-2 '></div>
                    <div className='line bg-white h-[100%] w-[2px] ml-[11px]'></div>
                </div>
                <div className='mb-3 w-[95%] min-h-[50px] font-mono border-t-1 border-green-500 shadow-xl/30 shadow-green-500'>
                    <p className='text-3xl text-green-500 py-2 px-3'>name</p>
                    <div className='text-white pl-6'>
                        <p>- I am AHMED ALSALMO </p>
                        <p>- Software Engineer</p>
                        <p>- Frontend Developer</p>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <div>
                    <div className='h-[25px] w-[25px] rounded-full bg-green-700 mr-2 '></div>
                    <div className='bg-white h-[100%] w-[2px] ml-[11px]'></div>
                </div>
                <div className='mb-3 w-[95%] min-h-[50px] font-mono border-t-1 border-green-500 shadow-xl/30 shadow-green-500'>
                    <p className='text-3xl text-green-500 py-2 px-3'>Added value to the team</p>
                    <div className='text-white pl-6'>
                        <p>- Problem solving, creativity, speed of implementation </p>
                        <p>- Simplify complex ideas, focus on user experience</p>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <div>
                    <div className='h-[25px] w-[25px] rounded-full bg-green-700 mr-2 '></div>
                    {/* <div className='bg-white h-[100%] w-[2px] ml-[11px]'></div> */}
                </div>
                <div className='mb-3 w-[95%] min-h-[50px] font-mono border-t-1 border-green-500 shadow-xl/30 shadow-green-500'>
                    <p className='text-3xl text-green-500 py-2 px-3'>About Me</p>
                    <div className='text-white pl-6'>
                        <p>- I follow the development of front-end development technologies and everything related to them </p>
                        <p>- Communicating with stakeholders to achieve requirements and having a high ability to communicate with team members</p>
                    </div>
                </div>
            </div>

            
            
        </div>
    )
}

export default page
