import React from 'react';
import Creatimg from "../assets/products/user.png"
import Packimg from "../assets/products/package.png"
import Rocket from "../assets/products/rocket.png"

const Get = () => {
  return (
   <section class="py-20 bg-[#f5f4f4]">
        <div class="max-w-7xl mx-auto px-6 text-center">
            
            <div class="mb-16">
                <h2 class="text-4xl md:text-5xl font-black text-[#131313] mb-4 tracking-tight">
                    Get Started In 3 Steps
                </h2>
                <p class="text-gray-500 text-lg max-w-xl mx-auto">
                    Start using premium digital tools in minutes, not hours.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <div class="relative p-10 border border-gray-100 rounded-[35px] bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                    <div class="absolute top-6 right-6 bg-[#9514FA] text-white text-[10px] font-bold w-7 h-7 flex items-center justify-center rounded-full">
                        01
                    </div>
                    <div class="mt-8 text-center flex flex-col items-center justify-center">
   
                  <div class="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mb-6">
        <            img src={Creatimg} alt="Create Account" class="w-10 h-10 object-contain" />
                   </div>

                      <h3 class="text-2xl font-bold text-[#131313] mb-3">
                          Create Account
                     </h3>
                      <p class="text-gray-500 leading-relaxed text-sm md:text-base max-w-sm">
                        Sign up for free in seconds. No credit card required to get started.
                  </p>
               </div>
                </div>
                <div class="relative p-10 border border-gray-100 rounded-[35px] bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                    <div class="absolute top-6 right-6 bg-[#9514FA] text-white text-[10px] font-bold w-7 h-7 flex items-center justify-center rounded-full">
                        02
                    </div>
                    <div class="mt-8 text-center flex flex-col items-center justify-center">
   
                  <div class="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mb-6">
        <            img src={Packimg} alt="Create Account" class="w-10 h-10 object-contain" />
                   </div>

                      <h3 class="text-2xl font-bold text-[#131313] mb-3">
                          Choose Products
                     </h3>
                      <p class="text-gray-500 leading-relaxed text-sm md:text-base max-w-sm">
                        Browse our catalog and select the tools that fit your needs.
                  </p>
               </div>
                </div> 
                  <div class="relative p-10 border border-gray-100 rounded-[35px] bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                    <div class="absolute top-6 right-6 bg-[#9514FA] text-white text-[10px] font-bold w-7 h-7 flex items-center justify-center rounded-full">
                        03
                    </div>
                    <div class="mt-8 text-center flex flex-col items-center justify-center">
   
                  <div class="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mb-6">
        <            img src={Rocket} alt="Create Account" class="w-10 h-10 object-contain" />
                   </div>

                      <h3 class="text-2xl font-bold text-[#131313] mb-3">
                      Start Creating
                     </h3>
                      <p class="text-gray-500 leading-relaxed text-sm md:text-base max-w-sm">
                        Download and start using your premium tools immediately.
                  </p>
               </div>
                </div> 

               

            </div>
        </div>
    </section>
  );
};

export default Get;