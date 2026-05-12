"use client";

import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { MediaCard } from "./media-card";
import { useMedia, useDeleteMedia } from "@/features/media/hooks/use-media-query";
import { useMediaPicker } from "@/features/media/hooks/use-media-picker";
import type { MediaItem } from "@/types/router-types";
import { toast } from "sonner";

interface MediaGridProps {
  /** Picker mode — clicking a card selects and closes the modal */
  pickerMode?: boolean;
  /** Currently selected item id in picker mode */
  selectedId?: string;
  onSelect?: (item: MediaItem) => void;
  albumId?: string | null;
  search?: string;
  className?: string;
}

export function MediaGrid({
  pickerMode,
  selectedId,
  onSelect,
  albumId,
  search,
  className,
}: MediaGridProps) {
  const { data: items = [], isLoading } = useMedia(albumId ?? undefined);
  const { mutate: deleteMedia } = useDeleteMedia();

  const filtered = items.filter((item) => {
    if (item.status === "deleted") return false;
    if (!search) return true;
    return (
      item.filename.toLowerCase().includes(search.toLowerCase()) ||
      item.alt?.toLowerCase().includes(search.toLowerCase())
    );
  });

  const handleDelete = (item: MediaItem) => {
    if (!confirm(`Delete "${item.filename}"? This cannot be undone.`)) return;
    deleteMedia(item.id, {
      onSuccess: () => toast.success("Image deleted"),
      onError:   (e: any) => toast.error(e.message ?? "Delete failed"),
    });
  };

  if (isLoading) {
    return (
      <div className={cn("grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-5", className)}>
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="aspect-square animate-pulse rounded-lg bg-white/5"
            style={{ animationDelay: `${i * 40}ms` }}
          />
        ))}
      </div>
    );
  }

  if (filtered.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-20 text-center">
        <ImageIcon size={36} className="text-white/15" />
        <p className="text-sm text-white/30">
          {search ? `No images matching "${search}"` : "No images yet"}
        </p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-5",
        className,
      )}
    >
      {filtered.map((item) => (
        <MediaCard
          key={item.id}
          item={item}
          isSelectable={pickerMode}
          isSelected={selectedId === item.id}
          onSelect={onSelect}
          onDelete={!pickerMode ? handleDelete : undefined}
        />
      ))}
    </div>
  );
}