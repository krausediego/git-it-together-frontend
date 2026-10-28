import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { LogoPrimaryWithName } from "../logo-primary-with-name";
import { Button } from "../ui/button";
import { landingMenuItems } from "./helpers";
import { useNavigate } from "@tanstack/react-router";

export function LandingMenu() {
  const navigate = useNavigate();

  return (
    <header className="h-16 border-b flex">
      <div className="container mx-auto flex items-center gap-12">
        <LogoPrimaryWithName />

        <div className="flex gap-8">
          {landingMenuItems.map((menu) => {
            return (
              <Button variant="link" className="">
                {menu.name}
              </Button>
            );
          })}
        </div>

        <Button
          variant="outline"
          className="ml-auto"
          onClick={() => navigate({ to: "/sign-in" })}
        >
          <GitHubLogoIcon />
          Entrar com Github
        </Button>
      </div>
    </header>
  );
}
