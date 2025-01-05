"use client";
import { Masonry } from "@mui/lab";
import { Box } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { Container } from "@mui/material";
import React from "react";
import ClubCard from "./ClubCard";
import ClubInfoDialog from "./ClubInfoDialog";

const clubData = [
  {
    id: "1",
    name: "社團 NO.1",
    areaCode: "taitung",
    categoryCode: "volleyball",
  },
  {
    id: "2",
    name: "社團 NO.2",
    areaCode: "chiayi",
    categoryCode: "basketball",
  },
  { id: "3", name: "社團 NO.3", areaCode: "hsinchu", categoryCode: "football" },
  {
    id: "4",
    name: "社團 NO.4",
    areaCode: "taichung",
    categoryCode: "volleyball",
  },
  {
    id: "5",
    name: "社團 NO.5",
    areaCode: "chiayi",
    categoryCode: "basketball",
  },
  { id: "6", name: "社團 NO.6", areaCode: "tpe", categoryCode: "football" },
  {
    id: "7",
    name: "社團 NO.7",
    areaCode: "taitung",
    categoryCode: "volleyball",
  },
  {
    id: "8",
    name: "社團 NO.8",
    areaCode: "chiayi",
    categoryCode: "basketball",
  },
  { id: "9", name: "社團 NO.9", areaCode: "tpe", categoryCode: "football" },
  {
    id: "10",
    name: "社團 NO.10",
    areaCode: "ntpc",
    categoryCode: "volleyball",
  },
];

export const SearchList = () => {
  const searchParams = useSearchParams();
  const area = searchParams.get("area");
  const category = searchParams.get("category");

  //TODO:卡片式UI設計
  const [{ open, clubId }, setClub] = React.useState<{
    open: boolean;
    clubId: string;
  }>({ open: false, clubId: "" });
  const handleClickOpen = (id: string) => {
    setClub({ open: true, clubId: id });
  };

  const handleClose = () => {
    setClub((prev) => ({ ...prev, open: false, clubId: "" }));
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ height: 150, backgroundColor: "#ddd" }}>
        篩選條件區
        <div>您選了地區:{area || "全部"}</div>
        <div>您選了運動分類:{category || "全部"}</div>
      </Box>

      <Box sx={{ minHeight: 393 }}>
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={0}>
          {clubData.map((club) => (
            <ClubCard key={club.id} {...club} onClick={handleClickOpen} />
          ))}
        </Masonry>
      </Box>

      <ClubInfoDialog open={open} onClose={handleClose} id={clubId} />
    </Container>
  );
};
