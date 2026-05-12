import { create } from "zustand";
import type { MediaItem, Album } from "@/types/router-types";

interface MediaPickerStore {
  isOpen: boolean;
  onSelect: ((media: MediaItem) => void) | null;
  albumFilter: string | null;
  search: string;
  view: "grid" | "list";

  open: (onSelect: (media: MediaItem) => void) => void;
  close: () => void;
  setAlbumFilter: (albumId: string | null) => void;
  setSearch: (q: string) => void;
  setView: (v: "grid" | "list") => void;
}

export const useMediaPicker = create<MediaPickerStore>((set) => ({
  isOpen: false,
  onSelect: null,
  albumFilter: null,
  search: "",
  view: "grid",

  open: (onSelect) => set({ isOpen: true, onSelect }),
  close: () => set({ isOpen: false, onSelect: null, search: "", albumFilter: null }),
  setAlbumFilter: (albumId) => set({ albumFilter: albumId }),
  setSearch: (q) => set({ search: q }),
  setView: (v) => set({ view: v }),
}));