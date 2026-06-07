// https://youtu.be/TUuL8mpOlOE?si=kPKQtoAd4F8NLSrb

"use client";

import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import { Play } from "lucide-react";
import { SecondaryButton } from "../buttons";
import { cn } from "@/lib/utils";

interface TrailerButtonProps {
  videoId: string;
  title?: string;
  className?: string;
}

export function WatchVideoButton({
  videoId,
  title,
  className,
}: TrailerButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SecondaryButton
        className={cn("group", className)}
        onClick={() => setOpen(true)}
      >
        <span className="flex p-1 items-center justify-center rounded-full border border-gold-500 text-white transition-transform duration-300 group-hover:scale-110 hover:text-gold-500">
          <Play className="h-3 w-3 fill-current" />
        </span>
        {title || "Watch trailer"}
      </SecondaryButton>
      <Dialog
        open={open}
        onOpenChange={(v) => {
          if (!v) setOpen(false);
        }}
      >
        <DialogContent className="max-w-none w-[90vw] sm:w-[80vw] lg:w-225 p-0 overflow-hidden bg-black border-none">
          <DialogTitle className="sr-only">Watch trailer</DialogTitle>
          <DialogDescription className="sr-only">
            YouTube trailer video player
          </DialogDescription>
          <div className="relative w-full aspect-video">
            {open && (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title="Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
