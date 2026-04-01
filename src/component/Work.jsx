import React from 'react';

const Work = () => {
    return (
       <section class="w-full py-24 ">
  <div class=" mx-auto bg-gradient-to-r from-[#682af8] to-[#9022f7]  p-12 md:p-20 text-center shadow-2xl overflow-hidden relative">
    
    <div class=" mx-auto mb-10">
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
        Ready To Transform Your Workflow?
      </h2>
      <p class="text-white/80 text-lg md:text-xl font-light">
        Join thousands of professionals who are already using Digitools to work smarter. 
        Start your free trial today.
      </p>
    </div>

    <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
      <button class="px-8 py-4 bg-white text-[#8B5CF6] font-bold rounded-full hover:bg-slate-50 transition-all shadow-lg active:scale-95">
        Explore Products
      </button>
      
      <button class="px-8 py-4 bg-transparent border-2 border-white/40 text-white font-bold rounded-full hover:bg-white/10 transition-all active:scale-95">
        View Pricing
      </button>
    </div>

    <p class="text-white/60 text-sm font-medium tracking-wide">
      14-day free trial • No credit card required • Cancel anytime
    </p>

  </div>
</section>
    );
};

export default Work;