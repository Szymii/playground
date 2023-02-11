import { useSuspense } from "hooks";
import { Attachment } from "types";

import { FilesSchema } from "./FilesSchema";

export const useFilesQuery = () => {
  const { data } = useSuspense<Attachment[]>("files", "/api/files");

  const result = FilesSchema.parse(data);

  return result;
};
