import { REOVANA_BRAND } from "@/lib/reovana-admin-data";
import { cn } from "@/lib/utils";

type ReovanaLogoProps = {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  className?: string;
};

const sizeClasses = {
  sm: "text-sm tracking-[0.2em]",
  md: "text-lg tracking-[0.25em]",
  lg: "text-2xl tracking-[0.3em]",
};

export function ReovanaLogo({ size = "md", showTagline = false, className }: ReovanaLogoProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <span
        className={cn("font-extrabold text-sidebar-foreground", sizeClasses[size])}
        style={{ fontFamily: "var(--font-lexend), sans-serif" }}
      >
        {REOVANA_BRAND.name}
      </span>
      {showTagline && (
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5">
          {REOVANA_BRAND.tagline}
        </span>
      )}
    </div>
  );
}
