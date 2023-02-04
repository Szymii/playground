import "@testing-library/jest-dom";
import { afterAll, afterEach, beforeAll, vi } from "vitest";
import createFetchMock from "vitest-fetch-mock";

import { server } from "./mocks/server";

const fetchMock = createFetchMock(vi);

fetchMock.enableMocks();
fetchMock.dontMock();

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
