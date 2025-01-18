type Area = {
  code: string;
  name: string;
  region: string;
};
// 修改地區陣列
export const areas: Area[] = [
  // 北部
  { code: "tpe", name: "臺北市", region: "北部" },
  { code: "ntpc", name: "新北市", region: "北部" },
  { code: "tyn", name: "桃園市", region: "北部" },
  { code: "hsinchu-city", name: "新竹市", region: "北部" },
  { code: "hsinchu", name: "新竹縣", region: "北部" },
  { code: "keelung", name: "基隆市", region: "北部" },
  { code: "yilan", name: "宜蘭縣", region: "北部" },

  // 中部
  { code: "taichung", name: "臺中市", region: "中部" },
  { code: "miaoli", name: "苗栗縣", region: "中部" },
  { code: "changhua", name: "彰化縣", region: "中部" },
  { code: "nantou", name: "南投縣", region: "中部" },
  { code: "yunlin", name: "雲林縣", region: "中部" },

  // 南部
  { code: "tainan", name: "臺南市", region: "南部" },
  { code: "khh", name: "高雄市", region: "南部" },
  { code: "chiayi-city", name: "嘉義市", region: "南部" },
  { code: "chiayi", name: "嘉義縣", region: "南部" },
  { code: "pingtung", name: "屏東縣", region: "南部" },

  // 東部
  { code: "taitung", name: "臺東縣", region: "東部" },
  { code: "hualien", name: "花蓮縣", region: "東部" },

  // 離島
  { code: "penghu", name: "澎湖縣", region: "離島" },
  { code: "kinmen", name: "金門縣", region: "離島" },
  { code: "lienchiang", name: "連江縣", region: "離島" },
];

export const cityDictionary = areas.reduce<Record<string, Area>>(
  (acc, area) => {
    acc[area.code] = area;
    return acc;
  },
  {}
);
