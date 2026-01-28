"use client";
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { Lock } from "lucide-react";

export default function Home() {
  const [deals, setDeals] = useState([
    { _id: "1", name: "Stripe", value: "$20k Fee-free", description: "Payment processing.", isRestricted: false },
    { _id: "2", name: "AWS", value: "$5k Credits", description: "Cloud hosting.", isRestricted: true }
  ]);

  return (
    <main className="min-h-screen bg-black text-white p-10 md:p-24 font-sans">
      <div className="max-w-6xl mx-auto text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-black tracking-tighter mb-4 italic"
        >
          FOUNDER DEALS.
        </motion.h1>
        <p className="text-zinc-500 text-lg">Exclusive SaaS credits for the next generation of founders.</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {deals.map((deal) => (
          <motion.div 
            key={deal._id}
            whileHover={{ y: -8, boxShadow: "0px 20px 40px rgba(59, 130, 246, 0.15)" }}
            className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-md hover:border-blue-500/50 transition-all group"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="h-12 w-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-500 font-bold text-2xl">
                {deal.name.charAt(0)}
              </div>
              {deal.isRestricted && <Lock size={20} className="text-zinc-500" />}
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">{deal.name}</h3>
            <p className="text-blue-500 font-extrabold text-xl mb-4">{deal.value}</p>
            <p className="text-zinc-400 leading-relaxed mb-8">{deal.description}</p>
            <button className={`w-full py-4 rounded-2xl font-bold text-lg transition-all ${
              deal.isRestricted ? "bg-zinc-800 text-zinc-500" : "bg-white text-black hover:bg-blue-600 hover:text-white"
            }`}>
              {deal.isRestricted ? "Verify to Unlock" : "Claim Now"}
            </button>
          </motion.div>
        ))}
      </div>
    </main>
  );
}