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

export default function CSMentor() {
  const [theme, setTheme] = useState(THEMES[0].name);
  const [question] = useState(questions_list[2]);
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [history, setHistory] = useState([
    { q: "React란 무엇인가요?", a: "웹페이지 제작을 위해 만들어진 라이브러리" },
  ]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
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
    } catch (err) {
      console.error(err);
      setError("피드백을 불러오는 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  return (
    <div className={`flex h-screen ${themeClasses}`}>
      <aside className="w-64 px-4 py-8 border-r border-[#1e40af] overflow-auto">
        <div className="flex items-end justify-between font-semibold mb-6 pb-2 border-b border-[#1e40af]">
          <h2 className="font-bold text-2xl text-[#1e40af]">History</h2>
          <button
            onClick={() => setHistory([])}
            className="text-sm text-red-500 hover:underline cursor-pointer"
          >
            Clear All
          </button>
        </div>
        {/* history 기록 위치 */}
      </aside>
      {/* aside div 위치 */}

      <div className="flex-1 px-4 relative">
        {/* 테마 넣는 위치 */}
        <NavBar theme={theme} setTheme={setTheme} />

        <main className="flex flex-col justify-center items-center gap-4 h-full">
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
          <div className="w-full max-w-[50%] h-[20%]">
            {feedback && <Feedback feedback={feedback} />}
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </main>
      </div>
    </div>
  );
}
