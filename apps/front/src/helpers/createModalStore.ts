import { create } from "zustand";

interface IModalProps<T> {
  isOpen: boolean;
  modalData: T;
  onOpen: () => void;
  onClose: () => void;
  setModalData: (modalData: T) => void;
}

export const createModalStore = <T>() => {
  return create<IModalProps<T>>((set) => ({
    isOpen: false,
    modalData: {} as T,
    onOpen: () => set((state) => ({ ...state, isOpen: true })),
    onClose: () => set((state) => ({ ...state, isOpen: false })),
    setModalData: (modalData: T) => set((state) => ({ ...state, modalData })),
  }));
};
