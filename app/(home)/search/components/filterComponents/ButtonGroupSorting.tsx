import React from "react";
import { ButtonGroup, Button, Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SortIcon from "@mui/icons-material/Sort";
import { SortInfo } from "../SearchConditions";
import useMediaQuery from "@mui/material/useMediaQuery";
import { SelectedSortMenu } from "./SelectedSortMenu";
import { SelectedSortDialog } from "./SelectedSortDialog";

export type Option = { value: string; text: string };
export const sortTypeOptions: Option[] = [
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
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  console.log("isMobile:", isMobile);
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
      <ButtonGroup
        aria-label="Small button group"
        sx={{ height: "40px", whiteSpace: "nowrap" }}
      >
        <Button
          key="one"
          disableElevation
          onClick={handleOpenMenu}
          endIcon={<KeyboardArrowDownIcon />}
          sx={{
            padding: "4px 8px",
            borderTopLeftRadius: "8px",
            borderBottomLeftRadius: "8px",
          }}
        >
          {buttonTypeText}
        </Button>
        <Button
          key="two"
          onClick={handleChangeSortDirection}
          sx={{
            padding: "4px 8px",
            borderTopRightRadius: "8px",
            borderBottomRightRadius: "8px",
          }}
        >
          {buttonDirectionText}
        </Button>
      </ButtonGroup>
      {isMobile ? (
        <SelectedSortDialog
          options={sortTypeOptions}
          open={open}
          onClick={handleChangSortType}
          onClose={handleClose}
        />
      ) : (
        <SelectedSortMenu
          anchorEl={anchorEl}
          options={sortTypeOptions}
          onClick={handleChangSortType}
          open={open}
          onClose={handleClose}
        />
      )}
    </Box>
  );
};
