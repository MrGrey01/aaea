import { motion } from "motion/react";

export const SubmitButton = ({
  label,
  icon,
}: {
  label: string;
  icon: React.ReactNode;
}) => (
  <motion.button
    whileTap={{ scale: 0.99 }}
    className="mt-2 flex w-full items-center justify-center gap-2.5 rounded-lg
               bg-gold-500 py-2.5 font-display
               tracking-wide text-white transition-colors hover:bg-gold-600"
  >
    {label}
    {icon}
  </motion.button>
);
