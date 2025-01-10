import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import BasicTag from "@/app/components/BasicTag";
import Box from "@mui/material/Box";
import { cityDictionary } from "@/app/constants/taiwanCity";
import { sportDictionary } from "@/app/constants/sportCategory";
import { Stack } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  //margin: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

interface ClubCardProps {
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
  onClickOpenClubDialog: (id: string) => void;
  onClickOpenActivityDialog: (id: string) => void;
}

const ClubCard = (props: ClubCardProps) => {
  const {
    id,
    name,
    areaCode,
    categoryCode,
    activity = [],
    onClickOpenClubDialog,
    onClickOpenActivityDialog,
  } = props;
  const area = cityDictionary[areaCode];
  const category = sportDictionary[categoryCode];
  return (
    <Item sx={{ height: 150 }}>
      <Box onClick={() => onClickOpenClubDialog(id)}>{name}</Box>
      <BasicTag
        show={!!area}
        color="primary"
        text={area?.name}
        href={`/search?area=${areaCode}`}
      />
      <BasicTag
        show={!!category}
        color="secondary"
        text={category?.name}
        href={`/search?category=${categoryCode}`}
      />
      <Stack direction="row" spacing={1} justifyContent="center">
        {activity.map((activity, idx) => (
          <Box
            key={idx}
            sx={{
              backgroundColor: "#111822",
              borderRadius: "4px",
              color: "#fff",
              padding: "4px 8px",
              margin: "4px",
              cursor: "pointer",
              width: "100px",
            }}
            onClick={() => onClickOpenActivityDialog(activity.id)}
          >
            {activity.name}
          </Box>
        ))}
      </Stack>
    </Item>
  );
};

export default ClubCard;
