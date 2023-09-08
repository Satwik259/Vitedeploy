import React from "react";
import pizza from "../assets/img/pizza.png";
import logo from "../assets/img/logo.png";
import vector from "../assets/img/Vector.png";
const Hero = () => {
  return (
    <main className=" flex justify-between reqs:flex-col ">
      <section className="  ml-[100px]  flex-col h-[100vh] w-[60vw] p-10 order-2  reqs:h-[45vh] reqs:flex-col reqs:ml-[26%] reqs:mb-[170px]  ">
        <img src={logo} alt="pizza" className="reqs:hidden" />
     <div className="reqs:w-[247px] reqs:ml-[-63px]  h-[130px]">
     <h1 className=" reqs:mt-[75.28px] text-center  reqs:font-bold text-[#0E2368]  reqs:text-[38px] reqs:leading-[46px] ">
          Discover the<br></br> <span className="text-[#E23744]"><span className="reqs:mr-[3.2px]">Best</span></span>
        Food and <br></br> <span >Drinks</span>
        </h1>

     </div>
      <div className="reqs:w-[249px] reqs:h-[36px]">
      <p className="mt-[4vh] reqs:text-[11px] reqs:leading-[18px] reqs:font-normal reqs:ml-[-45px]">
          Naturally made Healthcare Products for the<br></br> better care &
          support of your body.
        </p>
      </div>
       
        <div className=" mt-[8vh] reqs:mt-[6vh] ml-[0px] rounded-[34px]  reqs:w-[28vw]  reqs:h-[6vh] flex justify-center w-[190px] h-[63px] bg-red-600 reqs:ml-[10px]">
          <button className="text-white text-xl font-semibold reqs:text-[13px] reqs:tracking-wide reqs:font-[700px] reqs:leading-[32px]">
            Explore Now!
          </button>
        </div>
      </section>
      <aside className="h-[100vh] w-[50vw] relative order-1 reqs:w-screen reqs:h-[55vh] reqs:flex-col items-center justify-center">
        <img
          src={vector}
          className="z-[1] right-0 reqs:h-[413px]  reqs:w-[378px] h-[100vh] absolute"
        />
        <div className="z-[2] absolute   w-[10vw] border-[3px] p-3.5 border-yellow-300 rounded-[27px] right-[8%] top-4 reqs:right-[5vw] reqs:w-[87.89px]   reqs:h-[31px]">
          <button className=" absolute text-white  reqs:text-[11px] reqs:font-[600px] top-[5px] right-[11px]">
            Get In Touch
          </button>
        </div>

        <img
          src={pizza}
          alt="pizza"
          className=" absolute w-[40vw]    ml-[24px]  h-[100%]  z-0  reqs:ml-0   reqs:h-[413px]  reqs:w-[378px]"
        />
      </aside>
    </main>
  );
};

export default Hero;
