import { authClient } from "@/lib/auth-client";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_app")({
  beforeLoad: async () => {
    const { data, error } = await authClient.getSession();

    if (!data || error) {
      redirect({ to: "/sign-in" });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <Outlet />;
}
