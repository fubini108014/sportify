import { ListItemIcon } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Menu } from "@mui/material";
import React from "react";
import { ClubActionOption } from "./ClubInfo";

interface MoreActionMenuProps {
  options: ClubActionOption[];
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  onClick: (val: string) => void;
  clubId: string;
}

export const MoreActionMenu = ({
  options,
  anchorEl,
  open,
  onClose,
  onClick,
  clubId,
}: MoreActionMenuProps) => {
  console.log("clubId:", clubId);
  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={onClose}
      onClick={onClose}
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
      {options.map((opt) => (
        <MenuItem key={opt.value} onClick={() => onClick(opt.value)}>
          <ListItemIcon>{opt.icon}</ListItemIcon>
          {opt.text}
        </MenuItem>
      ))}
    </Menu>
  );
};
