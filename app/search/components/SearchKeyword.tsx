import React from "react";
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

interface SearchKeywordProps {
  onChange: (word: string) => void;
  value?: string;
  placeholder?: string;
  className?: string;
}
export const SearchKeyword = ({ onChange }: SearchKeywordProps) => {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      <SearchIcon sx={{ p: "10px" }} />

      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="請輸入關鍵字"
        inputProps={{ "aria-label": "關鍵字查詢" }}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={() => onChange("")}
      >
        <CloseIcon />
      </IconButton>
      {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon />
      </IconButton> */}
    </Paper>
  );
};
