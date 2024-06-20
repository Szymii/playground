import { beforeEach, expect, it } from "vitest";

import { getUser } from "./getUser";

const userFixture = {
  name: "Szymon",
  id: "123",
  age: 23,
};

beforeEach(() => {
  fetchMock.doMock();
});

it("should return user with requested id", async () => {
  fetchMock.mockResponseOnce(JSON.stringify(userFixture));

  const user = await getUser("123");

  expect(user).toMatchObject(userFixture);
});
