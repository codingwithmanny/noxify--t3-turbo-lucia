import type { Metadata } from "next"

import { Separator } from "@acme/ui/separator"

import { SettingsSidebar } from "@/app/(authorized)/users/settings/components/settings-sidebar"

export const metadata: Metadata = {
  title: "User settings",
  description: "Advanced form example using react-hook-form and Zod.",
}

const navItems = [
  {
    title: "Profile",
    href: "/users/settings",
  },
  {
    title: "Sessions",
    href: "/users/settings/sessions",
  },
]

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className="hidden space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">Manage your account settings</p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SettingsSidebar items={navItems} />
          </aside>
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </>
  )
}
