const years = {
  1126: ["靖康元年", "天会四年"],
  1127: ["建炎元年", "天会五年"],
  1128: ["建炎二年"],
  1129: ["建炎三年"],
  1130: ["建炎四年"],
  1131: ["建炎五年"],
  1132: ["建炎六年"],
  1133: ["建炎七年"],
};

const months = [
  "正",
  "二",
  "三",
  "四",
  "五",
  "六",
  "七",
  "八",
  "九",
  "十",
  "十一",
  "十二",
];
const digits = "一二三四五六七八九十";

export function formatDate(year, month, date) {
  let result = "";
  year && (result += years[year][0] + "\n");
  const monthInt = parseInt(month);
  result += monthInt ? months[monthInt - 1] + "月" : month;
  if (!date) return result;
  const dateInt = parseInt(date);
  if (dateInt) {
    if (dateInt <= 10) {
      result += "初" + digits[dateInt - 1];
    } else {
      const tens = Math.floor(dateInt / 10);
      const ones = dateInt % 10;
      tens > 1 && (result += digits[tens - 1]);
      result += "十";
      ones > 0 && (result += digits[ones - 1]);
    }
  } else {
    result += date;
  }
  return result;
}
