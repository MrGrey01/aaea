"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud, Loader2 } from "lucide-react";
// import { useUploadThing } from "@/lib/uploadthing";
import { useQueryClient } from "@tanstack/react-query";
import { mediaKeys } from "@/features/media/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
// import { orpc } from "@/orpc/client";
import slugify from "slugify";
import { getPlaiceholder } from "plaiceholder";
import { useUploadThing } from "@/lib/uploadthing-client";
import { orpc } from "@/lib/orpc-rq.client";

interface MediaUploadZoneProps {
  albumId?: string;
  onUploaded?: () => void;
}

export function MediaUploadZone({ albumId, onUploaded }: MediaUploadZoneProps) {
  const qc = useQueryClient();

  const { startUpload, isUploading } = useUploadThing("mediaUploader", {
  onClientUploadComplete: async (res) => {
    // DB record already created in onUploadComplete on the server.
    // Just assign to album if needed, then refresh.
    if (albumId) {
      await Promise.all(
        res.map((file) =>
          orpc.media.assignToAlbum.call({
            mediaId: file.serverData.id, // ✅ id comes back from server
            albumId,
          })
        )
      );
    }

    qc.invalidateQueries({ queryKey: mediaKeys.all });
    toast.success(`${res.length} image${res.length > 1 ? "s" : ""} uploaded`);
    onUploaded?.();
  },
  onUploadError: (err) => {
    toast.error(err.message ?? "Upload failed");
  },
});

  const onDrop = useCallback(
    (files: File[]) => {
      startUpload(files);
    },
    [startUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    disabled: isUploading,
    multiple: true,
  });

  return (
    <div
      {...getRootProps()}
      className={cn(
        "flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed p-10 transition-all duration-200",
        isDragActive
          ? "border-gold-500 bg-gold-500/5 scale-[0.99]"
          : "border-white/15 bg-white/[0.02] hover:border-white/30 hover:bg-white/5",
        isUploading && "pointer-events-none opacity-60",
      )}
    >
      <input {...getInputProps()} />

      {isUploading ? (
        <Loader2 size={28} className="animate-spin text-gold-500" />
      ) : (
        <UploadCloud
          size={28}
          className={cn(
            "transition-colors",
            isDragActive ? "text-gold-400" : "text-white/30",
          )}
        />
      )}

      <div className="text-center">
        <p className="text-sm font-medium text-white/70">
          {isUploading
            ? "Uploading…"
            : isDragActive
              ? "Drop images here"
              : "Drag & drop images, or click to browse"}
        </p>
        <p className="mt-0.5 text-[11px] text-white/30">
          PNG, JPG, WEBP, AVIF supported
        </p>
      </div>
    </div>
  );
}