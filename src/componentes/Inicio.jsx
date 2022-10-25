import React from 'react';
import Typed from 'react-typed';
import { Link} from 'react-scroll'

const Inicio = () => {
  return (
    <div className='text-white mx-auto h-screen' name='inicio'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#64748b] text-4xl font-bold '> Ola, meu nome é</p>
        <h1 className=' my-2 text-[#bae6fd] md:text-6xl  sm:text-5xl text-4xl font-bold md:py-3'> Thiago Villani Marinho.</h1>
        <div>
            <p className=' text-[#64748b]  md:text-4xl sm:text-4xl text-xl  font-bold '>  E sou um Desenvolvedor web.  </p>
            <p className='text-[#bae6fd] font-bold  md:text-2xl text-xl my-1'> Possuo conhecimento 
            <Typed className='text-[#bae6fd] mx-1 font-bold text-2xl'
            strings={['em Html' , ' em Css / Tailwind' ,' em C# / Sql', ' basico em Javascript / React']}
            typeSpeed={120}
            backSpeed={160}
            loop
            />
            </p>
            <Link to="trabalhos" smooth={true} duration={500}> 
             <button className=' border-2 my-6 mx-auto px-10 py-3 flex items-center hover:bg-[#64748b] hover:border-[#64748b]'> 
              Ver Trabalhos      
        </button> </Link> 
        
        </div>
        </div>
    </div>
  )
}

export default Inicio