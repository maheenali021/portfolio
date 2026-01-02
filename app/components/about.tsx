"user client ";
import Image from "next/image";
import girl from "@/public/Gemini_Generated_Image_3qe2wt3qe2wt3qe2-removebg-preview.png";
function about() {
  return (

    <div id= "about" className=" w-screen h-auto font-bold lg:text-4xl relative">
      <h1 className="pl-[53px] pt-[121px] text-2xl sm:text-3xl lg:text-5xl">ABOUT ME</h1>

      <Image src={girl} alt="girl" width={831} className="absolute left-30 sm:w-[550px] sm:left-60 lg:w-[831px] lg:left-300 " />

      <h1 className=" text-xl left-30 sm:left-80 lg:text-2xl lg:left-320 absolute">Want to know about me?</h1>

      <div className=" w-screen h-auto lg:h-[645px]   mt-55 bg-radial from-[#360a4e] from-6% to-[#120517]">

        <p className="text-sm w-[200px] sm:text-sm sm:w-[400px] lg:w-[1000px] lg:ml-90 lg:text-3xl text-white font-light lg:pt-25 text-center">
          I’m an aspiring AI Engineer with a passion for building the next
          generation of intelligent, self-directed systems that think, learn,
          and evolve. My journey began with a simple curiosity about how
          machines could make decisions — and it has since transformed into a
          mission to design AI agents that can truly understand, adapt, and
          assist.
        </p>

        <p className="text-sm w-[200px] sm:text-sm sm:w-[400px] lg:w-[1000px] lg:ml-90 lg:text-3xl text-white font-light pt-6  text-center">
          To me, AI is not just about automation — it’s about enhancing human
          creativity. I believe the future belongs to systems that work with
          people, not just for them. Every project I take on is an opportunity
          to explore how technology can be both functional and emotionally
          intelligent.
        </p>

        <p className="text-sm w-[200px] sm:text-sm sm:w-[400px] lg:w-[1000px] lg:ml-90 lg:text-3xl text-white font-light pt-6 text-center">
          My ultimate goal is to become a creative AI builder, designing
          adaptive systems that connect innovation with empathy and intelligence
          with imagination.
        </p>
      </div>
    </div>
  );
}

export default about;
