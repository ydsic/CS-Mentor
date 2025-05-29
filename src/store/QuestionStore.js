import { create } from "zustand";
import { questions_list } from "../data/qustions";

export const useQuestionStore = create((set) => ({
  questionNum: Math.floor(Math.random() * questions_list.length),
  questions_list,
  question: questions_list[Math.floor(Math.random() * questions_list.length)],
  setQuestionNum: (num) =>
    set((state) => ({
      questionNum: num,
      question: state.questions_list[num],
    })),
  setQuestion: (q) => set({ question: q }),

  setRandomQuestion: () => {
    const num = Math.floor(Math.random() * questions_list.length);
    set({
      questionNum: num,
      question: questions_list[num],
    });
  },
}));
