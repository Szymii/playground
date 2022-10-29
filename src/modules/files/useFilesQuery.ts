import { useSuspense } from "hooks";
import { Attachment } from "types";

type Files = Array<Attachment>;

export const useFilesQuery = () => {
  const { data } = useSuspense<Files>("files", "/api/files");

  return data;
};
