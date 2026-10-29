import { Link, useLocation } from "@tanstack/react-router";
import { LogoPrimaryWithName } from "../logo-primary-with-name";
import { Button } from "../ui/button";
import { applicationMenuItems } from "./helpers";

export function ApplicationMenu() {
  const { pathname } = useLocation();

  return (
    <div className="flex h-16 shadow-sm bg-card">
      <div className="flex items-center container mx-auto gap-10">
        <LogoPrimaryWithName />

        <div className="space-x-2">
          {applicationMenuItems.map((item) => {
            return (
              <Button
                variant={pathname.includes(item.to) ? "secondary" : "ghost"}
                asChild
              >
                <Link to={item.to}>{item.name}</Link>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
