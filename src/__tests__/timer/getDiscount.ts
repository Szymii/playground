import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

dayjs.extend(isBetween);

export const getDiscount = (date: Date) => {
  const comparableDate = dayjs(date).year(2000);
  const isSummerSale = comparableDate.isBetween(
    "2000-03-26",
    "2000-10-29",
    "days",
    "[]",
  );
  const isChristmasSale = comparableDate.isBetween(
    "2000-11-20",
    "2000-12-26",
    "days",
    "[]",
  );

  if (isSummerSale) {
    return 30;
  }

  if (isChristmasSale) {
    return 15;
  }

  return 0;
};
