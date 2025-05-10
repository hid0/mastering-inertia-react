"use client"

import { Avatar } from "@/components/ui/avatar"
import { Link } from "@/components/ui/link"
import {
  Sidebar,
  SidebarContent,
  SidebarDisclosure,
  SidebarDisclosurePanel,
  SidebarDisclosureTrigger,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarRail,
  SidebarSection,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import {
  IconBrandDiscord,
  IconDashboard,
  IconPlay,
  IconVideoPlaylist,
} from "@intentui/icons"

export default function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link
          className="flex items-center gap-x-2 group-data-[collapsible=dock]:size-10 group-data-[collapsible=dock]:justify-center"
          href=""
        >
          <IconBrandDiscord className="size-6 text-red-500" />
          <SidebarLabel className="font-medium">myApp</SidebarLabel>
        </Link>
      </SidebarHeader>
      <SidebarContent className="**:data-[slot=avatar]:*:size-5 **:data-[slot=avatar]:size-5 **:data-[slot=icon]:size-5">
        <SidebarSection>
          <SidebarItem>
            <IconDashboard />
            <SidebarLabel>Dashboard</SidebarLabel>
          </SidebarItem>
          <SidebarItem>
            <IconPlay />
            <SidebarLabel>Shorts</SidebarLabel>
          </SidebarItem>
          <SidebarItem>
            <IconVideoPlaylist />
            <SidebarLabel>Subscriptions</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

