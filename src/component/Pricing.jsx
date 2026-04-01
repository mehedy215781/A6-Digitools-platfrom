import React from 'react';

const Pricing = () => {
    return (
        <div>
            <section class="bg-white py-20 px-4">
  <div class="text-center mb-16">
    <h1 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h1>
    <p class="text-slate-500 text-lg">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
  </div>

  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
    
    <div class="bg-[#F8F9FA] border border-slate-100 rounded-3xl p-8 flex flex-col h-full shadow-sm">
      <h3 class="text-2xl font-bold text-slate-800">Starter</h3>
      <p class="text-slate-500 mb-6">Perfect for getting started</p>
      <div class="mb-8">
        <span class="text-4xl font-bold">$0</span><span class="text-slate-400">/Month</span>
      </div>
      <ul class="space-y-4 mb-10 flex-grow text-slate-600">
        <li class="flex items-center gap-3"> ✓Access to 10 free tools</li>
        <li class="flex items-center gap-3"> ✓Basic templates</li>
        <li class="flex items-center gap-3">✓ Community support</li>
        <li class="flex items-center gap-3">✓ 1 project per month</li>
      </ul>
      <button class="w-full py-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold rounded-2xl transition-all">
        Get Started Free
      </button>
    </div>

    <div class="relative bg-gradient-to-b from-[#743ef0] to-[#9333ea] rounded-3xl p-8 flex flex-col h-[105%] text-white shadow-2xl ring-4 ring-[#8B5CF6]/20">
      <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C7] text-[#D97706] text-sm font-bold px-4 py-1 rounded-full shadow-md">
        Most Popular
      </div>
      <h3 class="text-2xl font-bold">Pro</h3>
      <p class="opacity-80 mb-6">Best for professionals</p>
      <div class="mb-8">
        <span class="text-4xl font-bold">$29</span><span class="opacity-70">/Month</span>
      </div>
      <ul class="space-y-4 mb-10 flex-grow">
        <li class="flex items-center gap-3">✓ Access to all premium tools</li>
        <li class="flex items-center gap-3">✓ Unlimited templates</li>
        <li class="flex items-center gap-3">✓ Priority support</li>
        <li class="flex items-center gap-3">✓ Unlimited projects</li>
        <li class="flex items-center gap-3">✓ Cloud sync</li>
        <li class="flex items-center gap-3">✓ Advanced analytics</li>
      </ul>
      <button class="w-full py-4 bg-white text-[#692bf9] hover:bg-slate-50 font-bold rounded-2xl transition-all shadow-lg">
        Start Pro Trial
      </button>
    </div>

    <div class="bg-[#F8F9FA] border border-slate-100 rounded-3xl p-8 flex flex-col h-full shadow-sm">
      <h3 class="text-2xl font-bold text-slate-800">Enterprise</h3>
      <p class="text-slate-500 mb-6">For teams and businesses</p>
      <div class="mb-8">
        <span class="text-4xl font-bold">$99</span><span class="text-slate-400">/Month</span>
      </div>
      <ul class="space-y-4 mb-10 flex-grow text-slate-600">
        <li class="flex items-center gap-3">✓ Everything in Pro</li>
        <li class="flex items-center gap-3">✓ Team collaboration</li>
        <li class="flex items-center gap-3">✓ Custom integrations</li>
        <li class="flex items-center gap-3">✓ Dedicated support</li>
        <li class="flex items-center gap-3">✓ SLA guarantee</li>
        <li class="flex items-center gap-3">✓ Custom branding</li>
      </ul>
      <button class="w-full py-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold rounded-2xl transition-all">
        Contact Sales
      </button>
    </div>

  </div>
</section>
        </div>
    );
};

export default Pricing;