import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { Activity } from "../SearchList";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupsIcon from "@mui/icons-material/Groups";

const ActivityCardWrapper = styled(Box)(() => ({
  backgroundColor: "#111822",
  borderRadius: "4px",
  color: "#fff",
  padding: "4px 8px",
  margin: "4px",
  cursor: "pointer",
  minWidth: "140px",
  //width: "100px",
  //height: "46px",
  textAlign: "left",
  fontSize: "14px",
  whiteSpace: "nowrap",
}));

interface ActivityCardProps extends Activity {
  onClick: () => void;
}

export const ActivityCard = ({
  onClick,
  ...activityInfo
}: ActivityCardProps) => {
  const { name, date, location } = activityInfo;
  return (
    <ActivityCardWrapper onClick={onClick}>
      <Box className="activityName">
        <GroupsIcon fontSize="inherit" sx={{ mr: "4px" }} />
        {name}
      </Box>
      <Box className="activityDate">
        <CalendarMonthIcon fontSize="inherit" sx={{ mr: "4px" }} />
        {date}
      </Box>
      <Box className="activityLocation">
        <LocationOnIcon fontSize="inherit" sx={{ mr: "4px" }} />
        {location}
      </Box>
    </ActivityCardWrapper>
  );
};
