"use client";
import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import Link from "next/link";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import GroupsIcon from "@mui/icons-material/Groups";
import { usePathname } from "next/navigation";
import NewActivityDialog from "./NewActivityDialog";
import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import ExploreIcon from "@mui/icons-material/Explore";

const BottomNavigaionWrapper = styled(Paper)({
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  "& a.Mui-selected": {
    color: "#1976d2 !important",
  },
});
const siteRoutes = [
  { label: "活動探索", href: "/search", icon: <ExploreIcon /> },
  { label: "社團管理", href: "/club-manager", icon: <GroupsIcon /> },
  { label: "發起活動", href: "/activity", icon: <AddCircleIcon /> },
  { label: "活動通知", href: "/notification", icon: <NotificationsIcon /> },
  { label: "個人中心", href: "/personal", icon: <AccountCircleIcon /> },
];

export const BasicBottomNavigaion = () => {
  const pathname = usePathname();
  const [value, setValue] = React.useState(siteRoutes[0].href);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setValue(pathname);
    console.log(pathname);
  }, [pathname]);

  return (
    <BottomNavigaionWrapper elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          console.log("open", newValue);
          if (newValue === "/activity") {
            setOpen(true);
          } else {
            setValue(newValue);
          }
        }}
      >
        {siteRoutes.map((item, idx) => (
          <BottomNavigationAction
            key={idx}
            label={item.label}
            {...(item.href !== "/activity"
              ? { LinkComponent: Link, href: item.href }
              : {})}
            value={item.href}
            icon={item.icon}
          />
        ))}
      </BottomNavigation>
      <NewActivityDialog open={open} onClose={() => setOpen(false)} />
    </BottomNavigaionWrapper>
  );
};
