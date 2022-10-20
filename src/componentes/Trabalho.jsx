import React from 'react';
import WorkImg from "../pictures/trabalho2.jpg";

const Trabalho = () => {
  return (
    <div
    name="trabalhos"
    className="w-full md:h-screen text-gray-300 "
  >
    <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center  w-full h-full">
      <div className="py-20 text-center">
        <p className="lg:mt-10 mt-64 sm:text-5xl text-4xl font-bold  text-[#b4cddc] border-b-4  border-[#98c4de] inline">
          Trabalhos
        </p>

      </div>

      {/*Container*/}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/*grid items*/}
        <div
          style={{ backgroundImage: `url('${WorkImg}')` }}
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
        >
          {/*hover efeito*/}

          <div className=" pt-4 opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold text-white tracking-wider  ">
              Projeto Html e Css
            </span>

            <div className="pt-8 text-center">
              <a href="/">
                <button className=" rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Demo{" "}
                </button>
              </a>
              <a href="/">
                <button className=" rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  {" "}
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url('${WorkImg}')` }}
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
        >
          {/*hover efeito*/}

          <div className=" pt-4 opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold text-white tracking-wider  ">
              Projeto Html e Css
            </span>

            <div className="pt-8 text-center">
              <a href="/">
                <button className=" rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Demo{" "}
                </button>
              </a>
              <a href="/">
                <button className=" rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  {" "}
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
        {/*grid items*/}
        <div
          style={{ backgroundImage: `url('${WorkImg}')` }}
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
        >
          {/*hover efeito*/}

          <div className=" pt-4 opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold text-white tracking-wider  ">
              Projeto Html e Css
            </span>

            <div className="pt-8 text-center">
              <a href="/">
                <button className=" rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Demo{" "}
                </button>
              </a>
              <a href="/">
                <button className=" rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  {" "}
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
        {/*grid items*/}
        <div
          style={{ backgroundImage: `url('${WorkImg}')` }}
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
        >
          {/*hover efeito*/}

          <div className=" pt-4 opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold text-white tracking-wider  ">
              Projeto Html e Css
            </span>

            <div className="pt-8 text-center">
              <a href="/">
                <button className=" rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Demo{" "}
                </button>
              </a>
              <a href="/">
                <button className=" rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  {" "}
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
        {/*grid items*/}
        <div
          style={{ backgroundImage: `url('${WorkImg}')` }}
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
        >
          {/*hover efeito*/}

          <div className=" pt-4 opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold text-white tracking-wider  ">
              Projeto Html e Css
            </span>

            <div className="pt-8 text-center">
              <a href="/">
                <button className=" rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Demo{" "}
                </button>
              </a>
              <a href="/">
                <button className=" rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  {" "}
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
        {/*grid items*/}
        <div
          style={{ backgroundImage: `url('${WorkImg}')` }}
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
        >
          {/*hover efeito*/}

          <div className=" pt-4 opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold text-white tracking-wider  ">
              Projeto Html e Css
            </span>

            <div className="pt-8 text-center">
              <a href="/">
                <button className=" rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Demo{" "}
                </button>
              </a>
              <a href="/">
                <button className=" rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  {" "}
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
 
  )
  
}

export default Trabalho


