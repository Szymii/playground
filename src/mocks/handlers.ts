import { rest } from "msw";

import filesData from "./mockData/files.json";

export const files = rest.get("/api/files", (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(filesData));
});

export const handlers = [files];
