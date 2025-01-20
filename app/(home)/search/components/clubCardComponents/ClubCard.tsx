import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { BasicTagProps } from "@/app/components/BasicTag";
import { cityDictionary } from "@/app/constants/taiwanCity";
import { sportDictionary } from "@/app/constants/sportCategory";
import { Stack } from "@mui/material";
import { ClubInfo } from "./ClubInfo";
import { ClubImage } from "./ClubImage";
import { Club } from "../SearchList";
import { ActivityCard } from "./ActivityCard";

const ClubCardPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  //height: 150,
  //margin: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

interface ClubCardProps extends Club {
  onClickGoClubPage: (id: string) => void;
  onClickOpenActivityDialog: (id: string) => void;
}

const ClubCard = (props: ClubCardProps) => {
  const {
    id,
    name,
    description,
    location,
    areaCode,
    categoryCode,
    activity = [],
    onClickGoClubPage,
    onClickOpenActivityDialog,
  } = props;

  const tags = genTags(areaCode, categoryCode);

  return (
    <ClubCardPaper>
      <Stack direction="row" spacing={1} justifyContent="space-between">
        <ClubImage />
        <ClubInfo
          tags={tags}
          onClick={() => onClickGoClubPage(id)}
          title={name}
          description={description}
          location={location}
        />
      </Stack>
      <Stack
        direction="row"
        spacing={1}
        justifyContent="start"
        sx={{ overflowX: "auto", marginTop: "4px" }}
      >
        {activity.map((activity, idx) => (
          <ActivityCard
            key={idx}
            onClick={() => onClickOpenActivityDialog(activity.id)}
            {...activity}
          />
        ))}
      </Stack>
    </ClubCardPaper>
  );
};

export default ClubCard;

function genTags(areaCode: string, categoryCode: string): BasicTagProps[] {
  const area = cityDictionary[areaCode];
  const category = sportDictionary[categoryCode];
  return [
    {
      show: !!area,
      color: "primary",
      text: area?.name,
      href: `/search?area=${areaCode}`,
    },
    {
      show: !!category,
      color: "secondary",
      text: category?.name,
      href: `/search?category=${categoryCode}`,
    },
  ];
}
