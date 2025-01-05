"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
interface BasicTagProps {
  text: string;
  color: "primary" | "secondary" | "success" | "error" | "info" | "warning";
  href: string;
  show?: boolean;
}
const BasicTag = (props: BasicTagProps) => {
  const { text, color, href, show = true } = props;
  const router = useRouter();
  if (!show) return null;
  return (
    <Button
      variant="outlined"
      size="small"
      color={color}
      onClick={() => router.push(href)}
    >
      {text}
    </Button>
  );
};

export default BasicTag;
