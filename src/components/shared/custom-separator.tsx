import { cn } from "@/lib/utils";

interface SeparatorProps {
  className?: string;
  // color?: string;
  color?: keyof typeof colorVariants;
  variant?: "left" | "right" | "center";
}

const colorVariants = {
  gold: {
    left: "bg-linear-to-r from-transparent via-gold-500/80 to-gold-500",
    right: "bg-linear-to-r from-gold-500 via-gold-500/80 to-transparent",
    center: "bg-linear-to-r from-transparent via-gold-500/80 to-transparent",
  },

  blue: {
    left: "bg-linear-to-r from-transparent via-blue-500/80 to-blue-500",
    right: "bg-linear-to-r from-blue-500 via-blue-500/80 to-transparent",
    center: "bg-linear-to-r from-transparent via-blue-500/80 to-transparent",
  },

  black: {
    left: "bg-linear-to-r from-transparent via-black/80 to-black",
    right: "bg-linear-to-r from-black via-black/80 to-transparent",
    center: "bg-linear-to-r from-transparent via-black/80 to-transparent",
  },
};

export const TitleSeparator = ({
  className,
  variant = "center",
  color = "gold",
}: SeparatorProps) => {
  return (
    <div
      className={cn("h-px w-full", colorVariants[color][variant], className)}
    />
  );
};
