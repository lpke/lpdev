export default function TodoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[100svh] w-screen flex-col items-center justify-center sm:min-h-screen">
      {children}
    </div>
  );
}
