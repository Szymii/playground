import { useSuspense } from "src/hooks";
import { Attachment } from "src/types";

type Files = Array<Attachment>;

export const useFilesQuery = () => {
  const { data } = useSuspense<Files>("files", "/api/files");

  return data;
};
