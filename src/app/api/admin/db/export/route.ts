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

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const tables = searchParams.get("tables")?.split(",").filter(Boolean);

  try {
    const result: Record<string, unknown[]> = {};
    const entries = Object.entries(schema) as [string, unknown][];

    for (const [name, table] of entries) {
      if (!isDrizzleTable(table)) continue;
      if (tables && !tables.includes(name)) continue;

      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const rows = await db.select().from(table as any);
        result[name] = rows;
      } catch {
        // Skip anything that still can't be queried
      }
    }

    const json = JSON.stringify(result, null, 2);
    return new NextResponse(json, {
      headers: {
        "Content-Type": "application/json",
        "Content-Disposition": `attachment; filename="db-export-${Date.now()}.json"`,
      },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
