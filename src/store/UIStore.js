import { create } from "zustand";

export const useUIStore = create((set) => ({
  loading: false,
  isInputDisabled: false,
  setLoading: (val) => set({ loading: val }),
  setIsInputDisabled: (val) => set({ isInputDisabled: val }),
}));
