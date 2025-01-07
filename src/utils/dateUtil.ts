const years: { [key: string]: string[] } = {
  1126: ["靖康元年", "金天会四年"],
  1127: ["建炎元年", "靖康二年", "金天会五年"],
  1128: ["建炎二年", "金天会六年"],
  1129: ["建炎三年", "金天会七年"],
  1130: ["建炎四年", "金天会八年"],
  1131: ["建炎五年", "金天会九年", "金皇统元年"],
  1132: ["建炎六年", "金皇统二年", "西夏正德六年"],
  1133: ["建炎七年", "金皇统三年"],
  1134: ["建炎八年", "金皇统四年"],
  1135: ["建炎九年", "金皇统五年"],
  1136: ["建炎十年", "金皇统六年"],
  1143: ["建炎十七年"],
  1144: ["建炎十八年"],
  1161: ["建炎三十五年"],
  1162: ["建炎三十六年"],
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

function dateChars(year: string, month: string, date: string) {
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

export function formattedDateMultipleLines(
  year: string,
  month: string,
  date: string
) {
  const [newYear, newMonth, newDate] = dateChars(year, month, date);
  return `${newYear}\n${newMonth}${
    (newMonth + newDate).length > 4 ? "\n" : ""
  }${newDate}`.replace(/^\s+|\s+$/g, "");
}

export function formattedDateSingleLine(
  year: string,
  month: string,
  date: string
) {
  const [newYear, newMonth, newDate] = dateChars(year, month, date);
  return `${newYear}(${year}) ${newMonth}${newDate}`;
}

export function formattedYearDetails(year: string) {
  const yearVariants = years[year];
  let line1 = "" + yearVariants[0];
  yearVariants.forEach((yearName, index) => {
    if (index === 0) {
      line1 += `(${year})`;
    } else {
      line1 += `/${yearName}`;
    }
  });
  const line2 = `赵玖${age("1107", year)}岁`;
  return `${line1}\n${line2}`;
}

export function age(yearOfBirth: string, currentYear: string): string {
  yearOfBirth += "";
  let ageText = "";
  if (yearOfBirth.includes("+")) {
    ageText += "约";
    yearOfBirth = yearOfBirth.replace("+", "");
  }

  const age = Number(currentYear) - Number(yearOfBirth) + 1;
  const tens = Math.floor(age / 10);
  const ones = age % 10;
  tens > 1 && (ageText += digits[tens - 1]);
  ageText += "十";
  ones > 0 && (ageText += digits[ones - 1]);
  return ageText;
}
