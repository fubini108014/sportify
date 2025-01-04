"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { Container } from "@mui/material";

const heights = [
  150, 60, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80,
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));
export default function SearchPage() {
  //TODO:卡片式UI設計
  return (
    <Container maxWidth="md">
      <Box sx={{ height: 150, backgroundColor: "#ddd" }}>篩選條件區</Box>

      <Box sx={{ minHeight: 393 }}>
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={0}>
          {heights.map((height, index) => (
            <Item key={index} sx={{ height }}>
              社團 NO.{index + 1}
            </Item>
          ))}
        </Masonry>
      </Box>
    </Container>
  );
}
