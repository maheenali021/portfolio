"use client";
import Image from "next/image";
import Girl from "@/public/Gemini_Generated_Image_gkwx9wgkwx9wgkwx-removebg-preview.png";
import Image1 from "@/public/How-an-AI-Trip-Planner-Is-Making-Tourism-Smarter.webp";
function Project() {
  return (
    <div id="project" className="w-screen min-h-screen lg:h-[2021px] bg-radial from-[#360a4e] from-6% to-[#120517] relative overflow-x-hidden">
      {/* Header */}
      <div className="relative z-10 pt-10 lg:pt-14 lg:pl-14">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white lg:w-[300px] ml-4 lg:ml-0">
          PROJECTS
        </h1>
        <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-[#c492d7] mt-2 lg:w-[370px] ml-4 lg:ml-0">
          AI-Driven Projects & Applications
        </h3>

        {/* Illustration: centered on small, absolute on lg */}
        <div className="w-full flex justify-center lg:block">
          <Image
            src={Girl}
            alt="illustration"
            width={300}
            className="relative lg:absolute lg:top-0 lg:left-[1100px]"
          />
        </div>

        {/* Taglines (center on small, shifted on lg) */}
        <div className="mt-5 ml-4 lg:ml-[1300px] text-center lg:text-left">
          <p className="text-white text-lg lg:text-2xl font-extralight">
            wan't to judge me?
          </p>
          <p className="text-white text-base lg:text-[20px] font-extralight mt-1">
            Look at my project
          </p>
        </div>
      </div>

  
      {/* Projects container: responsive grid; on lg we position it absolutely to match your design */}
      <div className="px-6 lg:px-0 mt-12 lg:mt-0">
        <div className="mx-auto w-full max-w-[1200px] lg:max-w-none lg:w-[1540px]">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-28 lg:absolute lg:top-90  ">

  {/* Card 1 */}
  <div className="w-full lg:w-[550px] bg-black rounded-3xl p-6 lg:h-[683px]">
    <Image
      src={Image1}
      alt="case study image"
      width={500}
      height={500}
      className="rounded-3xl w-full object-cover"
    />
    <p className="text-2xl lg:text-2xl font-bold text-white pt-7">Case study</p>
    <p className="text-white pt-6 text-base lg:text-xl leading-relaxed"> The AI Travel Planner Assistant successfully demonstrates how specialized AI agents can transform complex planning processes 
   into seamless, personalized experiences. The multi-agent architecture, combined with intelligent guardrails, provides a
    robust foundation for reliable travel planning while maintaining flexibility for future enhancements.</p>
    
    {/* Buttons Container */}
    <div className="flex gap-4 mt-16">
      {/* GitHub Button */}
      <button 
        className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex-1"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          // Replace with your actual GitHub URL
          window.open('https://github.com/maheenali021/AI_Travel_Planner_Assistant', '_blank');
        }}
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        GitHub
      </button>
      
      {/* Live Demo Button */}
      <button 
        className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex-1"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          // Replace with your actual live demo URL if different
          window.open('https://aitravelplannerassistant-3t5z9y2t5cskpnpjcdkgxj.streamlit.app/', '_blank');
        }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
        Live Demo
      </button>
    </div>
  </div>



  {/* Card 2 */}
  <div className="w-full lg:w-[550px] bg-black rounded-3xl p-6 lg:h-[683px]">
    <Image
      src={Image1}
      alt="case study image"
      width={500}
      height={500}
      className="rounded-3xl w-full object-cover"
    />
    <p className="text-2xl lg:text-2xl font-bold text-white pt-7">Case study</p>
    <p className="text-white pt-6 text-base lg:text-xl leading-relaxed">
   This project showcases how AI-powered systems can redefine technical education, especially in complex domains like robotics.
    By combining structured learning with contextual AI assistance, the platform offers a more engaging, intuitive, and effective
     way to learn Physical AI and Humanoid Robotics.
    </p>
    
    {/* Buttons Container */}
    <div className="flex gap-6 mt-24">
      {/* GitHub Button */}
      <button 
        className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex-1"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          // Replace with your actual GitHub URL
          window.open('https://github.com/maheenali021/hackathon-01-AI-textbook', '_blank');
        }}
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        GitHub
      </button>
      
      {/* Live Demo Button */}
      <button 
        className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex-1"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          // Replace with your actual live demo URL if different
          window.open('https://maheenali021.github.io/hackathon-01-AI-textbook/chatbot', '_blank');
        }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
        Live Demo
      </button>
    </div>
  </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;

