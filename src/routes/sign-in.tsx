import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sign-in")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-muted-foreground/20">
      <div className="rounded-md shadow-md p-4"></div>
    </div>
  );
}
