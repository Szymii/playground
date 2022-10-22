import { IRegistrationForm, IUserState } from "src/types";
import create from "zustand";

export const useUserDataStore = create<IUserState>((set) => ({
  userData: {} as IRegistrationForm,
  setUserData: (userData: IRegistrationForm) =>
    set((state) => ({ ...state, userData })),
}));
