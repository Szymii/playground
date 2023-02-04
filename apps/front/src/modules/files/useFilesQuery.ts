import { useSuspense } from "hooks";
import { Attachment } from "types";

import { FilesSchema } from "./FilesSchema";

type Files = Array<Attachment>;

export const useFilesQuery = () => {
  const { data } = useSuspense<Files>("files", "/api/files");

  const result = FilesSchema.parse(data);

  return result;
};
