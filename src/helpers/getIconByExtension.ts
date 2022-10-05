import { mdiFilePdfBox } from "@mdi/js";
import { mdiFilePngBox } from "@mdi/js";
import { mdiFileWord } from "@mdi/js";
import { mdiZipBox } from "@mdi/js";
import { mdiFileOutline } from "@mdi/js";

export const getIconByExtension = (extension: string) => {
  switch (extension) {
    case "pdf":
      return mdiFilePdfBox;
    case "png":
    case "jpg":
      return mdiFilePngBox;
    case "doc":
    case "docx":
    case "txt":
      return mdiFileWord;
    case "rar":
    case "zip":
      return mdiZipBox;
    default:
      return mdiFileOutline;
  }
};
