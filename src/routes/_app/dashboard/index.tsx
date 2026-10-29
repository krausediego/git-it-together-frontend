import { useContributionGetContributions } from "@/api/generated";
import {
  DashboardHeader,
  DashboardHeatmap,
  DashboardSummaryCards,
} from "@/modules/dashboard/components";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data } = useContributionGetContributions();

  console.log(data?.currentStreak);

  return (
    <div className="space-y-4">
      <DashboardHeader />
      <DashboardSummaryCards />
      <DashboardHeatmap />
    </div>
  );
}
