export default function DashboardTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>我是Template</div>
      {children}
    </div>
  );
}
