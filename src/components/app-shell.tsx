"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { InitialLoader } from "@/components/initial-loader";
import { HandsBackground } from "@/components/hands-background";
import Layout from "@/layout/layout";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [showContent, setShowContent] = useState(false);
  const [circleStart, setCircleStart] = useState(false);

  const handleLoaderComplete = () => {
    setCircleStart(true);
    setTimeout(() => {
      setShowContent(true);
    }, 400);
  };

  if (!showContent) {
    return (
      <>
        <AnimatePresence mode="wait">
          <InitialLoader onComplete={handleLoaderComplete} />
        </AnimatePresence>
        {circleStart && (
          <motion.div
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 40, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="fixed left-1/2 top-1/2 z-[110] h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black pointer-events-none"
          />
        )}
      </>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative min-h-screen overflow-hidden"
    >
      <HandsBackground />
      <div className="relative z-10">
        <Layout>{children}</Layout>
      </div>
    </motion.div>
  );
}
