import React, { useState } from "react";
import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

interface SearchKeywordProps {
  onSearch: (word: string) => void;
  placeholder?: string;
  className?: string;
}

export const SearchKeyword = ({ onSearch }: SearchKeywordProps) => {
  const [keyword, setKeyword] = useState("");

  const goSearch = () => {
    onSearch(keyword);
  };

  const onClear = () => {
    setKeyword("");
    onSearch("");
  };

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        maxWidth: "300px",
        height: "40px",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        value={keyword}
        placeholder="搜尋"
        inputProps={{ "aria-label": "關鍵字查詢" }}
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
      />
      {keyword !== "" && (
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={onClear}
        >
          <CloseIcon />
        </IconButton>
      )}
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={goSearch}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
