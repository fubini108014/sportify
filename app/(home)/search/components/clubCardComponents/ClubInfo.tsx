import React, { JSX } from "react";
import { Box, IconButton, Stack, Tooltip, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import BasicTag, { BasicTagProps } from "@/app/components/BasicTag";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { MoreActionMenu } from "./MoreActionMenu";
import { MoreActionDrawer } from "./MoreActionDrawer";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShareIcon from "@mui/icons-material/Share";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

const ClubInfoWrapper = styled("div")(() => ({
  textAlign: "start",
  flex: 1,
}));
const ClubInfoBox = styled("div")(() => ({
  cursor: "pointer",
  "& .title": {
    color: "#7d6909",
    fontWeight: "500",
    fontSize: "16px",
  },
  "& .location": {
    fontSize: "14px",
    // "& svg": {
    //   fontSize: "12px",
    // },
  },
  "& .description": { fontSize: "14px" },
}));

export type ClubActionOption = {
  value: string;
  text: string;
  icon: JSX.Element;
};
export const clubActionOptions: ClubActionOption[] = [
  { value: "share", text: "分享", icon: <ShareIcon fontSize="small" /> },
  { value: "follow", text: "追蹤", icon: <BookmarkIcon fontSize="small" /> },
  { value: "hate", text: "檢舉", icon: <ThumbDownAltIcon fontSize="small" /> },
];

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
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickAction = (actionType: string) => {
    console.log("cation:", actionType);
  };
  return (
    <ClubInfoWrapper>
      <Stack direction={"row"} justifyContent="space-between">
        <div>
          {tags.map((tag) => (
            <BasicTag
              key={tag.text}
              show={tag.show}
              color={tag.color}
              text={tag.text}
              href={tag.href}
            />
          ))}
        </div>
        <div>
          1天
          <Tooltip title="更多功能">
            <IconButton
              type="button"
              size="small"
              //sx={{ p: "10px" }}
              aria-label="more action"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
          </Tooltip>
        </div>
      </Stack>
      <ClubInfoBox onClick={onClick}>
        <Box className="title">{title}</Box>
        <Box className="location">
          <LocationOnIcon fontSize="inherit" />
          {location}
        </Box>
        <Box className="description">{description}</Box>
      </ClubInfoBox>
      {isMobile ? (
        <MoreActionDrawer
          options={clubActionOptions}
          open={open}
          onClose={handleClose}
          onClick={handleClickAction}
          clubId={"123"}
        />
      ) : (
        <MoreActionMenu
          options={clubActionOptions}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          onClick={handleClickAction}
          clubId={"123"}
        />
      )}
    </ClubInfoWrapper>
  );
};
