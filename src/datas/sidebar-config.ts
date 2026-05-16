/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/sidebar-config.ts
import {
  ChartNoAxesCombinedIcon,
  ContactRoundIcon,
  FolderKanbanIcon,
  Globe2Icon,
  HomeIcon,
  ImagesIcon,
  InboxIcon,
  NotebookTabsIcon,
  ShieldCheckIcon,
  MessageSquareText,
  RssIcon,
  MailQuestionMarkIcon,
  LayoutTemplateIcon,
  // GalleryHorizontalIcon,
  GalleryHorizontalEndIcon,
} from "lucide-react";

import { UserRole } from "@/lib/permissions";

type SidebarItem = {
  title: string;
  url: string;
  icon: any;
};

type SidebarGroupConfig = {
  label: string;
  roles: UserRole[];
  items: SidebarItem[];
};

export const sidebarGroups: SidebarGroupConfig[] = [
  {
    label: "Menu",
    roles: ["client", "photographer"],
    items: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: ChartNoAxesCombinedIcon,
      },
      {
        title: "Website",
        url: "/",
        icon: HomeIcon,
      },
      {
        title: "Shared Albums",
        url: "/album",
        icon: Globe2Icon,
      },
    ],
  },

  {
    label: "Studio",
    roles: ["photographer", "admin", "super_admin"],
    items: [
      {
        title: "Albums",
        url: "/dashboard/albums",
        icon: FolderKanbanIcon,
      },
      {
        title: "Clients",
        url: "/dashboard/clients",
        icon: ContactRoundIcon,
      },
    ],
  },

  {
    label: "Admin",
    roles: ["admin", "super_admin"],
    items: [
      {
        title: "Control Center",
        url: "/dashboard/admin",
        icon: ShieldCheckIcon,
      },
      {
        title: "Site Settings",
        url: "/dashboard/admin/settings",
        icon: ShieldCheckIcon,
      },
      {
        title: "Testimonials",
        url: "/dashboard/admin/testimonials",
        icon: MessageSquareText,
      },
      {
        title: "Blog",
        url: "/dashboard/admin/blog",
        icon: RssIcon,
      },
      {
        title: "Faq",
        url: "/dashboard/admin/templates/faq",
        icon: MailQuestionMarkIcon,
      },
      {
        title: "Sections",
        url: "/dashboard/admin/templates/sections",
        icon: LayoutTemplateIcon,
      },
    ],
  },
];
