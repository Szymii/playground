import { HttpResponse, http } from "msw";

import filesData from "./mockData/files.json";

export const files = http.get("/api/files", () => {
  return HttpResponse.json(filesData);
});

const baseUrl = "http://random";

export const user = http.get(`${baseUrl}/api/users/:userId`, (req) => {
  const userId = req.params.userId;

  return HttpResponse.json({
    name: "Szymon",
    id: userId,
    age: 23,
  });
});

export const handlers = [files, user];
