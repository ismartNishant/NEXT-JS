
export default function Authlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <div>
        <h2>Inner Layout</h2>
      </div>
    </>
  );
}