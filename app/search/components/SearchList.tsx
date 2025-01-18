"use client";
import { Masonry } from "@mui/lab";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
import React from "react";
import ClubCard from "./ClubCard";
import { ClubInfoDialog } from "./ClubInfoDialog";
import { ActivityRegisterDialog } from "./ActivityRegisterDialog";
import { SearchConditions } from "./SearchConditions";
interface Club {
  id: string;
  name: string;
  areaCode: string;
  categoryCode: string;
  activity?: {
    id: string;
    name: string;
    date: string;
    time: string;
    location: string;
    description: string;
  }[];
}
const clubData: Club[] = [
  {
    id: "1",
    name: "社團 NO.1",
    areaCode: "taitung",
    categoryCode: "volleyball",
    activity: [
      {
        id: "1",
        name: "揪團活動1",
        date: "2025-01-01",
        time: "10:00",
        location: "台北市",
        description: "活動1的描述",
      },
    ],
  },
  {
    id: "2",
    name: "社團 NO.2",
    areaCode: "chiayi",
    categoryCode: "basketball",
    activity: [
      {
        id: "2",
        name: "揪團活動2",
        date: "2025-01-01",
        time: "10:00",
        location: "台北市",
        description: "活動2的描述",
      },
    ],
  },
  { id: "3", name: "社團 NO.3", areaCode: "hsinchu", categoryCode: "football" },
  {
    id: "4",
    name: "社團 NO.4",
    areaCode: "taichung",
    categoryCode: "volleyball",
    activity: [
      {
        id: "4",
        name: "揪團活動4",
        date: "2025-01-01",
        time: "10:00",
        location: "台北市",
        description: "活動4的描述",
      },
    ],
  },
  {
    id: "5",
    name: "社團 NO.5",
    areaCode: "chiayi",
    categoryCode: "basketball",
    activity: [
      {
        id: "5",
        name: "揪團活動5",
        date: "2025-01-01",
        time: "10:00",
        location: "台北市",
        description: "活動5的描述",
      },
    ],
  },
  { id: "6", name: "社團 NO.6", areaCode: "tpe", categoryCode: "football" },
  {
    id: "7",
    name: "社團 NO.7",
    areaCode: "taitung",
    categoryCode: "volleyball",
    activity: [
      {
        id: "7",
        name: "揪團活動7",
        date: "2025-01-01",
        time: "10:00",
        location: "台北市",
        description: "活動7的描述",
      },
    ],
  },
  {
    id: "8",
    name: "社團 NO.8",
    areaCode: "chiayi",
    categoryCode: "basketball",
    activity: [
      {
        id: "8",
        name: "揪團活動8",
        date: "2025-01-01",
        time: "10:00",
        location: "台北市",
        description: "活動8的描述",
      },
    ],
  },
  { id: "9", name: "社團 NO.9", areaCode: "tpe", categoryCode: "football" },
  {
    id: "10",
    name: "社團 NO.10",
    areaCode: "ntpc",
    categoryCode: "volleyball",
    activity: [
      {
        id: "10",
        name: "揪團活動10",
        date: "2025-01-01",
        time: "10:00",
        location: "台北市",
        description: "活動10的描述",
      },
    ],
  },
];

export const SearchList = () => {
  //TODO:卡片式UI設計
  const [
    { openClubDialog, selectedClubId, openActivityDialog, selectedActivityId },
    setDialog,
  ] = React.useState<{
    openClubDialog: boolean;
    selectedClubId: string;
    openActivityDialog: boolean;
    selectedActivityId: string;
  }>({
    openClubDialog: false,
    selectedClubId: "",
    openActivityDialog: false,
    selectedActivityId: "",
  });
  const handleClickOpenClubDialog = (clubId: string) => {
    setDialog((prev) => ({
      ...prev,
      openClubDialog: true,
      selectedClubId: clubId,
    }));
  };
  const handleClickOpenActivityDialog = (activityId: string) => {
    setDialog((prev) => ({
      ...prev,
      openActivityDialog: true,
      selectedActivityId: activityId,
    }));
  };

  const handleClose = () => {
    setDialog((prev) => ({
      ...prev,
      openClubDialog: false,
      openActivityDialog: false,
      selectedClubId: "",
      selectedActivityId: "",
    }));
  };
  console.log("clubData:", clubData);
  return (
    <Container maxWidth="md">
      <SearchConditions />

      <Box sx={{ minHeight: 393 }}>
        <Masonry sx={{ m: 0 }} columns={{ xs: 1, sm: 2, md: 3 }} spacing={1}>
          {clubData.map((club) => (
            <ClubCard
              key={club.id}
              {...club}
              onClickOpenClubDialog={handleClickOpenClubDialog}
              onClickOpenActivityDialog={handleClickOpenActivityDialog}
            />
          ))}
        </Masonry>
      </Box>

      <ClubInfoDialog
        open={openClubDialog}
        onClose={handleClose}
        clubId={selectedClubId}
      />
      <ActivityRegisterDialog
        open={openActivityDialog}
        onClose={handleClose}
        activityId={selectedActivityId}
      />
    </Container>
  );
};
