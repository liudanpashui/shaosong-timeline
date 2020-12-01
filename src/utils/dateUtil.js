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

function dateChars(year, month, date) {
  let newYear = "";
  let newMonth = "";
  let newDate = "";
  year && (newYear += years[year][0]);
  const monthInt = parseInt(month);
  newMonth = monthInt ? months[monthInt - 1] + "月" : month;
  if (!date) return [newYear, newMonth, newDate];
  const dateInt = parseInt(date);
  if (dateInt) {
    if (dateInt <= 10) {
      newDate += "初" + digits[dateInt - 1];
    } else {
      const tens = Math.floor(dateInt / 10);
      const ones = dateInt % 10;
      tens > 1 && (newDate += digits[tens - 1]);
      newDate += "十";
      ones > 0 && (newDate += digits[ones - 1]);
    }
  } else {
    newDate = date;
  }
  return [newYear, newMonth, newDate];
}

export function formattedDateMultipleLines(year, month, date) {
  const [newYear, newMonth, newDate] = dateChars(year, month, date);
  return `${newYear}\n${newMonth}${
    (newMonth + newDate).length > 4 ? "\n" : ""
  }${newDate}`;
}

export function formattedDateSingleLine(year, month, date) {
  const [newYear, newMonth, newDate] = dateChars(year, month, date);
  return `${newYear}(${year}) ${newMonth}${newDate}`;
}
