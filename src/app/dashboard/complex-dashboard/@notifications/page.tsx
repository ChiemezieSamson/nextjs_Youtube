import Card from "@/Components/card"
import Link from "next/link"


const Notifications = () => {
  return (
    <Card>
      <h1>Notifications</h1>
      <div>
       <Link href={"/dashboard/complex-dashboard/archived"}>Archived</Link>
      </div>
    </Card>
  )
}

export default Notifications
