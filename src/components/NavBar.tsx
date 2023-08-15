"use client";
import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Glasses } from "lucide-react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Location Detection",
    href: "/docs/ar-navigation/location-detection",
    description:
      "Determines the user's precise location using computer vision and AR technology.",
  },
  {
    title: "AR Wayfinding",
    href: "/docs/ar-navigation/wayfinding",
    description:
      "Guides users through indoor spaces using augmented reality overlays and directions.",
  },
  {
    title: "Landmark Recognition",
    href: "/docs/ar-navigation/landmark-recognition",
    description:
      "Identifies and provides information about significant landmarks in the user's surroundings.",
  },
  {
    title: "Interactive Maps",
    href: "/docs/ar-navigation/interactive-maps",
    description:
      "Displays an interactive AR map with real-time navigation cues and points of interest.",
  },
  {
    title: "Route Visualization",
    href: "/docs/ar-navigation/route-visualization",
    description:
      "Visualizes recommended routes and directions in the user's physical environment.",
  },
  {
    title: "Contextual Information",
    href: "/docs/ar-navigation/contextual-info",
    description:
      "Delivers contextual information about objects and areas as users navigate through AR.",
  },
];

export default function NavigationMenuDemo() {
  return (
    <div className="flex-row justify-center bg-black rounded-b-3xl py-6 -mx-32 shadow-2xl  flex ">
      <NavigationMenu className="w-full flex justify-center flex-row dark text-white">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                <li className='row-span-3'>
                  <NavigationMenuLink asChild>
                    <a
                      className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                      href='/'
                    >
                      <Glasses size={30} />
                      <div className='mb-2 mt-4 text-lg font-medium'>
                        Want a demo?
                      </div>
                      <p className='text-sm leading-tight text-muted-foreground'>
                        See how you can get a demo of our app
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href='/' title='Introduction'>
                  See how we got started with our app
                </ListItem>
                <ListItem href='/' title='Installation'>
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href='/' title='Contact Us'>
                  Need help? Contact us
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Aspects of our app</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/docs' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Documentation
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
</div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
