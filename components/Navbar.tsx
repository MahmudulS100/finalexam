"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Home,
  User,
  Settings,
  FileText,
  Mail,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 mr-8">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-primary">MyApp</span>
        </Link>

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList>
            {/* Home Link */}
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Home className="mr-2 h-4 w-4 text-accent" />
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Features Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <FileText className="mr-2 h-4 w-4 text-secondary" />
                Features
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[400px] md:grid-cols-2">
                  <ListItem
                    href="/dashboard"
                    title="Dashboard"
                    icon={<FileText className="h-5 w-5 text-primary" />}
                  >
                    View your personal dashboard and analytics.
                  </ListItem>
                  <ListItem
                    href="/reports"
                    title="Reports"
                    icon={<FileText className="h-5 w-5 text-secondary" />}
                  >
                    Generate and view detailed reports.
                  </ListItem>
                  <ListItem
                    href="/settings"
                    title="Settings"
                    icon={<Settings className="h-5 w-5 text-accent" />}
                  >
                    Configure your application preferences.
                  </ListItem>
                  <ListItem
                    href="/profile"
                    title="Profile"
                    icon={<User className="h-5 w-5 text-primary" />}
                  >
                    Manage your account and profile settings.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Exam 1 Link */}
            <NavigationMenuItem>
              <NavigationMenuLink
                href="https://exam-1-umber.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className={navigationMenuTriggerStyle()}
              >
                <Mail className="mr-2 h-4 w-4 text-secondary" />
                Exam 1
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Git 1 Link */}
            <NavigationMenuItem>
              <NavigationMenuLink
                href="https://github.com/MahmudulS100/Exam-1"
                target="_blank"
                rel="noopener noreferrer"
                className={navigationMenuTriggerStyle()}
              >
                <HelpCircle className="mr-2 h-4 w-4 text-accent" />
                Git 1
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}

interface ListItemProps {
  href: string;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

function ListItem({ href, title, icon, children }: ListItemProps) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors",
            "hover:bg-muted hover:text-foreground focus:bg-muted"
          )}
        >
          <div className="flex items-center gap-2">
            {icon}
            <div className="text-sm font-medium leading-none text-foreground">
              {title}
            </div>
          </div>
          <p className="mt-2 line-clamp-2 text-sm leading-snug text-foreground/70">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}


