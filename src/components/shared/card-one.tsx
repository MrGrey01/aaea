interface CardOneProps {
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
}

export const CardOne = ({
  children,
  className = "",
  highlight = false,
}: CardOneProps) => (
  <div
    className={`rounded-xl bg-[#0C1020] border ${
      highlight
        ? "border-[#F5C76A] shadow-[0_0_20px_rgba(245,199,106,0.1)]"
        : "border-white/10"
    } p-6 transition-all duration-300 hover:scale-[1.02] hover:border-[#38E0FF]/50 hover:shadow-[0_0_20px_rgba(56,224,255,0.1)] group ${className}`}
  >
    {children}
  </div>
);
