"use client";
import { Masonry } from "@mui/lab";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
import React from "react";
import ClubCard from "./clubCardComponents/ClubCard";
import { ActivityRegisterDialog } from "./ActivityRegisterDialog";
import { SearchConditions } from "./SearchConditions";
import { useRouter } from "next/navigation";

export interface Club {
  id: string;
  name: string;
  description: string;
  location: string;
  areaCode: string;
  categoryCode: string;
  activity?: Activity[];
}
export interface Activity {
  id: string;
  name: string;
  date: string;
  time: string;
  location: string;
  description: string;
}
const clubData: Club[] = [
  {
    id: "1",
    name: "社團 NO.1",
    description: "團介紹1231321321",
    location: "桃園市",
    areaCode: "tyn",
    categoryCode: "volleyball",
    activity: [
      {
        id: "1",
        name: "揪團活動1",
        date: "2025-01-01",
        time: "10:00",
        location: "追求人生",
        description: "活動1的描述",
      },
      {
        id: "2",
        name: "消夜暢打",
        date: "2025-01-02",
        time: "23:00",
        location: "追求人生",
        description: "消夜暢打的描述",
      },
      {
        id: "3",
        name: "早起熱血開打",
        date: "2025-01-05",
        time: "6:00",
        location: "追求人生",
        description: "早起熱血開打的描述",
      },
      {
        id: "4",
        name: "打打打",
        date: "2025-01-06",
        time: "9:00",
        location: "告四排球館",
        description: "XXXXXXXX",
      },
    ],
  },
  {
    id: "2",
    name: "敦化排球",
    description: "團介紹1231321321",
    location: "台北市 松山區",
    areaCode: "tpe",
    categoryCode: "volleyball",
    activity: [
      {
        id: "2",
        name: "打球瞜",
        date: "2025-01-01",
        time: "14:00",
        location: "敦化國中",
        description: "活動2的描述",
      },
      {
        id: "5",
        name: "打球瞜",
        date: "2025-01-06",
        time: "14:00",
        location: "中崙高中",
        description: "活動2的描述",
      },
    ],
  },
  {
    id: "3",
    name: "社團 NO.3",
    description: "團介紹1231321321",
    location: "追求人生",
    areaCode: "hsinchu",
    categoryCode: "football",
  },
  {
    id: "4",
    name: "社團 NO.4",
    description: "團介紹1231321321",
    location: "追求人生",
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
    description: "團介紹1231321321",
    location: "追求人生",
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
  {
    id: "6",
    name: "社團 NO.6",
    description: "團介紹1231321321",
    location: "追求人生",
    areaCode: "tpe",
    categoryCode: "football",
  },
  {
    id: "7",
    name: "社團 NO.7",
    description: "團介紹1231321321",
    location: "追求人生",
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
    description: "團介紹1231321321",
    location: "追求人生",
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
  {
    id: "9",
    name: "社團 NO.9",
    description: "團介紹1231321321",
    location: "追求人生",
    areaCode: "tpe",
    categoryCode: "football",
  },
  {
    id: "10",
    name: "社團 NO.10",
    description: "團介紹1231321321",
    location: "追求人生",
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
  const router = useRouter();
  //TODO:卡片式UI設計
  const [{ openActivityDialog, selectedActivityId }, setDialog] =
    React.useState<{
      openActivityDialog: boolean;
      selectedActivityId: string;
    }>({
      openActivityDialog: false,
      selectedActivityId: "",
    });
  const handleClickGoClubPage = (clubId: string) => {
    router.push(`/club/${clubId}`);
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
      openActivityDialog: false,
      selectedActivityId: "",
    }));
  };

  return (
    <Container sx={{ padding: "0px 4px" }}>
      <SearchConditions />
      <Box sx={{ minHeight: 393 }}>
        <Masonry sx={{ m: 0 }} columns={{ xs: 1, sm: 2, md: 3 }} spacing={1.5}>
          {clubData.map((club) => (
            <ClubCard
              key={club.id}
              {...club}
              onClickGoClubPage={handleClickGoClubPage}
              onClickOpenActivityDialog={handleClickOpenActivityDialog}
            />
          ))}
        </Masonry>
      </Box>

      <ActivityRegisterDialog
        open={openActivityDialog}
        onClose={handleClose}
        activityId={selectedActivityId}
      />
    </Container>
  );
};
