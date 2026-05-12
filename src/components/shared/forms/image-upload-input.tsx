"use client";

import { useState } from "react";
import NextImage from "next/image";
import { ImageIcon, X, Replace, UploadCloud, Loader2 } from "lucide-react";
import { useDropzone } from "react-dropzone";
import { useUploadThing } from "@/lib/uploadthing-client";
import { useMediaPicker } from "@/features/media/hooks/use-media-picker";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import type { MediaItem } from "@/types/router-types";

interface ImageValue {
  url: string;
  utKey: string;
  blurDataUrl?: string | null;
  alt?: string | null;
}

interface ImageUploadInputProps {
  value?: ImageValue | null;
  onChange: (value: ImageValue | null) => void;
  /** Show drag & drop zone alongside the media picker button */
  allowDirectUpload?: boolean;
  aspectRatio?: "video" | "square" | "portrait" | "auto";
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

const aspectMap = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  auto: "aspect-auto min-h-[160px]",
};

export function ImageUploadInput({
  value,
  onChange,
  allowDirectUpload = true,
  aspectRatio = "video",
  placeholder = "Select or drop an image",
  className,
  disabled,
}: ImageUploadInputProps) {
  const [isUploading, setIsUploading] = useState(false);
  const { open } = useMediaPicker();
  const { startUpload } = useUploadThing("mediaUploader");

  // ── Media picker select ───────────────────────────────────────────────────
  const handlePickerSelect = (media: MediaItem) => {
    onChange({
      url: media.utUrl,
      utKey: media.utKey,
      blurDataUrl: media.blurDataUrl,
      alt: media.alt,
    });
  };

  // ── Direct drop/upload ────────────────────────────────────────────────────
  const handleDrop = async (files: File[]) => {
    if (!files.length || !allowDirectUpload) return;
    setIsUploading(true);
    try {
      const res = await startUpload(files);
      if (res?.[0]?.serverData) {
        const { utUrl, utKey, blurDataUrl } = res[0].serverData;
        onChange({ url: utUrl, utKey, blurDataUrl });
      }
    } catch {
      toast.error("Upload failed");
    } finally {
      setIsUploading(false);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: { "image/*": [] },
    maxFiles: 1,
    disabled: disabled || isUploading || !allowDirectUpload,
    noClick: true, // we handle click ourselves
  });

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(null);
  };

  // ── With image ────────────────────────────────────────────────────────────
  if (value?.url) {
    return (
      <div
        className={cn(
          "group relative overflow-hidden rounded-xl border border-white/10",
          aspectMap[aspectRatio],
          className,
        )}
      >
        <NextImage
          src={value.url}
          alt={value.alt ?? ""}
          fill
          placeholder={value.blurDataUrl ? "blur" : "empty"}
          blurDataURL={value.blurDataUrl ?? undefined}
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/55 opacity-0 backdrop-blur-[2px] transition-opacity duration-200 group-hover:opacity-100">
          <button
            type="button"
            onClick={() => open(handlePickerSelect)}
            disabled={disabled}
            className="flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            <Replace size={13} />
            Replace
          </button>
          <button
            type="button"
            onClick={handleClear}
            disabled={disabled}
            className="flex items-center gap-1.5 rounded-lg bg-red-500/20 px-3 py-1.5 text-xs font-medium text-red-400 transition-colors hover:bg-red-500/30"
          >
            <X size={13} />
            Remove
          </button>
        </div>
      </div>
    );
  }

  // ── Empty state ───────────────────────────────────────────────────────────
  return (
    <div
      {...(allowDirectUpload ? getRootProps() : {})}
      className={cn(
        "relative flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed transition-all duration-200",
        aspectMap[aspectRatio],
        isDragActive
          ? "border-gold-500 bg-gold-500/5 scale-[0.99]"
          : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/5",
        (disabled || isUploading) && "pointer-events-none opacity-50",
        className,
      )}
    >
      {allowDirectUpload && <input {...getInputProps()} />}

      {isUploading ? (
        <>
          <Loader2 size={22} className="animate-spin text-gold-500" />
          <p className="text-xs text-white/40">Uploading…</p>
        </>
      ) : isDragActive ? (
        <>
          <UploadCloud size={22} className="text-gold-400" />
          <p className="text-xs text-gold-400">Drop to upload</p>
        </>
      ) : (
        <>
          <ImageIcon size={22} className="text-white/20" />
          <p className="text-xs text-white/40">{placeholder}</p>

          <div className="flex items-center gap-2">
            {/* Open media picker */}
            <button
              type="button"
              onClick={() => open(handlePickerSelect)}
              disabled={disabled}
              className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-white/50 transition-colors hover:border-white/25 hover:text-white"
            >
              Media library
            </button>

            {allowDirectUpload && (
              <>
                <span className="text-[10px] text-white/20">
                  or drop a file
                </span>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
