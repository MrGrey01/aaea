/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Drizzle marks every table with Symbol.for('drizzle:IsDrizzleTable') = true.
 * This is the most reliable way to detect a table vs a relation / enum / config.
 */
const DRIZZLE_TABLE_SYMBOL = Symbol.for("drizzle:IsDrizzleTable");

export function isDrizzleTable(value: unknown): boolean {
  if (!value || typeof value !== "object") return false;
  // Primary check: official Drizzle symbol
  if ((value as any)[DRIZZLE_TABLE_SYMBOL] === true) return true;
  // Fallback: Drizzle tables always have getSQL and a `_` config bag
  if (typeof (value as any).getSQL === "function" && "_" in (value as any))
    return true;
  return false;
}
