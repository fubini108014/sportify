"use client";
import BasicTag from "@/app/components/BasicTag";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Stack,
} from "@mui/material";
import React from "react";
interface ClubItemProps {
  id: number;
  name: string;
  //description: string;
  //dateTime: string;
  //imageUrl: string;
  area: string;
  category: string;
}
const ClubItem = (props: ClubItemProps) => {
  const { name, area, category } = props;

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <Stack direction="column" spacing={1}>
        <Stack direction="row" spacing={1}>
          <BasicTag text={area} color="primary" href={`/search?area=${area}`} />
          <BasicTag
            text={category}
            color="secondary"
            href={`/search?category=${category}`}
          />
        </Stack>
        <ListItemText
          primary={name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: "text.primary", display: "inline" }}
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </Stack>
    </ListItem>
  );
};

export default ClubItem;
