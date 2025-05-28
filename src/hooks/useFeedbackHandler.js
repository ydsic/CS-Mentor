import { useEffect, useState } from "react";
import { getHistoryStorage } from "../utils/storage";
import { OpenAIApi } from "../api/openaiApi";
import { useInputStore } from "../store/inputStore";

export const useFeedbackHandler = (question) => {
  const { input, setInput } = useInputStore();
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [history, setHistory] = useState([]);
  const [isInputDisabled, setIsInputDisabled] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newHistory = [...history, { question, a: input }];
    setHistory(newHistory);
    localStorage.setItem("csmentor-history", JSON.stringify(newHistory));

    setLoading(true);
    setError("");
    try {
      const msg = await OpenAIApi(question, input);
      setFeedback(msg);
      setIsInputDisabled(true);
    } catch (err) {
      console.error(err);
      setError("피드백을 불러오는 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  return {
    feedback,
    loading,
    error,
    history,
    setHistory,
    handleSubmit,
    isInputDisabled,
    setIsInputDisabled,
    setFeedback,
  };
};
