import { cn } from "@/lib/utils";

const LOGO_SRC = "/images/reovana/logo.png";

type ReovanaLogoProps = {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  className?: string;
};

const sizeWidths = {
  sm: "w-[140px]",
  md: "w-[180px]",
  lg: "w-[220px]",
};

export function ReovanaLogo({ size = "md", className }: ReovanaLogoProps) {
  return (
    <div className={cn("flex items-center justify-center shrink-0", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={LOGO_SRC}
        alt="REOVANA"
        className={cn("h-auto max-w-none object-contain", sizeWidths[size])}
      />
    </div>
  );
}
