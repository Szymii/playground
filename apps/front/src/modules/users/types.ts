export enum GenderEnum {
  female = "female",
  male = "male",
}

export enum WorkplaceEnum {
  frontend = "frontend",
  backend = "backend",
  fullstack = "fullstack",
}

export interface IRegistrationForm {
  emailAddress: string;
  firstName: string;
  password: string;
  gender: GenderEnum;
  workplace: WorkplaceEnum;
  policy: boolean;
  emailAlerts: boolean | null;
}
