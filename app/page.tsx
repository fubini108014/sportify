import Link from "next/link";
import { Chip } from "@mui/material";
import { areas } from "./constants/taiwanCity";
import { sports } from "./constants/sportCategory";

export default function HomePage() {
  const categories = [...new Set(sports.map((sport) => sport.category))];

  return (
    <div>
      {/*TODO:1.放台灣地圖 2.運動項目篩選*/}
      <h1>活動地區</h1>
      <div>這邊放台灣地圖</div>
      {areas.map((area) => (
        <Chip
          key={area.code}
          label={area.name}
          variant="outlined"
          style={{ margin: "0px 4px" }}
          clickable
          component={Link}
          href={`/search?area=${area.code}`}
        />
      ))}
      <h1>運動項目</h1>
      {/* {[...Array(100).keys()].map((_) => (
        <div>{_}</div>
      ))} */}
      {categories.map((category) => (
        <div key={category}>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              margin: "16px 4px 8px 4px",
            }}
          >
            {category}
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "4px",
              marginBottom: "8px",
            }}
          >
            {sports
              .filter((sport) => sport.category === category)
              .map((sport) => (
                <Chip
                  key={sport.code}
                  label={sport.name}
                  variant="outlined"
                  style={{ margin: "0px 4px" }}
                  clickable
                  component={Link}
                  href={`/search?category=${sport.code}`}
                />
              ))}
          </div>
        </div>
      ))}
      {/* <ProductCard />
      <BasicButtonGroup /> */}
    </div>
  );
}
