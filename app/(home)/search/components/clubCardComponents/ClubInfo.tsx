import React from "react";
import {
  Menu,
  Box,
  IconButton,
  ListItemIcon,
  MenuItem,
  Stack,
  Tooltip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import BasicTag, { BasicTagProps } from "@/app/components/BasicTag";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MoreVertIcon from "@mui/icons-material/MoreVert";
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
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ShareIcon fontSize="small" />
          </ListItemIcon>
          分享
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <BookmarkIcon fontSize="small" />
          </ListItemIcon>
          追蹤
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ThumbDownAltIcon fontSize="small" />
          </ListItemIcon>
          檢舉
        </MenuItem>
      </Menu>
    </ClubInfoWrapper>
  );
};
