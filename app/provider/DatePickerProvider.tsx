"use client";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const DatePickerProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"zh-tw"}>
      {children}
    </LocalizationProvider>
  );
};
