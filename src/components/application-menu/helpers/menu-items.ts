import type { LinkProps } from "@tanstack/react-router";

type AppRouteToProps = NonNullable<LinkProps["to"]>;

type ApplicationMenuItems = {
  name: string;
  to: AppRouteToProps;
};

export const applicationMenuItems: ApplicationMenuItems[] = [
  {
    name: "Dashboard",
    to: "/dashboard",
  },
  {
    name: "Grupos",
    to: "/groups",
  },
  {
    name: "Desafios",
    to: "/challenges",
  },
  {
    name: "Perfil",
    to: "/profile",
  },
];
