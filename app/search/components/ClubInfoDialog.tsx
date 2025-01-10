import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Tab,
} from "@mui/material";
import React from "react";

export const ClubInfoDialog = ({
  open,
  onClose,
  clubId,
}: {
  open: boolean;
  onClose: () => void;
  clubId: string;
}) => {
  const descriptionElementRef = React.useRef<HTMLElement>(null);
  const [panel, setPanel] = React.useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setPanel(newValue);
  };
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
          <TabContext value={panel}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="社團介紹" value="1" />
                <Tab label="活動資訊" value="2" />
              </TabList>
            </Box>
            {`社團資訊 ID: ${clubId}`}
            <TabPanel value="1">社團介紹內文XXXXXX123123123</TabPanel>
            <TabPanel value="2">活動資訊內文00000000000</TabPanel>
          </TabContext>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
