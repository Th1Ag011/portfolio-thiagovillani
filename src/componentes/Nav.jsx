import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineCloseSquare} from 'react-icons/ai'
import Logo from "../pictures/logo.png";
import {FaGithub, FaLinkedin,} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link} from 'react-scroll'

const Nav = () => {
    
    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav); 

  return (
    <div name='nav' className=' text-gray-200 flex justify-between items-center h-24  w-full '>
        <div className='fixed justify-between items-center w-full h-24  z-20 px-4 flex  bg-[#202024]'>
        <div className='z-10 w-32 mx-5  '> 
        <img  src={Logo} alt="React Logo" /> </div> 
       
       {/*menu*/}

        <ul className=' bg-transparent  right-0 hidden md:flex '>
        <Link to="inicio" smooth={true} duration={500}> 
        <li className='p-4 hover:scale-110 duration-200 '>Inicio</li>        
        </Link>
        <Link to="sobre" smooth={true} duration={500}> 
        <li className='p-4 hover:scale-110 duration-200 '>Sobre</li>        
        </Link>
        <Link to="habilidades" smooth={true} duration={500}> 
        <li className='p-4 hover:scale-110 duration-200 '>Habilidades</li>        
        </Link>
        <Link to="trabalhos" smooth={true} duration={500}> 
        <li className='p-4 hover:scale-110 duration-200 '>Trabalhos</li>        
        </Link>
        <Link to="contato" smooth={true} duration={500}> 
        <li className='p-4 hover:scale-110 duration-200'>Contato</li>        
        </Link>
        </ul>
        </div>
          
          {/*butao hamburger */}
           
        <div className='w-full mx-4 flex justify-end '>
        <div onClick={handleNav} className='md:hidden z-30 fixed  '> 
            {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineCloseSquare size={20}/>}
            
        </div>
        </div>   

         {/*Mobile menu*/}

      <div
        className={
          !nav
            ? 'hidden'
            : 'md:hidden fixed left-0 top-24 w-[60%] h-full border-r z-10  border-r-[#3c3c41b3] bg-[#202024d8] duration-500' 
        }
      >
            <ul className='pt-24 uppercase ' >
            <Link to="inicio" onClick={handleNav} smooth={true} duration={500}>    
             <li className='p-4 hover:bg-[#3c3c41b3] '>Inicio</li></Link>
            <Link to="sobre" onClick={handleNav} smooth={true} duration={500}>    
             <li className='p-4 hover:bg-[#3c3c41b3]  '>Sobre</li></Link>
            <Link to="habilidades" onClick={handleNav} smooth={true} duration={500}>    
             <li className='p-4 hover:bg-[#3c3c41b3] '>Habilidades</li></Link>
            <Link to="trabalhos" onClick={handleNav} smooth={true} duration={500}>    
             <li className='p-4 hover:bg-[#3c3c41b3]  '>Trabalhos</li></Link>
            <Link to="contato" onClick={handleNav} smooth={true} duration={500}>    
             <li className='p-4 hover:bg-[#3c3c41b3]  '>Contato</li></Link>
            </ul> 
        
        </div>

         {/*icones redesociais*/}

        <div className="hidden lg:flex fixed flex-col top-[35%] left-2">
        <ul>
          <li className="w-[155px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#4c6790]">
            <a
              href="https://www.linkedin.com/in/thiago-villani-marinho/" target= 'blank'
              className="flex justify-between px-5 items-center w-full text-gray-300"
            >
              Linkedin <FaLinkedin size={25} />{" "}
            </a>
          </li>
          <li className="w-[155px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              href="https://github.com/Th1Ag011" target= 'blank'
              className="flex justify-between px-5 items-center w-full text-gray-300"
            >
              Github <FaGithub size={25} />{" "}
            </a>
          </li>
          <li className="w-[155px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ffffff]">
            <a
              href='mailto:thiagovm016@gmail.com ' target= 'blank'
              className="flex justify-between px-5 items-center w-full text-gray-700"
            >
              Email <HiOutlineMail size={25} />{" "}
            </a>
          </li>
          <li className="w-[155px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#808080]">
            <a
              href="https://www.canva.com/design/DAFGIrzEpv0/J5Cj4Ga_XjIE7gfMW0j1Mg/view?utm_content=DAFGIrzEpv0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target= 'blank'
              className="flex justify-between px-5 items-center w-full text-gray-300"
            >
              Curriculo <BsFillPersonLinesFill size={25} />{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav