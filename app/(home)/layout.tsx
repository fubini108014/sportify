import { BasicBottomNavigaion } from "@/app/components/BasicBottomNavigaion";
import { CustomAppBar } from "@/app/components/CustomAppBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CustomAppBar />
      {children}
      <BasicBottomNavigaion />
    </>
  );
}
