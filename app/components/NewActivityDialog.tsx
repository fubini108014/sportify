"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const NewActivityDialog = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={onClose}
        scroll={"paper"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">發起活動</DialogTitle>
        <DialogContent dividers={true}>
          <DialogContent dividers={true}>
            <div>活動社團(下拉選項)</div>
            <div>發起人</div>
            <div>活動名稱</div>
            <div>活動地點</div>
            <div>活動費用</div>
            <div>招募人數</div>
            <div>顯示報名名單(選項)</div>
            <div>活動描述</div>
          </DialogContent>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>取消</Button>
          <Button onClick={onClose}>送出</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default NewActivityDialog;
