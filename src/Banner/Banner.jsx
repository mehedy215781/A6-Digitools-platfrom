import React from 'react';
import dotimg from ".././assets/products/Group 5.png"
import bannerimg from "../assets/products/banner.png"

const Banner = () => {
    return (
      <section className="w-10/12 mx-auto py-12 px-5 md:py-20 flex flex-col md:flex-row items-center gap-10">
  
  <div className="w-full md:w-1/2 space-y-6">
    
    <div className='flex items-center gap-2 bg-[#E1E7FF] rounded-full px-4 py-2 w-fit'>
      <img src={dotimg} className="w-4 h-4 animate-pulse" alt="icon" />
      <p className='text-[#7C3AED] text-sm font-medium'>
        New: AI-Powered Tools Available
      </p>
    </div>

    <h1 className="text-4xl md:text-6xl font-bold text-[#1E3A5F] ">
      Supercharge Your <br /> 
      <span className="text-[#2B548A]">Digital Workflow</span>
    </h1>

    <p className="text-gray-500 text-lg max-w-lg">
      Access premium AI tools, design assets, templates, and productivity 
      software—all in one place. Start creating faster today.
    </p>

    <div className="flex items-center gap-4 pt-4">
      <button className="bg-[#7C3AED] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#6D28D9] transition">
        Explore Products
      </button>
      
      <button className="flex items-center gap-2 border-2 border-[#7C3AED] text-[#7C3AED] px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-[#5502f9] hover:text-white hover:border-[#eee5fc]">
    <span className="text-xl">▷</span> Watch Demo
</button>
    </div>
  </div>

  
  <div className="w-full md:w-2/5">
    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
        <img className="w-full h-auto object-cover" src={bannerimg} alt=""/>
    </div>
</div>
    </section>

    );
};

export default Banner;