import { LandingMenu } from "@/components/landing-menu";
import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import {
  LandingHeader,
  LandingHowItWorkSection,
  LandingResourcesSection,
} from "@/modules/landing";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div id="container">
      <LandingMenu />

      <LandingHeader />
      <LandingResourcesSection />
      <LandingHowItWorkSection />

      <div className="bg-foreground w-full">
        <div className="container mx-auto py-20 flex items-center justify-between">
          <div>
            <h1 className="text-4xl text-background font-bold">
              Comece seu streak hoje
            </h1>
            <p className="text-muted/60">Leva menos de um minuto</p>
          </div>

          <Button variant="secondary" size="lg">
            <GitHubLogoIcon />
            Entrar com Github
          </Button>
        </div>
      </div>

      <div className="container mx-auto py-6 flex items-center justify-between">
        <p className="text-muted-foreground">
          Git It Together · projeto open source
        </p>

        <Button variant="link">Github do projeto</Button>
      </div>
    </div>
  );
}
