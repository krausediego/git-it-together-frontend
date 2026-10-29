import { ApplicationMenu } from "@/components/application-menu";
import { authClient } from "@/lib/auth-client";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_app")({
  beforeLoad: async () => {
    const { data, error } = await authClient.getSession();

    if (!data?.session || error) {
      throw redirect({ to: "/sign-in", replace: true });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-full min-h-screen bg-muted/50">
      <ApplicationMenu />

      <div className="container mx-auto py-6">
        <Outlet />
      </div>
    </div>
  );
}
