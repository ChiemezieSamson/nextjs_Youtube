import Card from "@/Components/card"
import Link from "next/link"


const ArchivedNotifications = () => {
  return (
    <Card>
      <h1>Archived Notifications</h1>
      <div>
        <Link href={"/dashboard/complex-dashboard"}>Default</Link>
      </div>
    </Card>
  )
}

export default ArchivedNotifications
