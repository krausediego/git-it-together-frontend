import { useContributionGetContributions } from "@/api/generated";
import {
  CalendarHeatmap,
  CalendarHeatmapBlock,
  CalendarHeatmapBody,
  CalendarHeatmapFooter,
  CalendarHeatmapLegend,
  CalendarHeatmapStat,
} from "@/components/ui/calendar-heatmap";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

export function DashboardHeatmap() {
  const { data } = useContributionGetContributions();

  return (
    <Card>
      <CardContent>
        <TooltipProvider delayDuration={0}>
          <CalendarHeatmap
            data={
              data?.days?.map((day) => {
                return { date: day.date, value: day.count };
              }) ?? []
            }
            blockMargin={8}
            blockSize={18}
            locale={ptBR}
          >
            <CalendarHeatmapBody
              // hideMonthLabels
              // hideWeekdayLabels
              hideYearLabel
            >
              {({ activity, dayIndex, weekIndex }) => (
                <Tooltip>
                  <TooltipTrigger tabIndex={0} asChild>
                    <CalendarHeatmapBlock
                      activity={activity}
                      dayIndex={dayIndex}
                      weekIndex={weekIndex}
                    />
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    className="pointer-events-none text-xs"
                    sideOffset={6}
                  >
                    <p className="font-medium">
                      {format(parseISO(activity.date), "PPP", { locale: ptBR })}
                    </p>
                    <p className="text-muted-foreground">
                      {activity.value} contribution
                      {activity.value !== 1 ? "s" : ""}
                    </p>
                  </TooltipContent>
                </Tooltip>
              )}
            </CalendarHeatmapBody>
            {/* <CalendarHeatmapFooter>
              <CalendarHeatmapStat />
              <CalendarHeatmapLegend />
            </CalendarHeatmapFooter> */}
          </CalendarHeatmap>
        </TooltipProvider>
      </CardContent>
    </Card>
  );
}
