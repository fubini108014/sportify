import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { ClubActionOption } from "./ClubInfo";
import { ListItemIcon } from "@mui/material";
import { ListItemText } from "@mui/material";
import { ListItemButton } from "@mui/material";
import { ListItem } from "@mui/material";
import { List } from "@mui/material";

interface MoreActionDrawerProps {
  options: ClubActionOption[];
  open: boolean;
  onClose: () => void;
  onClick: (val: string) => void;
  clubId: string;
}

export const MoreActionDrawer = ({
  options,
  open,
  onClose,
  onClick,
  clubId,
}: MoreActionDrawerProps) => {
  //   const toggleDrawer = (newOpen: boolean) => () => {
  //     setOpen(newOpen);
  //   };

  // This is used only for the example
  //const container =  () => window().document.body ;
  console.log("aaaa:", clubId);
  return (
    <SwipeableDrawer
      //container={container}
      anchor="bottom"
      open={open}
      onClose={onClose}
      onOpen={() => onClick("")}
      ModalProps={{
        keepMounted: false,
      }}
      disableSwipeToOpen
    >
      <Box
        //sx={{ width:  'auto'  }}
        role="presentation"
        onClick={onClose}
        onKeyDown={onClose}
      >
        <List>
          {options.map((opt) => (
            <ListItem key={opt.value} disablePadding>
              <ListItemButton>
                <ListItemIcon>{opt.icon}</ListItemIcon>
                <ListItemText primary={opt.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </SwipeableDrawer>
  );
};
