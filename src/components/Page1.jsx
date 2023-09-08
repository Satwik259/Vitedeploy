import React, { useState } from "react";
// import tomatoes from "../assets/img/grilled-tomatoes-1-846X846 3.png";
// import snacks from "../assets/img/grilled-tomatoes-1-846X846 4.png";
// import workoutrecipe from "../assets/img/grilled-tomatoes-1-846X846 5.png";


import left from "../assets/img/Group 320.png"
import right from "../assets/img/Group 321.png"
const Page1 = () => {
  
   

     const handleClick2=()=>{
       const scrollElement = document.getElementById("page2")
      //  scrollElement.scrollLeft=5
      // console.log(scrollElement)
        scrollElement.scrollIntoView()
     }

     const handleClick1=()=>{
      const scrollElement = document.getElementById("page1")

     // console.log(scrollElement)
       scrollElement.scrollIntoView()
    }




  return (
    <>
    <aside  id="page1" className="   p-[50px]  reqs:w-[375px] reqs:h-[1915px] reqs: bg-white ">
      <h1 className=" reqs:ml-[46px]  reqs:mb-[23px] reqs:mt-[132px] reqs:text-[28px] reqs:font-semibold">
        Latest Articles
      </h1>
      <section className="reqs:flex reqs:flex-col reqs:gap-[61px]">
        <div className=" reqs:top-[249px] reqs:h-[484px] reqs:w-[271px]   p-[45px] reqs:rounded-[27px]  border-2 border-black">
          <img
            src={tomatoes}
            alt="tomato"
            className="reqs:w-[204px] reqs:h-[166px]"
          />
          <div className="reqs:w-[236px] reqs:h-[35px]">
          <h2 className="reqs:text-[#0E2368] reqs:text-[16px] reqs:font-bold  reqs:ml-[-3px]">
            Grilled Tomatoes at Home
          </h2>
          </div>
         
          <div className="reqs:w-[213px] reqs:h-[106px]">
          <p className="reqs:text-[12px] font-[400] reqs:tracking-[-0.01em] reqs:leading-[22px]">
            PLorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer.
          </p>
          </div>
       
          <button className="reqs:border-2  reqs:ml-[32px] reqs:mt-[50px]  reqs:w-[118px] reqs:h-[26px] rounded-[27px] reqs:border-[#424961]">
            Read more
          </button>
        </div>
        <div className=" reqs:top-[249px] reqs:h-[484px] reqs:w-[271px]   p-[45px] reqs:rounded-[27px]  border-2 border-black">
          <img
            src={snacks}
            alt="tomato"
            className="reqs:w-[204px] reqs:h-[166px]"
          />
          <div className="reqs:w-[236px] reqs:h-[35px]">
          <h2 className="reqs:text-[#0E2368] reqs:text-[16px] reqs:font-bold reqs:ml-[24px]">
          Snacks for Travel
          </h2>
          </div>
          <div className="reqs:w-[213px] reqs:h-[106px]">
          <p className="reqs:text-[12px] font-[400] reqs:leading-[22px]">
            PLorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer.
          </p>
          </div>
          <button className="reqs:border-2 reqs:ml-[32px]  reqs:mt-[50px]  reqs:w-[118px] reqs:h-[26px] rounded-[27px] reqs:border-[#424961]">
            Read more
          </button>
        </div>
        <div className=" reqs:top-[249px] reqs:h-[484px] reqs:w-[271px]   p-[45px] reqs:rounded-[27px]  border-2 border-black">
          <img
            src={workoutrecipe}
            alt="tomato"
            className="reqs:w-[204px] reqs:h-[166px]"
          />
          <div className="reqs:w-[236px] reqs:h-[35px]">
          <h2 className="reqs:text-[#0E2368] reqs:text-[16px] reqs:font-bold reqs:ml-[9px]">
          Post-workout Recipes
          </h2>
          </div>
          <div className="reqs:w-[213px] reqs:h-[106px]">
          <p className="reqs:text-[12px] font-[400] reqs:leading-[22px]">
            PLorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer.
          </p>
          </div>
          <button className="reqs:border-2  reqs:mt-[50px]  reqs:ml-[32px] reqs:w-[118px] rounded-[27px] reqs:h-[26px]  reqs:border-[#424961]">
            Read more
          </button>
        </div>
      </section>
       <div className="reqs:flex reqs:justify-center reqs:mt-[30px]">
        <img  onClick={()=>handleClick1()}  src={left} alt="left"/>
         <p>1/2</p>
         <img  onClick={()=>handleClick2()} src={right} alt="right"/>
         </div>
    </aside>
    <aside id="page2" className="   p-[50px]  reqs:w-[375px] reqs:h-[1915px] reqs: bg-yellow-500 ">
      <h1 className=" reqs:ml-[46px]  reqs:mb-[23px] reqs:mt-[132px] reqs:text-[28px] reqs:font-semibold">
        Latest Articles
      </h1>
      <section className="reqs:flex reqs:flex-col reqs:gap-[61px]">
        <div className=" reqs:top-[249px] reqs:h-[484px] reqs:w-[271px]   p-[45px] reqs:rounded-[27px]  border-2 border-black">
          <img
            src={tomatoes}
            alt="tomato"
            className="reqs:w-[204px] reqs:h-[166px]"
          />
          <div className="reqs:w-[236px] reqs:h-[35px]">
          <h2 className="reqs:text-[#0E2368] reqs:text-[16px] reqs:font-bold ">
            Grilled Tomatoes at Home
          </h2>
          </div>
         
          <div className="reqs:w-[213px] reqs:h-[106px]">
          <p className="reqs:text-[12px] font-[400] reqs:tracking-[-0.01em] reqs:leading-[22px]">
            PLorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer.
          </p>
          </div>
       
          <button className="reqs:border-2  reqs:ml-[32px] reqs:mt-[50px]  reqs:w-[118px] reqs:h-[26px] rounded-[27px] reqs:border-[#424961]">
            Read more
          </button>
        </div>
        <div className=" reqs:top-[249px] reqs:h-[484px] reqs:w-[271px]   p-[45px] reqs:rounded-[27px]  border-2 border-black">
          <img
            src={tomatoes}
            alt="tomato"
            className="reqs:w-[204px] reqs:h-[166px]"
          />
          <div className="reqs:w-[236px] reqs:h-[35px]">
          <h2 className="reqs:text-[#0E2368] reqs:text-[16px] reqs:font-bold">
            Grilled Tomatoes at Home
          </h2>
          </div>
          <div className="reqs:w-[213px] reqs:h-[106px]">
          <p className="reqs:text-[12px] font-[400] reqs:leading-[22px]">
            PLorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer.
          </p>
          </div>
          <button className="reqs:border-2 reqs:ml-[32px]  reqs:mt-[50px]  reqs:w-[118px] reqs:h-[26px] rounded-[27px] reqs:border-[#424961]">
            Read more
          </button>
        </div>
        <div className=" reqs:top-[249px] reqs:h-[484px] reqs:w-[271px]   p-[45px] reqs:rounded-[27px]  border-2 border-black">
          <img
            src={tomatoes}
            alt="tomato"
            className="reqs:w-[204px] reqs:h-[166px]"
          />
          <div className="reqs:w-[236px] reqs:h-[35px]">
          <h2 className="reqs:text-[#0E2368] reqs:text-[16px] reqs:font-bold">
            Grilled Tomatoes at Home
          </h2>
          </div>
          <div className="reqs:w-[213px] reqs:h-[106px]">
          <p className="reqs:text-[12px] font-[400] reqs:leading-[22px]">
            PLorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer.
          </p>
          </div>
          <button className="reqs:border-2  reqs:mt-[50px]  reqs:ml-[32px] reqs:w-[118px] rounded-[27px] reqs:h-[26px]  reqs:border-[#424961]">
            Read more
          </button>
        </div>
      </section>
      <div className="reqs:flex reqs:justify-center reqs:mt-[30px]">
        <img  onClick={()=>handleClick1()}  src={left} alt="left"/>
         <p>1/2</p>
         <img  onClick={()=>handleClick2()} src={right} alt="right"/>
         </div>
    </aside>
    </>
  );
};

export default Page1;
