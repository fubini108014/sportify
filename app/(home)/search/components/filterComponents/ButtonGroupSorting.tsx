import React from "react";
import {
  ButtonGroup,
  Button,
  MenuItem,
  styled,
  alpha,
  Box,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Menu, { MenuProps } from "@mui/material/Menu";
import Divider from "@mui/material/Divider";
import SortIcon from "@mui/icons-material/Sort";
import { SortInfo } from "../SearchConditions";

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

const sortTypeOptions = [
  { value: "hot", text: "熱門度" },
  { value: "time", text: "時間遠近" },
  { value: "name", text: "社團名稱" },
];
interface ButtonGroupSortingProps {
  sortInfo: SortInfo;
  onChange: (obj: SortInfo) => void;
}

export const ButtonGroupSorting = ({
  sortInfo,
  onChange,
}: ButtonGroupSortingProps) => {
  console.log("sortInfo:", sortInfo);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChangeSortDirection = () => {
    const newDirection = sortInfo.direction === "desc" ? "asc" : "desc";
    onChange({ ...sortInfo, direction: newDirection });
  };

  const handleChangSortType = (type: string) => {
    onChange({ ...sortInfo, type });
    setAnchorEl(null);
  };
  const buttonTypeText =
    sortTypeOptions.find((t) => t.value === sortInfo.type)?.text || "選排序";

  const buttonDirectionText =
    sortInfo.direction === "desc" ? (
      <SortIcon sx={{ rotate: "180deg", transform: "scaleX(-1)" }} />
    ) : (
      <SortIcon />
    );

  return (
    <Box sx={{ textAlign: "end" }}>
      <ButtonGroup size="small" aria-label="Small button group">
        <Button
          key="one"
          disableElevation
          onClick={handleOpenMenu}
          endIcon={<KeyboardArrowDownIcon />}
        >
          {buttonTypeText}
        </Button>
        <Button key="two" onClick={handleChangeSortDirection}>
          {buttonDirectionText}
        </Button>
      </ButtonGroup>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        排序依據
        <Divider sx={{ my: 0.5 }} />
        {sortTypeOptions.map((_) => (
          <MenuItem
            key={_.value}
            onClick={() => handleChangSortType(_.value)}
            disableRipple
          >
            {_.text}
          </MenuItem>
        ))}
      </StyledMenu>
    </Box>
  );
};
