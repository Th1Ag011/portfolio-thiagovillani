import React from 'react'
import {FaGithub, FaLinkedin,} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";


const Contatoss = () => {
  return (
    <div name='contato' className=" w-full  h-screen  flex flex-col items-center justify-center">
    <h1 className="  sm:text-5xl text-4xl font-bold  text-[#bccdd7] border-b-4  border-[#618bccdd7192] inline">
      {" "}
      Contato{" "}
    </h1>
    <form
      action="https://formsubmit.co/thiagovm016@gmail.com" method="POST"
      className="flex flex-col items-start justify-center my-10"
    >
      <input
        type="text"
        placeholder=" Digite seu nome."
        name="name" 
        className="bg-[#ffffff] font-mono lg:w-[600px] w-[400px]  my-2 h-[50px] rounded-md"
      />
      <input
        type="email"
        placeholder=" Digite seu email."
        name="email"
        required
        className="bg-[#ffffff]  font-mono lg:w-[600px] w-[400px] my-2 h-[50px] rounded-md"
      />
      <input
        type="text"
        placeholder="Digite uma mensagem..."
        name="message"
        required
        className="bg-[#ffffff] my-2 pb-20 px-1 h-[150px] lg:w-[600px] text-gray-400 w-[400px] font-mono rounded-md"
      />  
      <input type="hidden" name="_next" value="https://forms-sended.vercel.app" />
      <button className="bg-[#bae6fd] font-normal  h-[40px] my-2 py-2 lg:w-[600px] w-[400px] text-center rounded-sm">
        Enviar
      </button>
    </form>

<div className='md:flex lg:hidden flex flex-wrap h-[70px] max-w-[600px] justify-between items-end list-none'> 

<a href="https://www.linkedin.com/in/thiago-villani-marinho/" target= 'blank' className='px-4  text-[#ffffff] hover:scale-105 duration-300'>
<FaLinkedin size={50} />
</a>

<a href="https://www.canva.com/design/DAFGIrzEpv0/J5Cj4Ga_XjIE7gfMW0j1Mg/view?utm_content=DAFGIrzEpv0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target= 'blank' className='px-4  text-[#ffffff] hover:scale-105 duration-300'>
<BsFillPersonLinesFill size={50} />
</a>

<a href="mailto:thiagovm016@gmail.com" target= 'blank' className='px-4  text-[#ffffff] hover:scale-105 duration-300'>
<HiOutlineMail size={50} />
</a>

<a href="https://forms-sended-1.vercel.app" target= 'blank' className='px-4  text-[#cecece] hover:scale-105 duration-300'>
<FaGithub size={50} />
</a>

</div>  

</div>
  )
}

export default Contatoss