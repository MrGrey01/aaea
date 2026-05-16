import { ArrowRight, User2, UserIcon } from "lucide-react";
import Link from "next/link";

interface ActionButtonsProps {
  isLoggedIn?: boolean;
  role?: string;
  onItemClick?: () => void;
}

export const ActionButtons = ({
  role,
  isLoggedIn,
  onItemClick,
}: ActionButtonsProps) => {
  //   const userUrl = !isLoggedIn
  //     ? "/sign-in"
  //     : role === "admin"
  //       ? "/dashboard/admin"
  //       : role === "client"
  //         ? "/client"
  //         : role === "photographer"
  //           ? "/dashboard/albums"
  //           : "/dashboard";

  let userUrl = "/dashboard";

  if (!isLoggedIn) {
    userUrl = "/sign-in";
  } else if (role === "client") {
    userUrl = "/gallery";
  } else if (role === "photographer") {
    userUrl = "/dashboard";
  } else if (role === "admin") {
    userUrl = "/dashboard/admin";
  } else if (role === "super_admin") {
    userUrl = "/dashboard/admin";
  }

  return (
    <div className="flex gap-2">
      <Link
        href="/sign-in"
        onClick={onItemClick}
        className="group flex flex-1 items-center gap-2.5 rounded-full border border-gold-500/30 p-2 md:p-2.5 text-sm font-semibold text-gold-400 transition-all duration-300 hover:bg-gold-500 hover:text-white"
        aria-label="Sign In"
      >
        <span
          className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-500 transition-all duration-300 border-gold-500/30 group-hover:bg-white group-hover:border group-hover:border-white"
          aria-hidden="true"
        >
          <ArrowRight className="h-3 w-3 transition-colors text-white group-hover:text-gold-500" />
        </span>
        Sign Up
      </Link>

      <Link
        href={userUrl}
        onClick={onItemClick}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-500/30 bg-black/30 text-gold-400 backdrop-blur-xl transition-all hover:bg-gold-500 hover:text-brand-950 lg:right-10"
      >
        <User2 className="h-4.5 w-4.5" />
      </Link>
    </div>
  );
};
