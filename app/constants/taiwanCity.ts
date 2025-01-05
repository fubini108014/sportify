type Area = {
  code: string;
  name: string;
  region: string;
};
// 修改地區陣列
export const areas: Area[] = [
  // 北部
  { code: "tpe", name: "臺北市", region: "north" },
  { code: "ntpc", name: "新北市", region: "north" },
  { code: "tyn", name: "桃園市", region: "north" },
  { code: "hsinchu-city", name: "新竹市", region: "north" },
  { code: "hsinchu", name: "新竹縣", region: "north" },
  { code: "keelung", name: "基隆市", region: "north" },
  { code: "yilan", name: "宜蘭縣", region: "north" },

  // 中部
  { code: "taichung", name: "臺中市", region: "central" },
  { code: "miaoli", name: "苗栗縣", region: "central" },
  { code: "changhua", name: "彰化縣", region: "central" },
  { code: "nantou", name: "南投縣", region: "central" },
  { code: "yunlin", name: "雲林縣", region: "central" },

  // 南部
  { code: "tainan", name: "臺南市", region: "south" },
  { code: "khh", name: "高雄市", region: "south" },
  { code: "chiayi-city", name: "嘉義市", region: "south" },
  { code: "chiayi", name: "嘉義縣", region: "south" },
  { code: "pingtung", name: "屏東縣", region: "south" },

  // 東部
  { code: "taitung", name: "臺東縣", region: "east" },
  { code: "hualien", name: "花蓮縣", region: "east" },

  // 離島
  { code: "penghu", name: "澎湖縣", region: "island" },
  { code: "kinmen", name: "金門縣", region: "island" },
  { code: "lienchiang", name: "連江縣", region: "island" },
];

export const cityDictionary = areas.reduce<Record<string, Area>>(
  (acc, area) => {
    acc[area.code] = area;
    return acc;
  },
  {}
);
