import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import BasicTag, { BasicTagProps } from "@/app/components/BasicTag";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ClubInfoWrapper = styled("div")(() => ({
  textAlign: "start",
  flex: 1,
}));
const ClubInfoBox = styled("div")(() => ({
  cursor: "pointer",
  "& .title": {
    color: "#7d6909",
    fontWeight: "500",
  },
  "& .location": {
    fontSize: "12px",
    // "& svg": {
    //   fontSize: "12px",
    // },
  },
  "& .description": { fontSize: "12px" },
}));

interface ClubInfoProps {
  title: string;
  description: string;
  location: string;
  tags: BasicTagProps[];
  onClick: () => void;
}

export const ClubInfo = ({
  tags,
  onClick,
  title,
  description,
  location,
}: ClubInfoProps) => {
  return (
    <ClubInfoWrapper>
      <Box>
        {tags.map((tag) => (
          <BasicTag
            key={tag.text}
            show={tag.show}
            color={tag.color}
            text={tag.text}
            href={tag.href}
          />
        ))}
      </Box>
      <ClubInfoBox onClick={onClick}>
        <Box className="title">{title}</Box>
        <Box className="location">
          <LocationOnIcon fontSize="inherit" />
          {location}
        </Box>
        <Box className="description">{description}</Box>
      </ClubInfoBox>
    </ClubInfoWrapper>
  );
};
