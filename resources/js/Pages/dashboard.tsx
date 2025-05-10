import AppLayout from "@/layouts/app-dashboard-layout"
import type { PageProps } from "@/types"
import { Head } from "@inertiajs/react"
import { CardHeader } from "@/components/ui/card"

export default function Dashboard({ auth }: PageProps) {
  return (
    <>
      <Head title="Dashboard" />

      <CardHeader
        title="Dashboard"
        description={`Hello, ${auth.user.name}! This is your dashboard.`}
      />
    </>
  )
}

Dashboard.layout = (page: any) => <AppLayout children={page} />
