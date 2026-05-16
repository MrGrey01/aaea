import { cn } from "@/lib/utils";
import * as React from "react";

type SectionBorderProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
  color?: string;
  className?: string;
};

export const SectionBorder = ({
  size = 14,
  color = "currentColor", //#b9862b
  className = "",
  ...props
}: SectionBorderProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={148}
    height={74}
    {...props}
    className={cn("pointer-events-none absolute", className)}
  >
    <path
      d="m-.468.711 72.85 73.309-.88.874-72.85-73.308Zm-7.886 34.517L95 35.642v1.24l-103.35-.413Zm103.364-.161 80.7 64.563-.774.969-80.7-64.564ZM-7.954 11.869l75.12 75.593-3.024 3-75.12-75.593Z"
      data-name="Rectangle 1 copy"
      style={{
        fill: color,
        fillRule: "evenodd",
      }}
    />
  </svg>
);
