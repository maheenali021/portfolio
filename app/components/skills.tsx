"use client";
import Image from "next/image";
import Girl from "@/public/Gemini_Generated_Image_nwf5l2nwf5l2nwf5-removebg-preview.png";

export default function Skill() {
  return (
    <div className="w-screen min-h-screen pt-12 relative flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between px-4 sm:px-8 lg:px-20 overflow-hidden">
      
      {/* Left Section (Text + Skills) */}
      <div className="lg:w-2/3 w-full text-center lg:text-left order-2 lg:order-1">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold">MY SKILLS</h1>
        <h3 className="text-xs sm:text-lg lg:text-2xl font-medium text-[#c492d7] leading-8 mt-2 px-4 sm:px-0">
          My Process Is Effortless in Flow, But Engineered with Precision
        </h3>

        {/* Skill Rows */}
        <div className="mt-8 lg:mt-20 flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-8 lg:gap-16 text-[#c492d7]">
          {["Agent Builder", "MCP", "Chat Kit"].map((skill, i) => (
            <div
              key={i}
              className="w-[120px] sm:w-[150px] lg:w-[180px] h-[55px] sm:h-[70px] lg:h-[90px]
                         rounded-[100px] border-2 border-black bg-[#30173e]
                         flex items-center justify-center text-sm sm:text-lg lg:text-xl font-medium"
            >
              {skill}
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-8 lg:gap-16 text-[#c492d7]">
          {["Python", "Open ai agent SDK", "PromptEngineering" , ].map((skill, i) => (
            <div
              key={i}
              className="w-[120px] sm:w-[150px] lg:w-[180px] h-[55px] sm:h-[70px] lg:h-[90px]
                         rounded-[100px] border-2 border-black bg-[#30173e]
                         flex items-center justify-center text-sm sm:text-lg lg:text-xl font-medium"
            >
              {skill}
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-8 lg:gap-16 text-[#c492d7]">
          {[ "spec driven development", "Claude Code", ].map((skill, i) => (
            <div
              key={i}
              className="w-[120px] sm:w-[150px] lg:w-[180px] h-[55px] sm:h-[70px] lg:h-[90px]
                         rounded-[100px] border-2 border-black bg-[#30173e]
                         flex items-center justify-center text-sm sm:text-lg lg:text-xl font-medium"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className=" lg:order-2 mb-10 lg:mb-0 flex justify-center ">
        <Image
          src={Girl}
          alt="girl"
          className="w-[220px] sm:w-[380px] lg:w-[1100px]   "
          
        />
      </div>
    </div>
  );
}
