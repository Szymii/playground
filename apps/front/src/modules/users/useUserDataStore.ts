import { create } from "zustand";

import { IRegistrationForm } from "./types";

export interface IUserState {
  userData: IRegistrationForm;
  setUserData: (userData: IRegistrationForm) => void;
}

export const useUserDataStore = create<IUserState>((set) => ({
  userData: {} as IRegistrationForm,
  setUserData: (userData: IRegistrationForm) =>
    set((state) => ({ ...state, userData })),
}));
