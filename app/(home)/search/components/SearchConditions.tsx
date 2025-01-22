import { TextField, Autocomplete, Box, Grid2 as Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { areas } from "@/app/constants/taiwanCity";
import { sports } from "@/app/constants/sportCategory";
import { DatePicker } from "@mui/x-date-pickers";
import { SearchKeyword } from "./filterComponents/SearchKeyword";
import { Dayjs } from "dayjs";
import { ButtonGroupSorting } from "./filterComponents/ButtonGroupSorting";

export type SortDirection = "desc" | "asc";
export type SortInfo = { type: string; direction: SortDirection };
interface Filter {
  keyword: string;
  areaId: string;
  sportId: string;
  date: string;
  sortType: string;
  sortDirection: SortDirection;
}

export const SearchConditions = () => {
  const searchParams = useSearchParams();
  const area = searchParams.get("area") || "";
  const category = searchParams.get("category") || "";
  const findDefaultAreaOption = areas.find((_) => _.code === area) || null;
  const findDefaultSportOption =
    sports.find((_) => _.code === category) || null;

  const [filter, setFilter] = useState<Filter>({
    keyword: "",
    areaId: "",
    sportId: "",
    date: "",
    sortType: "",
    sortDirection: "desc",
  });

  useEffect(() => {
    setFilter((prev) => ({ ...prev, areaId: area, sportId: category }));
  }, [area, category]);

  const handleOnChangKeyword = (newKeyword: string) => {
    setFilter((prev) => ({ ...prev, keyword: newKeyword }));
  };
  const handleOnChangDate = (date: Dayjs | null) => {
    console.log("v:", date?.format("YYYY/MM/DD"));
    setFilter((prev) => ({ ...prev, date: date?.format("YYYY/MM/DD") || "" }));
  };
  const handleOnChangSorting = ({ type, direction }: SortInfo) => {
    setFilter((prev) => ({
      ...prev,
      sortType: type,
      sortDirection: direction,
    }));
  };

  return (
    //background: "#ddd"
    <Box sx={{ m: "8px 4px 16px 4px", p: "4px" }}>
      <Box
        sx={{
          fontSize: "18px",
          display: "flex",
          m: "8px 0px 16px 0px",
          justifyContent: "flex-end",
        }}
      >
        <SearchKeyword
          //value={filter.keyword}
          onSearch={handleOnChangKeyword}
        />
      </Box>
      <Grid container spacing={1}>
        <Grid size={{ xs: 6, sm: 6, md: 3 }}>
          <Autocomplete
            disablePortal
            size="small"
            options={sports}
            groupBy={(option) => option.category}
            defaultValue={findDefaultSportOption}
            getOptionLabel={(option) => option.name}
            sx={{ minWidth: 150 }}
            noOptionsText="查無選項"
            renderInput={(params) => <TextField {...params} label="運動項目" />}
          />
        </Grid>
        <Grid size={{ xs: 6, sm: 6, md: 3 }}>
          <Autocomplete
            disablePortal
            size="small"
            options={areas}
            groupBy={(option) => option.region}
            defaultValue={findDefaultAreaOption}
            getOptionLabel={(option) => option.name}
            sx={{ minWidth: 150 }}
            noOptionsText="查無選項"
            renderInput={(params) => <TextField {...params} label="地區" />}
          />
        </Grid>
        <Grid size={{ xs: 6, sm: 6, md: 3 }}>
          <DatePicker
            sx={{
              minWidth: 170,
              width: "100%",
              "& input": { padding: "8.5px 14px" },
            }}
            format="YYYY/MM/DD"
            onChange={handleOnChangDate}
          />
        </Grid>
        <Grid size={{ xs: 6, sm: 6, md: 3 }}>
          <ButtonGroupSorting
            sortInfo={{
              type: filter.sortType,
              direction: filter.sortDirection,
            }}
            onChange={handleOnChangSorting}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
