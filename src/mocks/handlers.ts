import { rest } from "msw";
import filesData from "./mockData/files.json";

let firstRender = true;

export const handlers = [
  rest.get("/api/files", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(filesData));
  }),
  rest.get("/api/validation/status", (req, res, ctx) => {
    const RNG = Math.round(Math.random() * 2);

    if (RNG === 1 && !firstRender) {
      return res(ctx.status(200), ctx.json({ status: "verified" }));
    }

    if (RNG === 2 && !firstRender) {
      return res(ctx.status(200), ctx.json({ status: "error" }));
    }

    firstRender = false;

    return res(ctx.status(200), ctx.json({ status: "pending" }));
  }),
];
