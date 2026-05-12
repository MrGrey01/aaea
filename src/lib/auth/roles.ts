// import { UserRole } from "./permissions";

// import { getSession } from ".";
import { UserRole } from "@/lib/db/schema";

export const ROLE_HIERARCHY: Record<UserRole, number> = {
  user: 0,
  client: 1,
  photographer: 2,
  admin: 3,
  super_admin: 4,
};

export const hasRole = (userRole: UserRole, requiredRole: UserRole) =>
  ROLE_HIERARCHY[userRole] >= ROLE_HIERARCHY[requiredRole];
