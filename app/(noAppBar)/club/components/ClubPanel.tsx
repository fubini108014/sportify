"use client";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
interface ClubPanelProps {
  id: string;
}
export const ClubPanel = ({ id }: ClubPanelProps) => {
  const [panel, setPanel] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setPanel(newValue);
  };
  return (
    <div>
      <TabContext value={panel}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="社團介紹" value="1" />
            <Tab label="活動資訊" value="2" />
          </TabList>
        </Box>
        {`社團資訊 ID: ${id}`}
        <TabPanel value="1">社團介紹內文XXXXXX123123123</TabPanel>
        <TabPanel value="2">活動資訊內文00000000000</TabPanel>
      </TabContext>
    </div>
  );
};
