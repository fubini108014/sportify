import { GoBackButton } from "./components/GoBackButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <GoBackButton />
      {children}
    </>
  );
}
