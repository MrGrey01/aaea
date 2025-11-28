interface SectionHeadingProps {
  title: string;
  subtitle: string;
  center?: boolean;
}

export const SectionHeading = ({
  title,
  subtitle,
  center = false,
}: SectionHeadingProps) => (
  <div className={`mb-12 ${center ? "text-center" : "text-left"}`}>
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
      {title}
    </h2>
    <div
      className={`h-1 w-20 bg-[#F5C76A] mb-4 ${center ? "mx-auto" : ""}`}
    ></div>
    <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
      {subtitle}
    </p>
  </div>
);
