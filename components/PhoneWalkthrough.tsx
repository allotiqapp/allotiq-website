"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Screen1Dashboard, Screen2Routes, Screen3Timeline, Screen4Mary } from "./PhoneScreens";

export default function PhoneWalkthrough() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Four even quarters with short cross-fade zones between each.
  const screen1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.25], [1, 1, 0]);
  const screen2Opacity = useTransform(scrollYProgress, [0.2, 0.25, 0.45, 0.5], [0, 1, 1, 0]);
  const screen3Opacity = useTransform(scrollYProgress, [0.45, 0.5, 0.7, 0.75], [0, 1, 1, 0]);
  const screen4Opacity = useTransform(scrollYProgress, [0.7, 0.75, 1], [0, 1, 1]);

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full flex items-start justify-center">
      {/* Sticky Container — stacks phone-over-text on mobile, side-by-side from md up */}
      <div className="sticky top-16 sm:top-20 flex flex-col md:flex-row h-auto md:h-[80vh] w-full max-w-6xl items-center justify-center md:justify-between gap-8 md:gap-0 px-6 lg:px-12">

        {/* Text: Scrolling Text Blocks (order-2 so the phone shows first on mobile) */}
        <div className="relative order-2 md:order-1 w-full md:w-1/2 h-[190px] sm:h-[170px] md:h-full text-center md:text-left">
          <div className="absolute inset-x-0 top-0 md:top-[20%] md:h-full w-full">
            <motion.div
              style={{ opacity: screen1Opacity }}
              className="absolute top-0 w-full"
            >
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">Dual Constraint Engine</h2>
              <p className="text-sm md:text-lg text-slate-400">
                Instantly see exactly what you can buy. AllotIQ automatically calculates the minimum between your active doctor orders and your statutory 35-day rolling window.
              </p>
            </motion.div>

            <motion.div
              style={{ opacity: screen2Opacity }}
              className="absolute top-0 w-full"
            >
              <h2 className="text-2xl md:text-4xl font-bold text-brand-emerald mb-2 md:mb-4">7 Independent Routes</h2>
              <p className="text-sm md:text-lg text-slate-400">
                Track Flower separately from your 70-day non-smokable limits. Never guess how many milligrams of Inhalation or Edibles you have left.
              </p>
            </motion.div>

            <motion.div
              style={{ opacity: screen3Opacity }}
              className="absolute top-0 w-full"
            >
              <h2 className="text-2xl md:text-4xl font-bold text-brand-amber mb-2 md:mb-4">Predict The Future</h2>
              <p className="text-sm md:text-lg text-slate-400">
                See exactly when your past dispensations will drop off. The timeline predicts precisely which date and time your ounces and milligrams will roll back into your balance.
              </p>
            </motion.div>

            <motion.div
              style={{ opacity: screen4Opacity }}
              className="absolute top-0 w-full"
            >
              <h2 className="text-2xl md:text-4xl font-bold text-cyan-400 mb-2 md:mb-4">Ask Mary, Hands-Free</h2>
              <p className="text-sm md:text-lg text-slate-400">
                Just ask out loud. Mary answers your balance, roll-off dates, and doctor deadlines instantly, entirely on-device — no reading tiny numbers required.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Phone: The Sticky Phone */}
        <div className="relative order-1 md:order-2 w-full md:w-1/2 flex justify-center items-center">
          <div className="relative w-[200px] h-[406px] md:w-[320px] md:h-[650px] rounded-[2rem] md:rounded-[3rem] border-4 md:border-8 border-slate-800 bg-brand-slate overflow-hidden shadow-2xl">

            {/* The Dynamic Screens inside the phone */}
            <motion.div style={{ opacity: screen1Opacity }} className="absolute inset-0">
              <Screen1Dashboard />
            </motion.div>

            <motion.div style={{ opacity: screen2Opacity }} className="absolute inset-0">
              <Screen2Routes />
            </motion.div>

            <motion.div style={{ opacity: screen3Opacity }} className="absolute inset-0">
              <Screen3Timeline />
            </motion.div>

            <motion.div style={{ opacity: screen4Opacity }} className="absolute inset-0">
              <Screen4Mary />
            </motion.div>

            {/* Dynamic Island / Notch fake */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 md:w-32 md:h-7 bg-slate-800 rounded-b-3xl z-10"></div>
          </div>
        </div>

      </div>
    </div>
  );
}
