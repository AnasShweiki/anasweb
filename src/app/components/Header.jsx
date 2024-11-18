"use client";
import React from "react";
import { FloatingNav } from "../components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export function NavHeader() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-5 w-5 text-neutral-500 dark:text-white" />, // Slightly larger icon
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      link: "/skills",
      icon: <IconMessage className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <IconMessage className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <div className="w-auto mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
