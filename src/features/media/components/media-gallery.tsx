"use client";

import { useState } from "react";
import { Trash2, Upload, FolderPlus } from "lucide-react";
import { AlbumSidebar } from "./album-sidebar";
import { MediaGrid } from "./media-grid";
import { MediaUploadZone } from "./media-upload-zone";
import { useDeleteMediaBulk } from "@/features/media/hooks/use-media-query";
import type { MediaItem } from "@/types/router-types";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export function MediaGallery() {
  const [albumFilter, setAlbumFilter] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [showUpload, setShowUpload] = useState(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const { mutate: deleteBulk, isPending } = useDeleteMediaBulk();

  const toggleSelect = (item: MediaItem) => {
    setSelectedIds((prev) =>
      prev.includes(item.id) ? prev.filter((id) => id !== item.id) : [...prev, item.id],
    );
  };

  const handleBulkDelete = () => {
    if (!confirm(`Delete ${selectedIds.length} image(s)? This cannot be undone.`)) return;
    deleteBulk(selectedIds, {
      onSuccess: (res) => {
        toast.success(`${res.deleted} image(s) deleted`);
        setSelectedIds([]);
      },
      onError: (e: any) => toast.error(e.message ?? "Delete failed"),
    });
  };

  return (
    <div className="flex h-full min-h-screen flex-col bg-[#0a0a0a]">
      {/* ── Toolbar ── */}
      <header className="flex items-center gap-3 border-b border-white/10 px-6 py-4">
        <div>
          <h1 className="text-base font-semibold text-white">Media Library</h1>
          <p className="text-xs text-white/30">Manage your uploaded images and albums</p>
        </div>

        <div className="ml-auto flex items-center gap-2">
          {selectedIds.length > 0 && (
            <button
              onClick={handleBulkDelete}
              disabled={isPending}
              className="flex items-center gap-1.5 rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-400 transition-colors hover:bg-red-500/20"
            >
              <Trash2 size={14} />
              Delete {selectedIds.length}
            </button>
          )}

          <button
            onClick={() => setShowUpload((v) => !v)}
            className={cn(
              "flex items-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-medium transition-colors",
              showUpload
                ? "border-gold-500/40 bg-gold-500/10 text-gold-400"
                : "border-white/10 text-white/60 hover:border-white/20 hover:text-white",
            )}
          >
            <Upload size={14} />
            Upload
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <AlbumSidebar selected={albumFilter} onSelect={setAlbumFilter} />

        {/* Content */}
        <main className="flex flex-1 flex-col overflow-hidden">
          {showUpload && (
            <div className="border-b border-white/10 p-6">
              <MediaUploadZone
                albumId={albumFilter ?? undefined}
                onUploaded={() => setShowUpload(false)}
              />
            </div>
          )}

          <div className="flex-1 overflow-y-auto p-6">
            <MediaGrid
              albumId={albumFilter}
              search={search}
              selectedId={selectedIds[0]}
              onSelect={toggleSelect}
            />
          </div>
        </main>
      </div>
    </div>
  );
}