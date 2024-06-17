export default function DashboardLayout({
    children,
    users,
    notifications,
    revenue,
    login,
}: {
    children: React.ReactNode;
    users: React.ReactNode;
    notifications: React.ReactNode;
    revenue: React.ReactNode;
    login: React.ReactNode;

}) {
    const isloggedin = true;
    return isloggedin ? (
        <div className="mx-auto  text-center">
            <div> {children} </div>
            <div className="flex justify-center m-auto">
                <div className="flex  flex-col">
                    <div>{users}</div>
                    <div>{revenue}</div>
                </div>
                <div className="flex flex-1">{notifications}</div>
            </div>
        </div>
    ) : (
        login
    );
}
