import { rest } from "msw";

import filesData from "./mockData/files.json";

export const files = rest.get("/api/files", (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(filesData));
});

const baseUrl = "http://random";

export const user = rest.get(
  `${baseUrl}/api/users/:userId`,
  (req, res, ctx) => {
    const userId = req.params.userId;

    return res(
      ctx.status(200),
      ctx.json({
        name: "Szymon",
        id: userId,
        age: 23,
      }),
    );
  },
);

export const handlers = [files, user];
