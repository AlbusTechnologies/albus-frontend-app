import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ShieldCheck, Zap, DollarSign } from 'lucide-react';

// --- Components ---

const EmailCapture = ({ className = '' }) => {
  return (
    <form className={`flex w-full max-w-md border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm focus-within:ring-2 focus-within:ring-black transition-all ${className}`} onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="What's your email?"
        className="flex-grow px-4 py-2 outline-none text-gray-800 placeholder-gray-400"
        required
      />
      <button
        type="submit"
        className="bg-[#D9F827] hover:bg-[#cbeb24] text-black font-medium px-6 py-2 rounded-md transition-colors whitespace-nowrap text-sm flex items-center gap-2"
      >
        Get started for free
      </button>
    </form>
  );
};

const FlowAnimation = () => {
  // Animation variants for the data flow dots
  const duration = 3;

  const leftLineVariant = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: [0, 1, 1],
      opacity: [0, 1, 1],
      transition: {
        duration: duration,
        times: [0, 0.5, 1],
        ease: ["easeInOut", "linear"],
        repeat: Infinity,
        repeatDelay: 0
      }
    }
  };

  const rightLineVariant = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: [0, 0, 1],
      opacity: [0, 0, 1],
      transition: {
        duration: duration,
        times: [0, 0.5, 1],
        ease: ["linear", "easeInOut"],
        repeat: Infinity,
        repeatDelay: 0
      }
    }
  };

  const boxStyle = "bg-white border-2 border-gray-800 rounded-lg p-3 text-center text-sm font-medium shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center h-16 w-32 z-10 relative";

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center font-sans select-none">
      {/* Connecting Lines SVG Layer */}
      <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 672 400" style={{ overflow: 'visible' }}>
        {/* Left Inputs to Center */}
        <motion.path d="M128 80 C 200 80, 200 200, 272 200" fill="transparent" stroke="#E5E7EB" strokeWidth="2" />
        <motion.path d="M128 160 C 200 160, 200 200, 272 200" fill="transparent" stroke="#E5E7EB" strokeWidth="2" />
        <motion.path d="M128 240 C 200 240, 200 200, 272 200" fill="transparent" stroke="#E5E7EB" strokeWidth="2" />
        <motion.path d="M128 320 C 200 320, 200 200, 272 200" fill="transparent" stroke="#E5E7EB" strokeWidth="2" />

        {/* Animated Active Lines (Left) */}
        <motion.path d="M128 80 C 200 80, 200 200, 272 200" fill="transparent" stroke="#111827" strokeWidth="2" initial="hidden" animate="visible" variants={leftLineVariant} />
        <motion.path d="M128 160 C 200 160, 200 200, 272 200" fill="transparent" stroke="#111827" strokeWidth="2" initial="hidden" animate="visible" variants={leftLineVariant} />
        <motion.path d="M128 240 C 200 240, 200 200, 272 200" fill="transparent" stroke="#111827" strokeWidth="2" initial="hidden" animate="visible" variants={leftLineVariant} />
        <motion.path d="M128 320 C 200 320, 200 200, 272 200" fill="transparent" stroke="#111827" strokeWidth="2" initial="hidden" animate="visible" variants={leftLineVariant} />

        {/* Center to Right Outputs */}
        <motion.path d="M400 200 C 472 200, 472 120, 544 120" fill="transparent" stroke="#E5E7EB" strokeWidth="2" />
        <motion.path d="M400 200 C 472 200, 472 280, 544 280" fill="transparent" stroke="#E5E7EB" strokeWidth="2" />

        {/* Animated Active Lines (Right) */}
        <motion.path d="M400 200 C 472 200, 472 120, 544 120" fill="transparent" stroke="#111827" strokeWidth="2" initial="hidden" animate="visible" variants={rightLineVariant} />
        <motion.path d="M400 200 C 472 200, 472 280, 544 280" fill="transparent" stroke="#111827" strokeWidth="2" initial="hidden" animate="visible" variants={rightLineVariant} />
      </svg>

      {/* Layout Grid */}
      <div className="flex items-center justify-between w-full max-w-2xl px-4">
        {/* Inputs Column */}
        <div className="flex flex-col gap-6">
          <motion.div className={boxStyle} whileHover={{ scale: 1.05 }}>Website bookings</motion.div>
          <motion.div className={boxStyle} whileHover={{ scale: 1.05 }}>Text messages</motion.div>
          <motion.div className={boxStyle} whileHover={{ scale: 1.05 }}>Phone calls</motion.div>
          <motion.div className={boxStyle} whileHover={{ scale: 1.05 }}>Emails</motion.div>
        </div>

        {/* Central Processor */}
        <div className="flex items-center justify-center mx-8">
          <motion.div
            className="bg-white border-2 border-black rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] h-32 w-32 flex flex-col items-center justify-center z-20 relative"
            animate={{ boxShadow: ["6px 6px 0px 0px rgba(0,0,0,1)", "2px 2px 0px 0px rgba(0,0,0,1)", "6px 6px 0px 0px rgba(0,0,0,1)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Zap className="w-8 h-8 text-[#D9F827] fill-current mb-2" />
            <span className="font-bold text-xl tracking-tight">Albus</span>
          </motion.div>
        </div>

        {/* Outputs Column */}
        <div className="flex flex-col gap-24">
          <motion.div className={boxStyle} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1 }}>
            More profit
          </motion.div>
          <motion.div className={boxStyle} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.2 }}>
            Less admin time
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Graphic = ({ graphicType }) => {
  const bgClass = "w-full h-full bg-[#EFF6FF] border border-blue-100 rounded-xl flex items-center justify-center relative overflow-hidden group";

  if (graphicType === 'sales') {
    return (
      <div className={bgClass}>
        <div className="w-64 bg-white p-5 rounded-xl border border-gray-200 shadow-lg flex flex-col gap-4 relative z-10 transform scale-75">
          <div className="flex justify-between items-center border-b border-gray-100 pb-3">
            <span className="text-xs font-bold text-gray-800">Booking Details</span>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-[10px] text-gray-500 font-medium uppercase">Name</label>
              <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1.5 text-xs text-gray-800">John Doe</div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] text-gray-500 font-medium uppercase">Service</label>
              <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1.5 text-xs text-gray-800">Plumbing Repair</div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] text-gray-500 font-medium uppercase">Date</label>
              <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1.5 text-xs text-gray-800">Tomorrow, 9:00 AM</div>
            </div>
          </div>
          <button className="w-full bg-[#D9F827] text-black font-bold text-xs py-2.5 rounded hover:bg-[#cbeb24] transition-colors mt-1">
            Pay deposit now
          </button>
        </div>
      </div>
    );
  }
  if (graphicType === 'payment') {
    return (
      <div className={bgClass}>
        <div className="w-64 bg-white p-4 rounded-xl border border-gray-200 shadow-lg flex flex-col gap-3 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              <DollarSign className="w-4 h-4 text-green-600" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-gray-800">Invoice #1024</span>
              <span className="text-[10px] text-red-500 font-medium">Overdue by 2 days</span>
            </div>
          </div>
          <div className="bg-gray-50 p-2 rounded text-[11px] text-gray-600">
            Hi! Just a friendly reminder that your invoice is due.
          </div>
          <button className="w-full bg-black text-white text-xs py-2 rounded hover:bg-gray-800 transition-colors">Auto-send reminder</button>
        </div>
        {/* Abstract decorative circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-50 rounded-full -z-0 opacity-50 animate-pulse"></div>
      </div>
    );
  }
  if (graphicType === 'csr') {
    return (
      <div className={bgClass}>
        <div className="w-64 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-gray-50 px-4 py-2 border-b border-gray-100 flex justify-between items-center">
            <span className="text-[10px] font-bold text-gray-500">INCOMING CALL • 8:02 PM</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <div className="p-4 flex flex-col gap-3">
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-3 h-3 text-blue-600" />
              </div>
              <div className="bg-blue-50 p-2 rounded-tr-lg rounded-br-lg rounded-bl-lg text-[11px] text-blue-900">
                I need a quote for a water heater replacement.
              </div>
            </div>
            <div className="flex items-start gap-2 flex-row-reverse">
              <div className="w-6 h-6 bg-[#D9F827] rounded-full flex items-center justify-center flex-shrink-0">
                <Zap className="w-3 h-3 text-black" />
              </div>
              <div className="bg-gray-100 p-2 rounded-tl-lg rounded-bl-lg rounded-br-lg text-[11px] text-gray-800">
                I can help with that. Checking technician availability now...
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (graphicType === 'financing') {
    return (
      <div className={bgClass}>
        <div className="relative w-56 h-36 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-xl p-4 flex flex-col justify-between text-white group-hover:scale-105 transition-transform duration-500">
          <div className="flex justify-between items-start">
            <div className="w-8 h-5 bg-[#D9F827] rounded opacity-80"></div>
            <ShieldCheck className="w-5 h-5 text-[#D9F827]" />
          </div>
          <div className="text-lg font-mono tracking-widest opacity-80">•••• 4242</div>
          <div className="flex justify-between items-end">
            <div className="flex flex-col">
              <span className="text-[10px] font-medium">John Appleseed</span>
            </div>
            <span className="text-xs font-bold text-[#D9F827]">0% APR</span>
          </div>
        </div>
      </div>
    );
  }
  return <div className={bgClass}></div>;
};

const FeatureBlock = ({ title, copy, graphicType }) => {
  // This component generates the "Blue Square" assets programmatically using CSS/SVG
  // to mimic the clean, illustrative style of Ramp without needing image files.

  return (
    <div className="flex flex-col md:flex-row items-start gap-6">
      {/* Graphic Side */}
      <div className="w-full md:w-1/2 aspect-[4/3]">
        <Graphic graphicType={graphicType} />
      </div>

      {/* Text Side */}
      <div className="w-full md:w-1/2 flex flex-col gap-3">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 leading-tight">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{copy}</p>
      </div>
    </div>
  );
};

// --- Main Page ---

export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white selection:bg-[#D9F827] selection:text-black">

      {/* 1. Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Logo Placeholder */}
            <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="font-semibold text-xl tracking-tight">Albus Technologies</span>
          </div>

          <div className="hidden md:block w-[420px]">
            <EmailCapture size="small" />
          </div>
        </div>
      </header>

      {/* 2. Hero Section (Cream Background) */}
      <section className="bg-[#FFFBF5] pt-20 pb-32 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Left: Copy */}
            <div className="lg:w-5/12 flex flex-col gap-8 text-center lg:text-left">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
                More profit.<br />
                Less work.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Albus autonomously handles calls, bookings, and payments so you can focus on the work. Put your growth on autopilot.
              </p>
              <div className="w-full">
                <EmailCapture className="shadow-md border-gray-300" />
                <p className="text-xs text-gray-400 mt-3 ml-1">No credit card required.</p>
              </div>
            </div>

            {/* Right: Animation */}
            <div className="lg:w-7/12 w-full">
              <FlowAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Value Props Section (Mint Green Background) */}
      <section className="bg-[#F0FDF4] py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
            {/* Prop 1 */}
            <FeatureBlock
              graphicType="sales"
              title="Your website is your newest sales engine"
              copy="Stop relying on expensive Thumbtack and marketplace leads. Albus gives your website an SEO tune-up so the traffic comes rolling in automatically, and lets customers book with a simple form. Collect payments on the spot -- deposit or in full."
            />

            {/* Prop 2 */}
            <FeatureBlock
              graphicType="payment"
              title="Automate payment follow-ups"
              copy="Say goodbye to chasing customers for their payments. Albus will flag the customers with outstanding payments and automatically send professional, personalized reminders."
            />

            {/* Prop 3 */}
            <FeatureBlock
              graphicType="csr"
              title="Never miss a booking with a 24/7 AI CSR"
              copy="Albus AI assistants answer every call, even after hours and weekends. They score and prioritize your leads with Zillow lookups and licensing checks. So you can have lunch or dinner in peace without worrying about dropped revenue."
            />

            {/* Prop 4 */}
            <FeatureBlock
              graphicType="financing"
              title="Offer customers financing"
              copy="Close more jobs and increase ticket sizes with flexible financing with no additional fees. Customers get an instant decision."
            />
          </div>
        </div>
      </section>

      {/* 4. Bottom Signup Area (Light Blue Background) */}
      <section className="bg-[#F0F9FF] py-32">
        <div className="max-w-3xl mx-auto px-4 text-center flex flex-col items-center gap-8">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Ready to Automate Your Growth?</h2>
          <p className="text-lg text-gray-600">Join the leading home services businesses using Albus to scale.</p>

          <div className="w-full max-w-md">
            <div className="bg-white p-2 rounded-xl shadow-lg border border-blue-100">
              <EmailCapture />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Simple Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500">
          © 2025 Albus Technologies. All rights reserved.
        </div>
      </footer>

    </div>
  );
}