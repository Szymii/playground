import { z } from "zod";

export const FilesSchema = z.array(
  z.object({
    id: z.string(),
    fileName: z.string(),
    fileExtension: z.string(),
    createdAt: z.string(),
    editedAt: z.string().nullable(),
    editionReason: z.string().nullable(),
    inactivatedAt: z.string().nullable(),
    inactivationReason: z.string().nullable(),
    deletedAt: z.string().nullable(),
    deletionReason: z.string().nullable(),
  }),
);
