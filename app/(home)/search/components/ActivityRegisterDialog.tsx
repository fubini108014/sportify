import { Dialog, DialogContent, DialogActions, Button } from "@mui/material";
import React from "react";

export const ActivityRegisterDialog = ({
  open,
  onClose,
  activityId,
}: {
  open: boolean;
  onClose: () => void;
  activityId: string;
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
        <DialogContent dividers={true}>
          {`揪團活動 ID: ${activityId}`}
          <h3>活動資訊</h3>
          <div>活動名稱</div>
          <div>報名時間</div>
          <div>活動地點</div>
          <div>發起人</div>
          <div>開放名額</div>
          <div>報名費用</div>
          <div>活動描述</div>
          <h3>目前報名名單</h3>
          順位/姓名/人數/備註 1 2 3 ...
          <h3>報名資訊</h3>
          <div>聯絡人</div>
          <div>聯絡方式</div>
          <div>報名人數</div>
          <div>備註說明</div>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>取消報名</Button>
          <Button onClick={onClose}>修改報名</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
