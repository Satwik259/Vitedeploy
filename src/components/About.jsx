import React from "react";

const About = () => {
  return (
    <div className=" reqs:w-screen reqs:h-[100vh]  reqs:bg-[#F0F1F7] reqs:flex reqs:flex-col reqs:justify-center">
      <div className="reqs:h-[235px] reqs:w-[275px] reqs:ml-[58px]  reqs:flex reqs:flex-col reqs:justify-between ">
        <h1 className="reqs:text-center reqs:text-[26px] reqs:font-semibold reqs:leading-[35px] reqs:ml-[2px]">
          About Us
        </h1>
        <div className="reqs:w-[275px] reqs:h-[138px] reqs:ml-[8px] reqs:mb-[-17px]">
          <p className="reqs:font-[400px] reqs:text-[11px] reqs:leading-[21px] ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. t has survived not
            only five centuries.
          </p>
        </div>
        <div className="reqs:flex reqs:ml-[5px] reqs:justify-center reqs:mb-[10px]  relative">
          <button className=" reqs:rounded-full absolute reqs: bg-[#E23744] reqs:border-2 reqs:h-[25px] reqs:w-[96px] reqs:top-[2px] reqs:text-white reqs:font-semibold   text-[11px]  reqs: border-red-700  ">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
