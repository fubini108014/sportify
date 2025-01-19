"use client";
import React from "react";
import { useRouter } from "next/navigation";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import IconButton from "@mui/material/IconButton";

export const GoBackButton = () => {
  const router = useRouter();
  return (
    <IconButton
      aria-label="goBack"
      onClick={() => {
        router.back();
      }}
    >
      <KeyboardBackspaceIcon />
    </IconButton>
  );
};
