'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ReviewsPage() {
  const [email, setEmail] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <motion.main
      initial="hidden"
      animate="show"
      exit={{ opacity: 0 }}
      variants={containerVariants}
      className="min-h-[100dvh] bg-background text-foreground pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        
        <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-24">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-4">Validation</p>
          <h1 className="font-serif text-5xl md:text-7xl text-foreground leading-tight mb-8">
            The Waitlist.
          </h1>
          <p className="font-sans text-sm leading-relaxed text-foreground/60">
            Aureya is currently in closed beta. Over 2,148 individuals across India are awaiting the public release of The Cellular Reset.
          </p>
        </motion.div>

        {/* Waitlist Capture */}
        <motion.div variants={itemVariants} className="max-w-xl mx-auto bg-foreground/5 p-8 rounded-2xl border border-foreground/10 mb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <h3 className="font-serif text-2xl mb-2 relative z-10">Secure Your Allocation</h3>
          <p className="font-sans text-xs text-foreground/50 mb-8 relative z-10">Priority access to the first production run.</p>
          <form className="relative z-10 flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent border-b border-foreground/30 px-0 py-3 font-sans text-sm outline-none focus:border-accent transition-colors"
            />
            <button className="bg-foreground text-background px-8 py-3 font-sans text-xs tracking-widest uppercase hover:bg-accent hover:text-white transition-colors">
              Join
            </button>
          </form>
        </motion.div>

        {/* Beta Tester Quotes */}
        <motion.div variants={itemVariants}>
          <h2 className="font-serif text-3xl mb-12 text-center border-b border-foreground/10 pb-6">Early Dispatch Feedback</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "The clarity is undeniable. By day 4, the afternoon crash was entirely gone. It feels like a clean, sustainable drive rather than a caffeine spike.", author: "Arjun M.", location: "Bengaluru", role: "Software Engineer" },
              { quote: "I've tried multiple adaptogens, but the purity here makes a visceral difference. The jar itself is a masterpiece on my desk.", author: "Priya S.", location: "Mumbai", role: "Creative Director" },
              { quote: "My running times have improved and my breathing feels deeper. It's subtle at first, but the compounding effect over a month is profound.", author: "Karan V.", location: "Delhi", role: "Marathon Runner" }
            ].map((review, i) => (
              <div key={i} className="border border-foreground/10 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-6 text-accent">
                    {/* Stars */}
                    {[1,2,3,4,5].map(star => <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>)}
                  </div>
                  <p className="font-serif text-lg leading-relaxed mb-8">"{review.quote}"</p>
                </div>
                <div className="border-t border-foreground/10 pt-4">
                  <p className="font-sans text-sm font-medium">{review.author}</p>
                  <p className="font-sans text-xs text-foreground/50">{review.role} — {review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.main>
  );
}
