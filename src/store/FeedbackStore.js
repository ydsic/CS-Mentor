import { create } from "zustand";

export const useFeedbackStore = create((set) => ({
  feedback: "",
  error: null,
  setFeedback: (text) => set({ feedback: text }),
  setError: (err) => set({ error: err }),
}));
