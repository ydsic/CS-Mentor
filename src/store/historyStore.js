import { create } from "zustand";
import {
  getHistoryStorage,
  removeHistoryStorage,
  setHistoryStorage,
} from "../utils/storage";

export const useHistoryStore = create((set) => ({
  history: getHistoryStorage(),
  setHistory: (newHistory) => {
    setHistoryStorage(newHistory);
    set({ history: newHistory });
  },
  clearHistory: () => {
    removeHistoryStorage();
    set({ history: [] });
  },
  deleteHistoryItem: (index) => {
    set((state) => {
      const newHistory = [...state.history];
      newHistory.splice(index, 1);
      setHistoryStorage(newHistory);
      return { history: newHistory };
    });
  },
}));
