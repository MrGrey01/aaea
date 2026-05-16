/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import * as schema from "@/lib/db/schema";

const DRIZZLE_SYMBOL = Symbol.for("drizzle:IsDrizzleTable");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isDrizzleTable(v: unknown): boolean {
  if (!v || typeof v !== "object") return false;
  if ((v as any)[DRIZZLE_SYMBOL] === true) return true;
  if (typeof (v as any).getSQL === "function" && "_" in (v as any)) return true;
  return false;
}

export async function GET() {
  const tables = Object.entries(schema)
    .filter(([, v]) => isDrizzleTable(v))
    .map(([name]) => name);

  return NextResponse.json({ tables });
}
