"use client";

import { useEffect, useRef, useState } from "react";

type ImportMode = "upsert" | "insert" | "replace";
type TableStatus = "idle" | "loading" | "success" | "error";

interface ImportResult {
  [table: string]: { count: number; error?: string };
}

export default function DatabaseManagerPage() {
  const [tables, setTables] = useState<string[]>([]);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [exportStatus, setExportStatus] = useState<TableStatus>("idle");
  const [importStatus, setImportStatus] = useState<TableStatus>("idle");
  const [importMode, setImportMode] = useState<ImportMode>("upsert");
  const [importResults, setImportResults] = useState<ImportResult | null>(null);
  const [importError, setImportError] = useState<string | null>(null);
  const [loadingTables, setLoadingTables] = useState(true);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch("/api/admin/db/tables")
      .then((r) => r.json())
      .then((d) => {
        setTables(d.tables ?? []);
        setSelected(new Set(d.tables ?? []));
      })
      .finally(() => setLoadingTables(false));
  }, []);

  const toggleTable = (t: string) =>
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(t) ? next.delete(t) : next.add(t);
      return next;
    });

  const toggleAll = () =>
    setSelected(selected.size === tables.length ? new Set() : new Set(tables));

  const handleExport = async () => {
    setExportStatus("loading");
    try {
      const params =
        selected.size < tables.length
          ? `?tables=${[...selected].join(",")}`
          : "";
      const res = await fetch(`/api/admin/db/export${params}`);
      if (!res.ok) throw new Error(await res.text());
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `db-export-${Date.now()}.json`;
      a.click();
      URL.revokeObjectURL(url);
      setExportStatus("success");
    } catch {
      setExportStatus("error");
    } finally {
      setTimeout(() => setExportStatus("idle"), 3000);
    }
  };

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImportStatus("loading");
    setImportResults(null);
    setImportError(null);
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      const res = await fetch("/api/admin/db/import", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data, mode: importMode }),
      });
      const json = await res.json();
      if (!res.ok || !json.success)
        throw new Error(json.error ?? "Import failed");
      setImportResults(json.results);
      setImportStatus("success");
    } catch (err: unknown) {
      setImportError(err instanceof Error ? err.message : "Unknown error");
      setImportStatus("error");
    } finally {
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  const totalSelected = selected.size;
  const allSelected = totalSelected === tables.length && tables.length > 0;

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 font-sans">
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
            Admin › Database
          </p>
          <h1 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
            Database Manager
          </h1>
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
            Export or import table data as JSON. Select tables below to target
            specific data.
          </p>
        </div>

        {/* Table Selector */}
        <section className="mb-8 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100 dark:border-neutral-800">
            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Tables
              {!loadingTables && (
                <span className="ml-2 text-xs text-neutral-400">
                  {totalSelected} / {tables.length} selected
                </span>
              )}
            </span>
            {!loadingTables && tables.length > 0 && (
              <button
                onClick={toggleAll}
                className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
              >
                {allSelected ? "Deselect all" : "Select all"}
              </button>
            )}
          </div>

          <div className="px-5 py-4">
            {loadingTables ? (
              <div className="flex gap-2 flex-wrap">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="h-8 w-24 rounded-lg bg-neutral-100 dark:bg-neutral-800 animate-pulse"
                  />
                ))}
              </div>
            ) : tables.length === 0 ? (
              <p className="text-sm text-neutral-400 py-2">
                No tables found. Check your schema exports.
              </p>
            ) : (
              <div className="flex gap-2 flex-wrap">
                {tables.map((t) => {
                  const active = selected.has(t);
                  return (
                    <button
                      key={t}
                      onClick={() => toggleTable(t)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-mono transition-all ${
                        active
                          ? "bg-blue-600 text-white"
                          : "bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* Export */}
        <section className="mb-6 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
                Export
              </h2>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Downloads a JSON file with rows from{" "}
                {totalSelected === tables.length
                  ? "all tables"
                  : `${totalSelected} selected table${totalSelected !== 1 ? "s" : ""}`}
                .
              </p>
            </div>
            <button
              onClick={handleExport}
              disabled={exportStatus === "loading" || totalSelected === 0}
              className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                exportStatus === "success"
                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                  : exportStatus === "error"
                    ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                    : "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:opacity-80 disabled:opacity-40"
              }`}
            >
              {exportStatus === "loading" ? (
                <>
                  <svg
                    className="animate-spin w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    />
                  </svg>
                  Exporting…
                </>
              ) : exportStatus === "success" ? (
                "✓ Downloaded"
              ) : exportStatus === "error" ? (
                "✗ Failed"
              ) : (
                <>
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17" />
                  </svg>
                  Export JSON
                </>
              )}
            </button>
          </div>
        </section>

        {/* Import */}
        <section className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5">
          <h2 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
            Import
          </h2>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4">
            Upload a previously exported JSON file to restore data.
          </p>

          {/* Mode Selector */}
          <div className="flex gap-2 mb-4 flex-wrap">
            {(["upsert", "insert", "replace"] as ImportMode[]).map((m) => (
              <button
                key={m}
                onClick={() => setImportMode(m)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  importMode === m
                    ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900"
                    : "bg-neutral-100 dark:bg-neutral-800 text-neutral-500 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                }`}
              >
                {m === "upsert" && "Upsert (skip conflicts)"}
                {m === "insert" && "Insert (fail on conflict)"}
                {m === "replace" && "Replace (delete + insert)"}
              </button>
            ))}
          </div>

          <label
            className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 border-dashed cursor-pointer transition-all ${
              importStatus === "loading"
                ? "border-blue-300 dark:border-blue-700 opacity-60 pointer-events-none"
                : "border-neutral-200 dark:border-neutral-700 hover:border-blue-400 dark:hover:border-blue-600"
            }`}
          >
            <svg
              className="w-5 h-5 text-neutral-400 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 9v6m0-6l-3 3m3-3l3 3M4 16l.621 2.485A2 2 0 006.561 20h10.878a2 2 0 001.94-1.515L20 16M4 8l.621-2.485A2 2 0 016.561 4h10.878a2 2 0 011.94 1.515L20 8" />
            </svg>
            <span className="text-sm text-neutral-500 dark:text-neutral-400">
              {importStatus === "loading"
                ? "Importing…"
                : "Click to select a JSON export file"}
            </span>
            <input
              ref={fileRef}
              type="file"
              accept=".json,application/json"
              className="hidden"
              onChange={handleImport}
              disabled={importStatus === "loading"}
            />
          </label>

          {/* Import Results */}
          {importStatus === "success" && importResults && (
            <div className="mt-4 rounded-xl border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/30 overflow-hidden">
              <div className="px-4 py-2 border-b border-green-200 dark:border-green-900">
                <span className="text-xs font-semibold text-green-700 dark:text-green-400">
                  Import successful
                </span>
              </div>
              <table className="w-full text-xs">
                <tbody>
                  {Object.entries(importResults).map(([table, res]) => (
                    <tr
                      key={table}
                      className="border-b border-green-100 dark:border-green-900/50 last:border-0"
                    >
                      <td className="px-4 py-2 font-mono text-neutral-700 dark:text-neutral-300">
                        {table}
                      </td>
                      <td className="px-4 py-2 text-right">
                        {res.error ? (
                          <span className="text-red-600 dark:text-red-400">
                            {res.error}
                          </span>
                        ) : (
                          <span className="text-green-700 dark:text-green-400">
                            {res.count} row{res.count !== 1 ? "s" : ""}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {importStatus === "error" && importError && (
            <div className="mt-4 px-4 py-3 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 text-xs text-red-700 dark:text-red-400">
              {importError}
            </div>
          )}
        </section>

        <p className="mt-6 text-center text-xs text-neutral-400">
          Protect this route with authentication before deploying to production.
        </p>
      </div>
    </div>
  );
}
