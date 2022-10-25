import React from 'react';
import WorkImg from "../pictures/trabalho2.jpg";
import WorkImg2 from "../pictures/trabalhosql.jpg";
import WorkImg3 from "../pictures/maxshoes.jpg";
import WorkImg4 from "../pictures/formscsharp.jpg";
import WorkImg5 from "../pictures/trabalhando.jpg";

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
              <a href="https://filmes-smoky.vercel.app">
                <button className=" rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Demo{" "}
                </button>
              </a>
              <a href="https://drive.google.com/drive/folders/1n-w5EsLCwXBIGix8msv07KXUX1Z8fkaT?usp=sharing">
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
          style={{ backgroundImage: `url('${WorkImg3}')` }}
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
        >
          {/*hover efeito*/}

          <div className=" pt-4 opacity-0 group-hover:opacity-100">
            <span className="text-1xl font-bold text-white tracking-wider  ">
              Projeto Html/Css & JavaScript
            </span>

            <div className="pt-8 text-center">
              <a href="https://th1ag011.github.io/Maxshoes/">
                <button className=" rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Demo{" "}
                </button>
              </a>
              <a href="https://drive.google.com/drive/folders/1IZ2kN-ROn-mSsMagEz2KeVAIbCUcesAR?usp=sharing">
                <button className=" rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  {" "}
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url('${WorkImg4}')` }}
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
        >
          {/*hover efeito*/}

          <div className=" pt-4 opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold text-white tracking-wider  ">
              Projeto forms C#
            </span>

            <div className="pt-8 text-center">
              <a href="https://lh3.googleusercontent.com/0kUp8E0nGBWNQ0yG9guQxKGM_j1QM_H6y0Ti_m06oOEq9pviak98gFBOYR2NkQQsf0F8kxQ8K0fTOjzbhA0VzsdPI7UtqoQKLa0VuU7kpdvTNQ_FcUQHqhNo0baaQWtdRg8QX05I3-vSw5PaVdCjMS1RUBbVinVXhIQdvjbxsf9nm2i_id-hzZzGyo-cc9CegThgoh29IqWz3J7FvhOeTwv0b8XpP-ZK0Un-4qIoKzaAdm0spjtVEHSa3DrKKHkL1uB2aR5u9Mt1pgFXfza1OuFdtOUgYt4SlNcR5MZwFTYw3WRUxNHdE-Lkn38j1X3ddfMkJL95esHGGzpqnbAaS1MDAAQkOYFpyAUpmRe8AYFdE9txEHZwuCQw7qNgtWzEWQL00SDiBPy9hzsUvfU1KhhhPhcU2brOqsxuM3FMarEwDJOWsHCywpeFZ8vF0jyBP-osKvv8enQl1CosUS-IkQJVlVDqDy8uppqDtVuUA5FScNVivPky8n28HqVPauBNupSdOykb8s3TuWSaCJaQueJEfVRBqHlfWIYriAtCLeNlkFP3E3UcUyG88JiIXr_iUAeejg-FSikci4LwVJ3SPkYCiP9j2pBSCGv8Xr7FWrkZSdEM1_QC1uwcdYlT_fsgc8Wlutl87RIOx6FXKrzLTG-CFYPNjujCCi4ROrwV3NJr_CQiTtpVqbWnYlbYm6980Dqghijh2Is169wIwiBy4kZx18AtrcP6_BZ_zZQaM-ZZvNH4bKC_tHop9J_Mqq9crxiGJ5u-jKdeOzwTS_NmkNKPkTrJNtUiOdEGf009-sA0hY6dmBu0sanTRVBWNgrM8mZzc2gu33wv0wg27HeAdRYuCSRf0RqYoC8JFi6TNs5VNeS1UAdf1t4GmY-NcED7AIx5jMMPFzLAkqxHrofUUa__toZ6KrDfXpxg4r-JHsQTE0S5bD9jFkcp5BqlhzMSujQGgcywDqM2ppaxT2LL5KjiIfDF39300q_Mw5mWJmoaEACqa4rFzgI8KKlOPGPOhVLxL8d1XpDif-qR_2HzCFoPWIPG55f9yR6LzD0DE2G4DdYksF90ggAGV_qDdPk1Ft8B_ZR5zCJNHlrmO5zZ3_SZji39Ywluju93sdvMoDXNCG_QGU_nD_JW1u88TEz-2sefkg=w1030-h718-no?authuser=3">
                <button className=" rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Demo{" "}
                </button>
              </a>
              <a href="https://drive.google.com/file/d/1Xo6p12otDwr2XPD3wzlVx6i2oSrsZZHX/view?usp=sharing">
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
          style={{ backgroundImage: `url('${WorkImg2}')` }}
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
        >
          {/*hover efeito*/}

          <div className=" pt-4 opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold text-white tracking-wider  ">
              Projeto MySQL
            </span>

            <div className="pt-8 text-center">
              <a href="https://photos.app.goo.gl/Tu6x5UunuXWWLJHJ7">
                <button className=" rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Demo{" "}
                </button>
              </a>
              <a   href="https://drive.google.com/file/d/1roXolC6rrLyTxhDcTF3x2mh_QJUAoV63/view?usp=sharing" >
                <button  className=" rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  {" "}
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
        {/*grid items*/}
        <div
          style={{ backgroundImage: `url('${WorkImg5}')` }}
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
        >
          {/*hover efeito*/}

          <div className=" pt-4 opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold text-white tracking-wider  ">
              TRABALHANDO NISSO!!
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
          style={{ backgroundImage: `url('${WorkImg5}')` }}
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
        >
          {/*hover efeito*/}

          <div className=" pt-4 opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold text-white tracking-wider  ">
            TRABALHANDO NISSO!!
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


