// links
import Link from "next/link"

// icons
import {RiLinkedinBoxFill, RiGithubFill} from 'react-icons/ri'
import {MdEmail } from 'react-icons/md'

const Socials = () => {
  return <div className=" flex  items-center gap-x-5 text-lg">
    <Link href={'https://www.linkedin.com/in/wendellpires/'} target='_blank'  className=" hover:text-accent transition-all duration-300"><RiLinkedinBoxFill size={25}/> </Link>
    <Link href={'https://github.com/wpsdigital'} target='_blank'  className=" hover:text-accent transition-all duration-300"><RiGithubFill size={25}/> </Link>
    <Link href={'mailto:wendellpires@hotmail.com'}  className=" hover:text-accent transition-all duration-300"><MdEmail size={25}/> </Link>
    
  </div>;
};

export default Socials;
