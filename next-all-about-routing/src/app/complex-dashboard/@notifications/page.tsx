import Card from "@/Components/card";
import Link from "next/link";


export default function Notifications() {
  return (
    <Card>
      <div><h1 className="text-2xl">Default Notifications</h1> </div>
      <Link className="text-red-500 font-bold text-2xl mx-4" href='/complex-dashboard/archived'>Archieved</Link>
    </Card>
  );
}