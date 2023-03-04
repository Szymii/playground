import { ReactNode, createContext, useContext } from "react";

import { IAttachment } from "./IAttachment";
import { useFilesQuery } from "./useFilesQuery";

interface IProps {
  children: ReactNode;
}

const FilesContext = createContext<IAttachment[] | undefined>(undefined);

export const FilesProvider = ({ children }: IProps) => {
  const files = useFilesQuery();

  return (
    <FilesContext.Provider value={files}>{children}</FilesContext.Provider>
  );
};

export const useFilesConsumer = () => {
  const context = useContext(FilesContext);
  if (context === undefined) {
    throw new Error("useFilesConsumer must be used within a FilesContext");
  }

  return context;
};

export const withFiles = (files?: IAttachment[]) => {
  const fixture = [
    {
      id: "l3orpzhugbvef291sd54yin08mk7x6jt",
      fileName: "Test_file_one.pdf",
      fileExtension: "pdf",
      createdAt: "2022-09-30 14:15",
      editedAt: "2022-09-30 15:15",
      editionReason: "Typo",
      inactivatedAt: null,
      inactivationReason: null,
      deletedAt: null,
      deletionReason: null,
    },
  ];

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  return (Story) => (
    <FilesContext.Provider value={files ? files : fixture}>
      <Story />
    </FilesContext.Provider>
  );
};
