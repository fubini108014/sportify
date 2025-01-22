import React from "react";
import Menu, { MenuProps } from "@mui/material/Menu";
import { MenuItem, styled, alpha, Divider } from "@mui/material";
import { Option } from "./ButtonGroupSorting";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: "rgb(55, 65, 81)",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
    ...theme.applyStyles("dark", {
      color: theme.palette.grey[300],
    }),
  },
}));

interface SelectedSortMenuProps {
  options: Option[];
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  onClick: (val: string) => void;
}

export const SelectedSortMenu = ({
  options,
  anchorEl,
  open,
  onClose,
  onClick,
}: SelectedSortMenuProps) => {
  return (
    <StyledMenu
      id="demo-customized-menu"
      MenuListProps={{
        "aria-labelledby": "demo-customized-button",
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
    >
      排序依據
      <Divider sx={{ my: 0.5 }} />
      {options.map((_) => (
        <MenuItem key={_.value} onClick={() => onClick(_.value)} disableRipple>
          {_.text}
        </MenuItem>
      ))}
    </StyledMenu>
  );
};
