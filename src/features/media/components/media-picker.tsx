"use client";

import { useState } from "react";
import { X, Search, Upload, LayoutGrid, Check } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useMediaPicker } from "@/features/media/hooks/use-media-picker";
import { AlbumSidebar } from "./album-sidebar";
import { MediaGrid } from "./media-grid";
import { MediaUploadZone } from "./media-upload-zone";
import type { MediaItem } from "@/types/router-types";

type Tab = "browse" | "upload";

export function MediaPicker() {
  const { isOpen, onSelect, albumFilter, search, close, setAlbumFilter, setSearch } =
    useMediaPicker();

  const [tab, setTab] = useState<Tab>("browse");
  const [selected, setSelected] = useState<MediaItem | null>(null);

  const handleSelect = (item: MediaItem) => {
    setSelected((prev) => (prev?.id === item.id ? null : item));
  };

  const handleConfirm = () => {
    if (!selected || !onSelect) return;
    onSelect(selected);
    setSelected(null);
    close();
  };

  const handleClose = () => {
    setSelected(null);
    close();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.97, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 bottom-0 top-8 z-50 mx-auto flex max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f0f] shadow-2xl md:inset-x-8 md:top-12"
          >
            {/* ── Header ── */}
            <div className="flex items-center gap-3 border-b border-white/10 px-5 py-3.5">
              <LayoutGrid size={17} className="text-gold-500" />
              <h2 className="text-sm font-semibold text-white">Media Library</h2>

              <div className="ml-auto flex items-center gap-2">
                {/* Tabs */}
                <div className="flex rounded-lg border border-white/10 p-0.5">
                  {(["browse", "upload"] as Tab[]).map((t) => (
                    <button
                      key={t}
                      onClick={() => setTab(t)}
                      className={cn(
                        "rounded-md px-3 py-1.5 text-xs font-medium capitalize transition-colors",
                        tab === t
                          ? "bg-white/10 text-white"
                          : "text-white/40 hover:text-white/70",
                      )}
                    >
                      {t === "upload" && <Upload size={11} className="mr-1.5 inline" />}
                      {t}
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleClose}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-white/40 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label="Close"
                >
                  <X size={17} />
                </button>
              </div>
            </div>

            {/* ── Body ── */}
            <div className="flex flex-1 overflow-hidden">
              {tab === "browse" ? (
                <>
                  {/* Sidebar */}
                  <AlbumSidebar selected={albumFilter} onSelect={setAlbumFilter} />

                  {/* Main content */}
                  <div className="flex flex-1 flex-col overflow-hidden">
                    {/* Search */}
                    <div className="border-b border-white/10 px-4 py-3">
                      <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                        <Search size={14} className="shrink-0 text-white/30" />
                        <input
                          type="text"
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                          placeholder="Search images…"
                          className="flex-1 bg-transparent text-sm text-white placeholder:text-white/25 focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Grid */}
                    <div className="flex-1 overflow-y-auto p-4">
                      <MediaGrid
                        pickerMode
                        selectedId={selected?.id}
                        onSelect={handleSelect}
                        albumId={albumFilter}
                        search={search}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 overflow-y-auto p-8">
                  <MediaUploadZone
                    albumId={albumFilter ?? undefined}
                    onUploaded={() => setTab("browse")}
                  />
                </div>
              )}
            </div>

            {/* ── Footer ── */}
            <div className="flex items-center justify-between border-t border-white/10 px-5 py-3">
              <p className="text-xs text-white/30">
                {selected ? (
                  <span className="text-white/60">
                    Selected:{" "}
                    <span className="text-gold-400">{selected.filename}</span>
                  </span>
                ) : (
                  "Click an image to select it"
                )}
              </p>

              <div className="flex gap-2">
                <button
                  onClick={handleClose}
                  className="rounded-lg border border-white/10 px-4 py-2 text-sm text-white/50 transition-colors hover:border-white/20 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirm}
                  disabled={!selected}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all",
                    selected
                      ? "bg-gold-500 text-black hover:bg-gold-400"
                      : "cursor-not-allowed bg-white/5 text-white/20",
                  )}
                >
                  <Check size={14} />
                  Insert Image
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}