import { useSuspense } from "hooks";

import { FilesSchema } from "./FilesSchema";

export const useFilesQuery = () => {
  const { data } = useSuspense("files", "/api/files");

  const result = FilesSchema.parse(data);

  return result;
};
