"use client";

import handTop from "@/assets/hand-top.png";
import handBottom from "@/assets/hand-bottom.png";
import { assetSrc } from "@/lib/utils";

/** Decorative hands from the login loader — stay visible behind admin content. */
export function HandsBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute top-0 right-0 w-[45%] max-w-xl opacity-[0.14]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={assetSrc(handTop)} alt="" className="w-full" />
      </div>
      <div className="absolute bottom-0 left-0 w-[45%] max-w-xl opacity-[0.14]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={assetSrc(handBottom)} alt="" className="w-full" />
      </div>
    </div>
  );
}
