import { ReactNode, createContext, useContext } from "react";
import { Attachment } from "types";

import { useFilesQuery } from "./useFilesQuery";

interface IProps {
  children: ReactNode;
}

const FilesContext = createContext<Attachment[] | undefined>(undefined);

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
