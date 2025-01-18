import { TextField, Autocomplete, Box, Grid2 as Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { areas } from "@/app/constants/taiwanCity";
import { sports } from "@/app/constants/sportCategory";
import { DatePicker } from "@mui/x-date-pickers";
import { SearchKeyword } from "./SearchKeyword";
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

  const handleOnChangKeyword = (keyword: string) => {
    console.log("v:", keyword);
    setFilter((prev) => ({ ...prev, keyword }));
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
    <Box sx={{ backgroundColor: "#ddd", m: "8px 4px", p: "4px" }}>
      <Box sx={{ fontSize: "18px", m: "8px 4px 16px 4px" }}>篩選條件區</Box>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6, sm: 6, md: 4 }}>
          <Autocomplete
            disablePortal
            options={sports}
            groupBy={(option) => option.category}
            defaultValue={findDefaultSportOption}
            getOptionLabel={(option) => option.name}
            //sx={{ width: 130 }}
            noOptionsText="查無選項"
            renderInput={(params) => <TextField {...params} label="運動項目" />}
          />
        </Grid>
        <Grid size={{ xs: 6, sm: 6, md: 4 }}>
          <Autocomplete
            disablePortal
            options={areas}
            groupBy={(option) => option.region}
            defaultValue={findDefaultAreaOption}
            getOptionLabel={(option) => option.name}
            //sx={{ width: 130 }}
            noOptionsText="查無選項"
            renderInput={(params) => <TextField {...params} label="地區" />}
          />
        </Grid>
        <Grid size={{ xs: 6, sm: 6, md: 4 }}>
          <DatePicker
            sx={{ width: "100%" }}
            format="YYYY/MM/DD"
            onChange={handleOnChangDate}
          />
        </Grid>
        <Grid size={{ xs: 8, sm: 8, md: 8 }}>
          <SearchKeyword onChange={handleOnChangKeyword} />
        </Grid>
        <Grid size={{ xs: 4, sm: 4, md: 4 }}>
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
