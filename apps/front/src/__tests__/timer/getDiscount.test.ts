import dayjs from "dayjs";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { getDiscount } from "./getDiscount";

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

describe("Checking correct discount", () => {
  it("should return no discount", async () => {
    const date = dayjs("2000-03-02").toDate();
    vi.setSystemTime(date);

    const discount = getDiscount(new Date());
    expect(discount).toBe(0);
  });

  it("should return discount for winter holydays", async () => {
    const date = dayjs("2000-12-24").toDate();
    vi.setSystemTime(date);

    const discount = getDiscount(new Date());
    expect(discount).toBe(15);
  });

  it("should return discount for summer holydays", async () => {
    const date = dayjs("2000-06-09").toDate();
    vi.setSystemTime(date);

    const discount = getDiscount(new Date());
    expect(discount).toBe(30);
  });
});
