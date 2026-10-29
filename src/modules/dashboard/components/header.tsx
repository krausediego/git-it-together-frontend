import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function DashboardHeader() {
  return (
    <div className="flex justify-between">
      <div className="space-y-2">
        <span className="text-sm font-mono text-muted-foreground">
          DASHBOARD
        </span>
        <h1 className="text-3xl font-bold">Olá, @usuario</h1>
        <p className="text-xs text-muted-foreground">
          Última sincronização com o Github: há 12 min
        </p>
      </div>

      <Tabs className="mt-auto">
        <TabsList defaultValue="30">
          <TabsTrigger value="7">7 dias</TabsTrigger>
          <TabsTrigger value="30">30 dias</TabsTrigger>
          <TabsTrigger value="365">12 meses</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
