"user client ";
import Image from "next/image";
import Vectoer1 from "@/public/Vector 4.png";
import Vectoer2 from "@/public/Vector 3.png";
import Girl from "@/public/Untitled_design-removebg-preview.png";
import Link from "next/link";
import Image1 from "@/public/Gemini_Generated_Image_7gp7gp7gp7gp7gp7-removebg-preview.png"

function home() {
  return (
    <div className="w-screen h-auto min-h-screen  bg-radial from-[#360a4e] from-6% to-[#120517] relative">
      <Image
        src={Vectoer1}
        alt="vectoer"
        width={122.5}
        height={122.5}
        className="  absolute  top-4 left-4 sm:top-6 sm:left-6 lg:ml-[53px] lg:pt-[42.5px]"
      />
      <Image
        src={Vectoer1}
        alt="vectoer"
        width={122.5}
        height={122.5}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-[60px] lg:left-[2087px] rotate-90"
      />
      <Image
        src={Vectoer2}
        alt="vectoer"
        width={122.5}
        height={122.5}
        className=" absolute top-135 sm:top-5 lg:mt-[870px] lg:ml-20"
      />
      <Image
        src={Vectoer2}
        alt="vectoer"
        width={122.5}
        height={122.5}
        className="absolute top-135 right-4 sm:top-6 sm:right-6 lg:top-[890px] lg:left-[2087px] rotate-y-180 "
      />
      <div className="lg:w-[676px] top-50 left-30 lg:h-[499px] lg:top-35 lg:left-30  absolute">
        <h4 className="sm:text-2xl   text-white font-extralight   lg:text-4xl ">
          Welcom To My Portfolio
        </h4>
        <h1 className=" text-4xl sm:text-6xl text-white font-bold lg:text-[130px]">MAHEEN ALI SHAH</h1>
        <p className="text-white font-extrabold hidden lg:block lg:text-2xl mt-10">Engineering autonomous AI agents that collaborate to solve complex problems.</p>
        <p className="text-white text-3xl mt-4 font-light  hidden lg:block">An AI Engineer in Training building and documenting my journey in creating intelligent agents that perceive, reason, and act to solve complex tasks. Exploring the frontier of multi-agent collaboration with Python and modern AI stacks.</p>
      </div>
      
       <Image src={Image1} alt="code image" className="ml-10 mt-50 lg:mt-0 lg:block lg:ml-160 opacity-50 absolute" />
      <Image src={Image1} alt="code image" className=" hidden lg:block lg:mt-120 lg:ml-270 opacity-50 absolute" />
      <Image src={Image1} alt="code image" className="hidden lg:block lg:mt-120 lg:ml-160 opacity-50 absolute" />
      <Image src={Image1} alt="code image" className= "mt-0 hidden lg:block absolute ml-270 opacity-50" />

  
      <Image
        src={Girl}
        alt="Girl "
        width={960}
        className=" w-[400px] sm:w-[400px] lg:w-[1050px] top-60 absolute lg:top-0 lg:left-150 object-contain drop-shadow-[0_0_40px_#532863]"
      />
    
     <div className="absolute flex gap-4 sm:gap-6 lg:gap-10 text-white top-[100px] left-1/2 lg:left-[1750px] -translate-x-1/2 lg:top-[140px]">
  <Link href="#about">
    <button className="w-[90px] sm:w-[100px] lg:w-[120px] h-[45px] sm:h-[50px] lg:h-[59px] text-sm sm:text-lg lg:text-2xl hover:bg-[#412352] rounded-2xl transition">
      ABOUT
    </button>
  </Link>

  <Link href="#project">
    <button className="w-[90px] sm:w-[100px] lg:w-[120px] h-[45px] sm:h-[50px] lg:h-[59px] text-sm sm:text-lg lg:text-2xl hover:bg-[#412352] rounded-2xl transition">
      PROJECT
    </button>
  </Link>

  <Link href="#contact">
    <button className="w-[100px] sm:w-[110px] lg:w-[130px] h-[45px] sm:h-[50px] lg:h-[59px] text-sm sm:text-lg lg:text-2xl hover:bg-[#412352] rounded-2xl transition">
      CONTACT
    </button>
  </Link>
</div>




    </div>
  );
}

export default home;
