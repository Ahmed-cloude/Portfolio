// "use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
const icons =()=>{
    return (
        <div className=''>
            <Link href='/components/contact' className='  p-3 rounded-[20px] border border-green-500 border-3  hover:text-white hover:bg-green-500'> Contact me</Link>
            <Link href='' className=' '> <FontAwesomeIcon icon={faGithub} className='text-[26px]  pl-5 pr-2 text-green-500 cursor-pointer hover:text-green-700 max-[640px]:text-xl max-[640px]:px-1'></FontAwesomeIcon> </Link>
            <Link href=''> <FontAwesomeIcon icon={faLinkedin} className='text-[26px] px-2 text-green-500 cursor-pointer hover:text-green-700 max-[640px]:text-xl max-[640px]:px-1'></FontAwesomeIcon> </Link>
            <Link href=''> <FontAwesomeIcon icon={faFacebook} className='text-[26px] px-2 text-green-500 cursor-pointer hover:text-green-700 max-[640px]:text-xl max-[640px]:px-1'></FontAwesomeIcon> </Link>
        </div>
    )
}

export default icons;

