import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Box,
  Tab,
} from "@mui/material";
import React from "react";

const ClubInfoDialog = ({
  open,
  onClose,
  id,
}: {
  open: boolean;
  onClose: () => void;
  id: string;
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
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
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
              {`社團資訊 ID: ${id}`}
              <TabPanel value="1">社團介紹內文XXXXXX123123123</TabPanel>
              <TabPanel value="2">活動資訊內文00000000000</TabPanel>
            </TabContext>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default ClubInfoDialog;
