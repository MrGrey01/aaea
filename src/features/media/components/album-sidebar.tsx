"use client";

import { FolderOpen, Folder, Images } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAlbums } from "@/features/media/hooks/use-media-query";
// import { useAlbums } from "@/hooks/use-media-query";

interface AlbumSidebarProps {
  selected: string | null;
  onSelect: (albumId: string | null) => void;
}

export function AlbumSidebar({ selected, onSelect }: AlbumSidebarProps) {
  const { data: albums = [], isLoading } = useAlbums();

  return (
    <aside className="flex h-full w-52 shrink-0 flex-col border-r border-white/10 bg-black/20">
      <div className="p-3 pb-2">
        <p className="px-2 text-[10px] font-semibold uppercase tracking-widest text-white/30">
          Library
        </p>
      </div>

      {/* All media */}
      <button
        onClick={() => onSelect(null)}
        className={cn(
          "flex items-center gap-2.5 px-3 py-2 mx-2 rounded-md text-sm transition-colors",
          selected === null
            ? "bg-gold-500/15 text-gold-400"
            : "text-white/60 hover:bg-white/5 hover:text-white",
        )}
      >
        <Images size={15} />
        <span>All Media</span>
      </button>

      <div className="my-2 border-t border-white/10" />

      <div className="p-3 pb-1">
        <p className="px-2 text-[10px] font-semibold uppercase tracking-widest text-white/30">
          Albums
        </p>
      </div>

      <div className="flex-1 overflow-y-auto px-2 pb-4">
        {isLoading ? (
          <div className="space-y-1.5 px-2 pt-1">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-8 animate-pulse rounded-md bg-white/5" />
            ))}
          </div>
        ) : albums.length === 0 ? (
          <p className="px-4 pt-2 text-[11px] text-white/30">No albums yet</p>
        ) : (
          <div className="space-y-0.5">
            {albums.map((album) => {
              const isActive = selected === album.id;
              const count = album.mediaAlbums?.length ?? 0;

              return (
                <button
                  key={album.id}
                  onClick={() => onSelect(album.id)}
                  className={cn(
                    "flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-sm transition-colors",
                    isActive
                      ? "bg-gold-500/15 text-gold-400"
                      : "text-white/60 hover:bg-white/5 hover:text-white",
                  )}
                >
                  {isActive ? (
                    <FolderOpen size={15} className="shrink-0" />
                  ) : (
                    <Folder size={15} className="shrink-0" />
                  )}
                  <span className="flex-1 truncate text-left">{album.name}</span>
                  <span className="text-[10px] text-white/30">{count}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </aside>
  );
}