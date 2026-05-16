/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import * as schema from "@/lib/db/schema";

const DRIZZLE_SYMBOL = Symbol.for("drizzle:IsDrizzleTable");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isDrizzleTable(v: unknown): boolean {
  if (!v || typeof v !== "object") return false;
  if ((v as any)[DRIZZLE_SYMBOL] === true) return true;
  if (typeof (v as any).getSQL === "function" && "_" in (v as any)) return true;
  return false;
}

type ImportMode = "upsert" | "insert" | "replace";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      data: Record<string, Record<string, unknown>[]>;
      mode?: ImportMode;
    };
    const { data, mode = "upsert" } = body;

    const results: Record<string, { count: number; error?: string }> = {};
    const entries = Object.entries(schema) as [string, unknown][];

    for (const [tableName, rows] of Object.entries(data)) {
      const tableEntry = entries.find(([name]) => name === tableName);

      if (!tableEntry || !isDrizzleTable(tableEntry[1])) {
        results[tableName] = { count: 0, error: "Table not found in schema" };
        continue;
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const table = tableEntry[1] as any;

      if (!rows?.length) {
        results[tableName] = { count: 0 };
        continue;
      }

      try {
        if (mode === "replace") {
          await db.delete(table);
          await db.insert(table).values(rows);
        } else if (mode === "upsert") {
          await db.insert(table).values(rows).onConflictDoNothing();
        } else {
          // "insert" — will throw on conflict
          await db.insert(table).values(rows);
        }
        results[tableName] = { count: rows.length };
      } catch (err: unknown) {
        results[tableName] = {
          count: 0,
          error: err instanceof Error ? err.message : "Unknown error",
        };
      }
    }

    return NextResponse.json({ success: true, results });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
