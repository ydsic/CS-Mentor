import "./App.css";
import { useEffect, useState } from "react";
import { questions_list } from "../src/data/qustions";
import { OpenAIApi } from "./api/openaiApi";
import { THEMES } from "./data/theme";
import NavBar from "./_components/layout/NavBar";
import History from "./_components/layout/Sidebar";
import MainLayout from "./_components/layout/MainLayout";
import { useFeedbackHandler } from "./hooks/useFeedbackHandler";
import { getThemeStorage, setThemeStorage } from "./utils/storage";

export default function App() {
  const getInitialTheme = () => {
    const savedTheme = getThemeStorage();
    const found = THEMES.find((t) => t.name === savedTheme);
    return found ? found.name : THEMES[0].name;
  };
  const [theme, setTheme] = useState(getInitialTheme());
  const [questionNum, setQuestionNum] = useState(
    Math.floor(Math.random() * questions_list.length)
  );
  const [question, setQuestion] = useState(questions_list[questionNum]);

  const {
    input,
    setInput,
    feedback,
    loading,
    error,
    history,
    setHistory,
    handleSubmit,
    isInputDisabled,
    setIsInputDisabled,
    setFeedback,
  } = useFeedbackHandler(question);

  const themeClasses =
    THEMES.find((t) => t.name === theme)?.classes || THEMES[0].classes;

  useEffect(() => {
    setThemeStorage(theme);
  }, [theme]);

  return (
    <div className={`relative flex h-screen ${themeClasses}`}>
      <History history={history} setHistory={setHistory} />

      <div className="flex-1 px-4 relative">
        <NavBar theme={theme} setTheme={setTheme} />
        <MainLayout
          question={question}
          input={input}
          setInput={setInput}
          handleSubmit={handleSubmit}
          setQuestion={setQuestion}
          setQuestionNum={setQuestionNum}
          feedback={feedback}
          loading={loading}
          error={error}
          isInputDisabled={isInputDisabled}
          setIsInputDisabled={setIsInputDisabled}
          questions_list={questions_list}
          setFeedback={setFeedback}
        />
      </div>
    </div>
  );
}
