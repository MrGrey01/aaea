import { cn } from "@/lib/utils";

interface SeparatorProps {
  className?: string;
  variant?: "left" | "right" | "center";
}
export const TitleSeparator = ({
  className,
  variant = "center",
}: SeparatorProps) => {
  return (
    <div
      className={cn(
        "h-px w-full",
        variant === "left" &&
          "bg-linear-to-r from-transparent via-gold-500/80 to-gold-500",
        variant === "right" &&
          "bg-linear-to-r from-gold-500 via-gold-500/80 to-transparent",
        variant === "center" &&
          "bg-linear-to-r from-transparent via-gold-500/80 to-transparent",
        className,
      )}
    />
  );
};
