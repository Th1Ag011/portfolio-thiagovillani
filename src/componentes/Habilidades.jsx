import React from 'react'
import Html from "../pictures/html.png";
import CSS from "../pictures/css.png";
import SQL from "../pictures/sql.png";
import csharp from "../pictures/csharp.png"; 
import javascript from "../pictures/javascript.png";
import figma from "../pictures/figma.png";
import react from "../pictures/react.png";
import tailwind from "../pictures/tailwind.png";

const Habilidades = () => {
  return (
    <div name='habilidades' className='w-full h-screen  flex flex-col items-center justify-center '>
     <h1 className='xl:mt-10 mt-24  sm:text-5xl text-4xl font-bold  text-[#bccdd7] border-b-4  border-[#bccdd7] inline'> Habilidades </h1>

     <div className='flex justify-center flex-wrap max-w-[1100px] max-h-[1000px] py-20 '> 

        <div className='flex'> 
            <div className=" flex flex-col mx-8 my-8 w-40  shadow-md shadow-[#141414] hover:scale-105 duration-300">
                <img className="w-20 mx-auto" src={Html} alt="htmlicon" />
                <p className="my-4 text-white mx-auto text-2xl"> HTML</p>
            </div>

            <div className=" flex flex-col mx-8 my-8 w-40 shadow-md shadow-[#141414] hover:scale-105 duration-300">
                <img className="w-20 mx-auto" src={CSS} alt="htmlicon" />
                <p className="my-4 text-white mx-auto text-2xl"> CSS</p>
          </div>
        </div> 
          
        <div className='flex'> 
            <div className=" flex flex-col mx-8  my-8 w-40 shadow-md shadow-[#141414] hover:scale-105 duration-300">
                <img className="w-20 mx-auto" src={csharp} alt="htmlicon" />
                <p className="my-4 text-white mx-auto text-2xl"> C#</p>
            </div>
          
          <div className=" flex flex-col mx-8 my-8 w-40  shadow-md shadow-[#141414] hover:scale-105 duration-300">
                <img className="w-20 mx-auto" src={SQL} alt="htmlicon" />
                <p className="my-4 mx-auto text-white text-2xl"> SQL</p>
          </div>
        </div>

        <div className='flex'> 
             <div className=" flex flex-col mx-8 my-8 w-40  shadow-md shadow-[#141414] hover:scale-105 duration-300">
                <img className="w-20 mx-auto" src={javascript} alt="htmlicon" />
                <p className="my-4 text-white mx-auto text-2xl"> HTML</p>
             </div>

            <div className=" flex flex-col mx-8 my-8 w-40  shadow-md shadow-[#141414] hover:scale-105 duration-300">
                <img className="w-20 mx-auto" src={react} alt="htmlicon" />
                <p className="my-4 text-white mx-auto text-2xl"> CSS</p>
            </div>
        </div>

          <div className='flex'> 
             <div className=" flex flex-col mx-8 my-8 w-40 shadow-md shadow-[#141414] hover:scale-105 duration-300">
                  <img className="w-20 mx-auto" src={tailwind} alt="htmlicon" />
                  <p className="my-4 text-white mx-auto text-2xl"> C#</p>
              </div>
          

             <div className=" flex flex-col mx-8 my-8 w-40 shadow-md shadow-[#141414] hover:scale-105 duration-300">
                <img className="w-20 mx-auto" src={figma} alt="htmlicon" />
                <p className="my-4 mx-auto text-white text-2xl"> SQL</p>
             </div>
          </div>
      </div>







    </div>

  )
}

export default Habilidades