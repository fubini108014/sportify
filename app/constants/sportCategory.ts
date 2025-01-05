// 定義運動項目類型
type Sport = {
  code: string;
  name: string;
  category: string;
};
// 建立運動項目陣列
export const sports: Sport[] = [
  // 球類運動
  { code: "basketball", name: "籃球", category: "球類運動" },
  { code: "football", name: "足球", category: "球類運動" },
  { code: "baseball", name: "棒球", category: "球類運動" },
  { code: "volleyball", name: "排球", category: "球類運動" },
  { code: "tabletennis", name: "桌球", category: "球類運動" },
  { code: "tennis", name: "網球", category: "球類運動" },
  { code: "badminton", name: "羽球", category: "球類運動" },

  // 健身運動
  { code: "yoga", name: "瑜珈", category: "健身運動" },
  { code: "weighttraining", name: "重訓", category: "健身運動" },
  { code: "pilates", name: "皮拉提斯", category: "健身運動" },
  { code: "aerobics", name: "有氧運動", category: "健身運動" },
  { code: "dancing", name: "舞蹈", category: "健身運動" },

  // 水上運動
  { code: "swimming", name: "游泳", category: "水上運動" },
  { code: "surfing", name: "衝浪", category: "水上運動" },
  { code: "diving", name: "潛水", category: "水上運動" },

  // 戶外運動
  { code: "hiking", name: "登山健行", category: "戶外運動" },
  { code: "cycling", name: "自行車", category: "戶外運動" },
  { code: "rockclimbing", name: "攀岩", category: "戶外運動" },
  { code: "camping", name: "露營", category: "戶外運動" },

  // 武術
  { code: "taekwondo", name: "跆拳道", category: "武術" },
  { code: "karate", name: "空手道", category: "武術" },
  { code: "boxing", name: "拳擊", category: "武術" },
  { code: "kungfu", name: "功夫", category: "武術" },

  // 冰雪運動
  { code: "skating", name: "溜冰", category: "冰雪運動" },
  { code: "icehockey", name: "冰球", category: "冰雪運動" },
];

export const sportDictionary = sports.reduce<Record<string, Sport>>(
  (acc, sport) => {
    acc[sport.code] = sport;
    return acc;
  },
  {}
);
