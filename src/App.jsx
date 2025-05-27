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
import LoadingComment from "./components/answer/loading";

export default function CSMentor() {
  const [theme, setTheme] = useState(THEMES[0].name);
  const [questionNum, setQuestionNum] = useState(
    Math.floor(Math.random() * questions_list.length)
  );
  const [question, setQuestion] = useState(questions_list[questionNum]);
  const [input, setInput] = useState("");
  const [isInputDisabled, setIsInputDisabled] = useState(false);

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
      const msg = await OpenAIApi(question, input);
      setFeedback(msg);
      setIsInputDisabled(true);
    } catch (err) {
      console.error(err);
      setError("피드백을 불러오는 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`flex h-screen ${themeClasses}`}>
      <History history={history} setHistory={setHistory} />

      <div className="flex-1 px-4 relative">
        <NavBar theme={theme} setTheme={setTheme} />

        <main className="flex flex-col justify-center items-center gap-4 h-dvh">
          <Title />
          <Question question={question} />
          <Answer
            input={input}
            setInput={setInput}
            setFeedback={setFeedback}
            handleSubmit={handleSubmit}
            setQuestion={setQuestion}
            setQuestionNum={setQuestionNum}
            loading={loading}
            questions_list={questions_list}
            isInputDisabled={isInputDisabled}
            setIsInputDisabled={setIsInputDisabled}
          />

          {/* openai api응답 시 나타나는 부분 */}
          {/* 피드백이 표시될 공간을 미리 마련하여 피드백이 표시될 시 UI위치가 달라지는 것을 방지 */}
          <div className="flex flex-col max-w-[80%] overflow-y-scroll ">
            {feedback && <Feedback feedback={feedback} />}
            {loading && <LoadingComment loading={loading} />}
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </main>
      </div>
    </div>
  );
}
