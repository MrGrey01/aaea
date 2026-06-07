import { cn } from "@/lib/utils";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const btnBaseClasses =
  "flex items-center gap-2 text-sm py-2 md:py-3 px-4 md:px-6 rounded-sm transition-colors duration-300 uppercase hover:shadow-[0_0_40px_rgba(255,196,0,0.35)]";

export const PrimaryButton = ({
  children,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={cn(
        btnBaseClasses,
        "bg-gold-500 text-black hover:bg-[#e0b869]",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const SecondaryButton = ({
  children,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={cn(
        btnBaseClasses,
        "bg-brand-800 text-white hover:bg-brand-700 hover:text-black border border-gold-500/10",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const OutlineButton = ({
  children,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={cn(
        btnBaseClasses,
        "bg-transparent text-gold-500 hover:bg-gold-400 hover:text-black border border-gold-500/20 backdrop-blur-lg hover:shadow-none",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
