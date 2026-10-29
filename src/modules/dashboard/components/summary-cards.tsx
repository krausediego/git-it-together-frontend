import { useContributionGetContributions } from "@/api/generated";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export function DashboardSummaryCards() {
  const { data } = useContributionGetContributions();

  return (
    <div className="grid grid-cols-4 gap-8">
      <Card>
        <CardContent>
          <CardTitle className="font-mono text-sm uppercase">
            Streak atual
          </CardTitle>
          <div className="flex items-end gap-1">
            <h1 className="text-4xl font-bold leading-none">
              {data?.currentStreak}
            </h1>
            <p className="text-muted-foreground">dias</p>
          </div>
          <div>
            <p className="text-muted-foreground font-medium">
              Recorde: {data?.longestStreak} dias
            </p>
            <p className="text-muted-foreground">
              {data?.streakAtRisk
                ? "Em risco se não commitar até as 23:59"
                : "Streak garantido hoje"}
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <CardTitle className="font-mono text-sm uppercase">
            Commits no período
          </CardTitle>
          <div className="flex items-end gap-1">
            <h1 className="text-4xl font-bold leading-none">
              {data?.totalContributions}
            </h1>
          </div>
          <div>
            <p className="text-muted-foreground font-medium">
              Recorde: {data?.longestStreak} dias
            </p>
            <p className="text-muted-foreground">
              {data?.streakAtRisk
                ? "Em risco se não commitar até as 23:59"
                : "Streak garantido hoje"}
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <CardTitle className="font-mono text-sm uppercase">
            Pull Requests
          </CardTitle>
          <div className="flex items-end gap-1">
            <h1 className="text-4xl font-bold leading-none">
              {data?.totalPullRequests}
            </h1>
          </div>
          <div>
            <p className="text-muted-foreground font-medium">
              Recorde: {data?.longestStreak} dias
            </p>
            <p className="text-muted-foreground">
              {data?.streakAtRisk
                ? "Em risco se não commitar até as 23:59"
                : "Streak garantido hoje"}
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <CardTitle className="font-mono text-sm uppercase">Issues</CardTitle>
          <div className="flex items-end gap-1">
            <h1 className="text-4xl font-bold leading-none">
              {data?.totalIssues}
            </h1>
          </div>
          <div>
            <p className="text-muted-foreground font-medium">
              Recorde: {data?.longestStreak} dias
            </p>
            <p className="text-muted-foreground">
              {data?.streakAtRisk
                ? "Em risco se não commitar até as 23:59"
                : "Streak garantido hoje"}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
