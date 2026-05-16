import { authIsRequired } from "@/lib/auth-utils";
import { AdminControlCenterView } from "@/features/dashboard/views/admin-control-center-view";
import { PhotographerDashboardView } from "@/features/dashboard/views/photographer-dashboard-view";

const Page = async () => {
  const session = await authIsRequired();

  if (session.user.role === "admin" || session.user.role === "super_admin") {
    return (
      <AdminControlCenterView
        isSuperAdmin={session.user.role === "super_admin"}
      />
    );
  }

  if (session.user.role === "photographer") {
    return <PhotographerDashboardView userId={session.user.id} />;
  }

  return <>Welcome</>;
};

export default Page;
