"use client";
import Image from "next/image";
import Image2 from "@/public/Gemini_Generated_Image_hm4cb3hm4cb3hm4c-removebg-preview.png";

function Services() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-[#320c3d] via-[#3e135d] to-[#1e0b2c]  relative overflow-hidden px-6 sm:px-10 lg:px-20 py-20">
      {/* Background Glow Elements */}
      <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-[#532863]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-[#532863]/30 rounded-full blur-2xl animate-pulse"></div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white relative z-10">
        SERVICES I PROVIDE
      </h1>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-start justify-between mt-10 relative z-10">
        {/* Text Cards Section */}
        <div className="lg:w-1/2 space-y-8 text-white">
          <div className="bg-white/5 p-6 rounded-2xl border border-[#532863]/30 shadow-lg hover:shadow-[#532863]/50 transition">
            <p className="text-lg sm:text-2xl lg:text-3xl">
              <b><i className="text-[#c7a3e6] ">1. End-to-End Autonomous Workflow Automation</i></b><br />
              Designing and deploying multi-agent systems that automate complex business processes from start to finish, transforming operations into seamless, intelligent workflows.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-[#532863]/30 shadow-lg hover:shadow-[#532863]/50 transition">
            <p className="text-lg sm:text-2xl lg:text-3xl">
              <b><i className="text-[#c7a3e6]">2. Custom Multi-Agent System Architecture</i></b><br />
              Engineering specialized AI agents that collaborate, debate, and solve problems collectively for more insightful outcomes.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-[#532863]/30 shadow-lg hover:shadow-[#532863]/50 transition">
            <p className="text-lg sm:text-2xl lg:text-3xl">
              <b><i className="text-[#c7a3e6]">3. Intelligent Knowledge Management Solutions</i></b><br />
              Building conversational interfaces to your data through vector memory and knowledge graphs that deliver context-aware answers.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-[#532863]/30 shadow-lg hover:shadow-[#532863]/50 transition">
            <p className="text-lg sm:text-2xl lg:text-3xl">
              <b><i className="text-[#c7a3e6]">4. Production-Ready AI Integration & Deployment</i></b><br />
              Deploying cloud-native AI systems that are scalable, resilient, and seamlessly integrated into your existing infrastructure.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center lg:justify-end w-full lg:w-1/2 mt-10 lg:mt-0">
          <Image
            src={Image2}
            alt="AI visualization"
            className="w-[280px] sm:w-[500px] lg:w-[800px] object-contain drop-shadow-[0_0_40px_#532863]"
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
