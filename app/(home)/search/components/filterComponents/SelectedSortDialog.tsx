import { Dialog, MenuItem, Divider, MenuList } from "@mui/material";
import React from "react";
import { Option } from "./ButtonGroupSorting";

export const SelectedSortDialog = ({
  options,
  open,
  onClose,
  onClick,
}: {
  options: Option[];
  open: boolean;
  onClose: () => void;
  onClick: (val: string) => void;
}) => {
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={onClose}
        scroll={"paper"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <MenuList dense>
          排序依據
          <Divider sx={{ my: 0.5 }} />
          {options.map((_) => (
            <MenuItem
              key={_.value}
              onClick={() => onClick(_.value)}
              disableRipple
            >
              {_.text}
            </MenuItem>
          ))}
        </MenuList>
      </Dialog>
    </React.Fragment>
  );
};
