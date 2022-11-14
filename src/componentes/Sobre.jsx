import React from 'react'
import Pc from "../pictures/pc.webp";

const Sobre = () => {
  return (
    <div name='sobre' className=' border lg:justify-start justify-center mx-auto  max-w-[1600px] px-4 flex h-screen  items-center '>
        <div className=' hidden  2xl:flex  mx-44  '>
           <img className='  my-4 w-[500px]' src={Pc} alt="pc" />
        </div>
        <div >
            <h1 className=' sm:text-5xl text-4xl font-bold  text-[#b4cddc] border-b-4 dark:text-[#445f99] dark:border-[#445f99] border-[#98c4de] inline'> Sobre </h1>
            <p className=' text-[#bae6fd] py-6 md:text-4xl text-3xl flex font-bold max-w-[700px] dark:text-[#445f99]'> Desnvolvedor <h2 className='dark:text-[#445f99] text-[#bae6fd] px-3'>  Web </h2>  </p>
            <p className='max-w-[520px] text-start md:text-xl  text-lg text-[#d4d4d8] font-mono dark:text-[#454546]'>  Estou iniciando na area de desevenvolvedor web, possuo entre minhas habilidades uma boa comunicação com as pessoas, sou esforçado e tenho grande disposição para aprender coisas novas.
              Entrertanto possuo conhecimento previo em HtmL, Css/Tailwind, Sql, C#, JavaScript/react, estou atualmente com o principal objetivo de buscar o meu primeiro trabalho como Desenvolvedor web.</p>
        </div>



    </div>
  )
}

export default Sobre