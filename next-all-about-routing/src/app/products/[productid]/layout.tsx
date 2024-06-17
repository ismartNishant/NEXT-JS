export default function ProductDetailsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
            <div>
                <h2>Features product</h2>
            </div>
        </>
    );
}
