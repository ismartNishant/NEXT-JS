import Card from "@/Components/card";
import Link from "next/link";


export default function ArchivedNotifications() {
    return (
        <Card>
            <div><h1 className="text-2xl">Archived Notifications</h1> </div>
            <Link className="text-sky-500 font-bold text-2xl mx-4" href='/complex-dashboard'>Default</Link>
        </Card>
    );
}