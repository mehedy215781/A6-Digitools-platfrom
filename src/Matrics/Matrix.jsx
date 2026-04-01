import React from 'react';

const Matrix = () => {
    return (
        <section className=" mx-auto bg-gradient-to-r from-[#414ce7] to-[#8101f9]  py-10 px-6">
  <div className="flex flex-col md:flex-row items-center justify-evenly gap-10 md:gap-4">
    
    <div className="text-center flex flex-col items-center justify-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white">50K+</h2>
      <p className="text-purple-100 text-sm md:text-base mt-2">Active Users</p>
    </div>

    <div className="hidden md:block h-16 w-[2px] bg-white/30 self-center"></div>

    <div className="text-center flex flex-col items-center justify-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white">200+</h2>
      <p className="text-purple-100 text-sm md:text-base mt-2">Premium Tools</p>
    </div>

    <div className="hidden md:block h-16 w-[2px] bg-white/30 self-center"></div>

    <div className="text-center flex flex-col items-center justify-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white">4.9</h2>
      <p className="text-purple-100 text-sm md:text-base mt-2">Rating</p>
    </div>

  </div>
</section>
    );
};

export default Matrix;