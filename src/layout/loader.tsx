"use client";

import { motion } from "framer-motion";
import handTop from "../assets/hand-top.png";
import handBotttom from "../assets/hand-bottom.png";
import { assetSrc } from "@/lib/utils";
import { REOVANA_BRAND } from "@/lib/reovana-admin-data";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
    return (
        <motion.div className='h-screen relative overflow-hidden' initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <div className="absolute inset-0 z-40 flex flex-col items-center justify-center pointer-events-none">
                <p className="text-2xl font-extrabold tracking-[0.35em] text-white" style={{ fontFamily: "var(--font-lexend)" }}>
                    {REOVANA_BRAND.name}
                </p>
                <p className="text-xs text-white/50 mt-2 uppercase tracking-widest">Admin</p>
            </div>
            {/* Top hand image: slides in from the right edge */}
            <motion.div className='absolute top-0 right-0 w-1/2 z-30'
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                transition={{
                    duration: 1.5,
                    ease: [0.43, 0.13, 0.23, 0.96] // cubic-bezier easing for the slide
                }}
                onAnimationComplete={() => {
                    // Wait briefly after the animation, then hide the loader and show the app
                    setTimeout(() => onComplete(), 400)
                }}
            >
                <img src={assetSrc(handTop)} alt="" className="w-full " />
            </motion.div>

            {/* Bottom hand image: slides in from the left edge */}
            <motion.div className='absolute bottom-0 left-0 w-1/2 z-30'
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{
                    duration: 1.5,
                    ease: [0.43, 0.13, 0.23, 0.96] // match top hand easing
                }}
            >
                <img src={assetSrc(handBotttom)} alt="" className="w-full " />
            </motion.div>
        </motion.div>
    )
}

export default Loader;
