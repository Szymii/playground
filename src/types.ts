enum GenderEnum {
  female = "female",
  male = "male",
}

enum WorkplaceEnum {
  frontend = "frontend",
  backend = "backend",
  fullstack = "fullstack",
}

export enum ValidationStatuses {
  PENDING = "pending",
  VERIFIED = "verified",
  ERROR = "error",
}

export interface IRegistrationForm {
  emailAddress: string;
  firstName: string;
  password: string;
  gender: GenderEnum;
  workplace: WorkplaceEnum;
  policy: boolean;
}

export interface IUserState {
  userData: IRegistrationForm;
  setUserData: (userData: IRegistrationForm) => void;
}

export interface Attachment {
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
