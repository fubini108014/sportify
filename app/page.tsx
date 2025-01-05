import Link from "next/link";
import { Chip } from "@mui/material";

// 定義運動項目類型
type Sport = {
  code: string;
  name: string;
  category: string;
};

// 建立運動項目陣列
const sports: Sport[] = [
  // 球類運動
  { code: "BASK", name: "籃球", category: "球類運動" },
  { code: "FOOT", name: "足球", category: "球類運動" },
  { code: "BASE", name: "棒球", category: "球類運動" },
  { code: "VOLL", name: "排球", category: "球類運動" },
  { code: "TABL", name: "桌球", category: "球類運動" },
  { code: "TENN", name: "網球", category: "球類運動" },
  { code: "BADM", name: "羽球", category: "球類運動" },

  // 健身運動
  { code: "YOGA", name: "瑜珈", category: "健身運動" },
  { code: "WEIG", name: "重訓", category: "健身運動" },
  { code: "PILA", name: "皮拉提斯", category: "健身運動" },
  { code: "AERO", name: "有氧運動", category: "健身運動" },
  { code: "DANC", name: "舞蹈", category: "健身運動" },

  // 水上運動
  { code: "SWIM", name: "游泳", category: "水上運動" },
  { code: "SURF", name: "衝浪", category: "水上運動" },
  { code: "DIVE", name: "潛水", category: "水上運動" },

  // 戶外運動
  { code: "HIKE", name: "登山健行", category: "戶外運動" },
  { code: "CYCL", name: "自行車", category: "戶外運動" },
  { code: "ROCK", name: "攀岩", category: "戶外運動" },
  { code: "CAMP", name: "露營", category: "戶外運動" },

  // 武術
  { code: "MART", name: "跆拳道", category: "武術" },
  { code: "KARA", name: "空手道", category: "武術" },
  { code: "BOXN", name: "拳擊", category: "武術" },
  { code: "KUNG", name: "功夫", category: "武術" },

  // 冰雪運動
  { code: "SKAT", name: "溜冰", category: "冰雪運動" },
  { code: "HOCK", name: "冰球", category: "冰雪運動" },
];

export default function HomePage() {
  const categories = [...new Set(sports.map((sport) => sport.category))];

  return (
    <div>
      {/*TODO:1.放台灣地圖 2.運動項目篩選*/}
      <h1>活動地區</h1>
      這邊放台灣地圖
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
