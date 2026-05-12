"use client";

import Image from "next/image";
import { Check, Trash2, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { MediaItem } from "@/types/router-types";

interface MediaCardProps {
  item: MediaItem;
  isSelected?: boolean;
  isSelectable?: boolean;
  onSelect?: (item: MediaItem) => void;
  onDelete?: (item: MediaItem) => void;
}

export function MediaCard({
  item,
  isSelected,
  isSelectable,
  onSelect,
  onDelete,
}: MediaCardProps) {
  return (
    <div
      role={isSelectable ? "button" : undefined}
      tabIndex={isSelectable ? 0 : undefined}
      aria-pressed={isSelectable ? isSelected : undefined}
      onClick={() => onSelect?.(item)}
      onKeyDown={(e) => e.key === "Enter" && onSelect?.(item)}
      className={cn(
        "group relative aspect-square overflow-hidden rounded-lg border transition-all duration-200",
        isSelectable && "cursor-pointer",
        isSelected
          ? "border-gold-500 ring-2 ring-gold-500/40"
          : "border-white/10 hover:border-white/30",
      )}
    >
      {/* Image */}
      {item.utUrl ? (
        <Image
          src={item.utUrl}
          alt={item.alt ?? item.filename}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
          placeholder={item.blurDataUrl ? "blur" : "empty"}
          blurDataURL={item.blurDataUrl ?? undefined}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-white/5">
          <ImageIcon size={24} className="text-white/20" />
        </div>
      )}

      {/* Overlay on hover */}
      <div
        className={cn(
          "absolute inset-0 bg-black/50 transition-opacity duration-200",
          isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100",
        )}
      />

      {/* Filename on hover */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 translate-y-full bg-linear-to-t from-black/80 to-transparent p-2 transition-transform duration-200 group-hover:translate-y-0",
          isSelected && "translate-y-0",
        )}
      >
        <p className="truncate text-[11px] text-white/80">{item.filename}</p>
        <p className="text-[10px] text-white/40">
          {item.width && item.height ? `${item.width}×${item.height}` : ""}
          {item.size ? ` · ${(item.size / 1024).toFixed(0)}kb` : ""}
        </p>
      </div>

      {/* Selected checkmark */}
      {isSelected && (
        <div className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-gold-500">
          <Check size={12} className="text-black" strokeWidth={3} />
        </div>
      )}

      {/* Delete button (non-picker mode) */}
      {!isSelectable && onDelete && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(item);
          }}
          className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-md bg-red-500/80 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 hover:bg-red-500"
          aria-label="Delete image"
        >
          <Trash2 size={13} className="text-white" />
        </button>
      )}
    </div>
  );
}