import { cn } from "@/lib/utils";

const LOGO_SRC = "/images/reovana/logo.png";

type ReovanaLogoProps = {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  className?: string;
};

const sizeHeights = {
  sm: "h-8",
  md: "h-10",
  lg: "h-14",
};

export function ReovanaLogo({ size = "md", className }: ReovanaLogoProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={LOGO_SRC}
        alt="REOVANA"
        className={cn("w-auto max-w-full object-contain", sizeHeights[size])}
      />
    </div>
  );
}
