import "./App.css";
import { useState } from "react";
import { questions_list } from "../src/data/qustions";
import Title from "./components/title";
import Question from "./components/qustion";
import Answer from "./components/answer";
import { OpenAIApi } from "./api/openaiApi";
import Feedback from "./components/feedback";
import NavBar from "./components/nav";
import { THEMES } from "./data/theme";
import History from "./components/sidebar";

export default function CSMentor() {
  const [apiKey, setApiKey] = useState("");
  const [theme, setTheme] = useState(THEMES[0].name);
  const [questionNum, setQuestionNum] = useState(
    Math.floor(Math.random() * questions_list.length)
  );

  const [question, setQuestion] = useState(questions_list[questionNum]);

  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState("");

  const [history, setHistory] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const themeClasses =
    THEMES.find((t) => t.name === theme)?.classes || THEMES[0].classes;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setHistory((prev) => [...prev, { q: question, a: input }]);

    setLoading(true);
    setError("");
    try {
      const msg = await OpenAIApi(question, input, apiKey);
      setFeedback(msg);
    } catch (err) {
      console.error(err);
      setError("피드백을 불러오는 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
      setInput("");
    }

    const next = Math.floor(Math.random() * questions_list.length);
    setQuestionNum(next);
    setQuestion(questions_list[next]);
  };

  return (
    <div className={`flex h-screen ${themeClasses}`}>
      <History history={history} setHistory={setHistory} />

      <div className="flex-1 px-4 relative">
        <NavBar
          theme={theme}
          setTheme={setTheme}
          apiKey={apiKey}
          setApiKey={setApiKey}
        />

        <main className="flex flex-col justify-center items-center gap-4 h-dvh">
          <Title />
          <Question question={question} />
          <Answer
            input={input}
            setInput={setInput}
            setFeedback={setFeedback}
            handleSubmit={handleSubmit}
            loading={loading}
          />

          {/* openai api응답 시 나타나는 부분 */}
          {/* 피드백이 표시될 공간을 미리 마련하여 피드백이 표시될 시 UI위치가 달라지는 것을 방지 */}
          <div className="flex flex-col max-w-[80%] overflow-y-scroll ">
            {feedback && <Feedback feedback={feedback} />}
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </main>
      </div>
    </div>
  );
}
