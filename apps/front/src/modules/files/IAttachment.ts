export interface IAttachment {
  id: string;
  fileName: string;
  fileExtension: string;
  createdAt: string;
  editedAt: string | null;
  editionReason: string | null;
  inactivatedAt: string | null;
  inactivationReason: string | null;
  deletedAt: string | null;
  deletionReason: string | null;
}
