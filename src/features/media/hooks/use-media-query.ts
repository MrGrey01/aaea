"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { orpc } from "@/orpc/client";
import type { MediaItem } from "@/types/router-types";
import { orpc } from "@/lib/orpc-rq.client";

// ── Keys ─────────────────────────────────────────────────────────────────────
export const mediaKeys = {
  all:     ["media"] as const,
  list:    (albumId?: string) => [...mediaKeys.all, "list", albumId] as const,
  detail:  (id: string) => [...mediaKeys.all, "detail", id] as const,
  albums:  ["albums"] as const,
};

// ── Media list ────────────────────────────────────────────────────────────────
export function useMedia(albumId?: string) {
  return useQuery({
    queryKey: mediaKeys.list(albumId),
    queryFn:  () => orpc.media.list.call({ albumId }),
  });
}

// ── Single media item ─────────────────────────────────────────────────────────
export function useMediaItem(id: string) {
  return useQuery({
    queryKey: mediaKeys.detail(id),
    queryFn:  () => orpc.media.getById.call({ id }),
    enabled:  !!id,
  });
}

// ── Albums ────────────────────────────────────────────────────────────────────
export function useAlbums() {
  return useQuery({
    queryKey: mediaKeys.albums,
    queryFn:  () => orpc.albums.list.call(),
  });
}

// ── Delete single ─────────────────────────────────────────────────────────────
export function useDeleteMedia() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => orpc.media.remove.call({ id }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: mediaKeys.all });
    },
  });
}

// ── Bulk delete ───────────────────────────────────────────────────────────────
export function useDeleteMediaBulk() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (ids: string[]) => orpc.media.removeBulk.call({ ids }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: mediaKeys.all });
    },
  });
}

// ── Update metadata ───────────────────────────────────────────────────────────
export function useUpdateMedia() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (input: { id: string; alt?: string; caption?: string; albumId?: string }) =>
      orpc.media.update.call(input),
    onSuccess: (updated) => {
      qc.invalidateQueries({ queryKey: mediaKeys.list() });
      qc.invalidateQueries({ queryKey: mediaKeys.detail(updated.id) });
    },
  });
}

// ── Assign to album ───────────────────────────────────────────────────────────
export function useAssignToAlbum() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (input: { mediaId: string; albumId: string }) =>
      orpc.media.assignToAlbum.call(input),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: mediaKeys.all });
    },
  });
}