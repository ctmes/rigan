import type { NavigationItem } from "./NavBar";

export const marketingNavigationItems: NavigationItem[] = [
  { name: "Services", to: "/#services" },
  { name: "Work", to: "/#work" },
  { name: "About", to: "/#about" },
  { name: "Contact", to: "/#contact" },
] as const;

export const demoNavigationitems: NavigationItem[] = [
  { name: "Services", to: "/#services" },
  { name: "Work", to: "/#work" },
  { name: "About", to: "/#about" },
  { name: "Contact", to: "/#contact" },
] as const;
