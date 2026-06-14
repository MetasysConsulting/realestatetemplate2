"use client";

import { motion } from "framer-motion";
import handTop from "@/assets/hand-top.png";
import handBottom from "@/assets/hand-bottom.png";
import { assetSrc } from "@/lib/utils";
import { ReovanaLogo } from "@/components/reovana-logo";

type InitialLoaderProps = {
  onComplete: () => void;
};

export function InitialLoader({ onComplete }: InitialLoaderProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] h-screen overflow-hidden bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 z-40 flex flex-col items-center justify-center pointer-events-none">
        <ReovanaLogo size="lg" />
        <span className="text-xs text-white/60 mt-3 uppercase tracking-widest">Admin</span>
      </div>

      <motion.div
        className="absolute top-0 right-0 w-1/2 z-30"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        onAnimationComplete={() => setTimeout(() => onComplete(), 400)}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={assetSrc(handTop)} alt="" className="w-full" />
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 w-1/2 z-30"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={assetSrc(handBottom)} alt="" className="w-full" />
      </motion.div>
    </motion.div>
  );
}
