import "./App.css";
import { useState } from "react";

// ① 지원할 테마 목록 정의
const THEMES = [
  { name: "black", classes: "bg-black text-white", color: "#000000" },
  { name: "white", classes: "bg-white text-gray-800", color: "#FFFFFF" },
  { name: "skyblue", classes: "bg-sky-200 text-gray-800", color: "#38BDF8" },
  { name: "rose", classes: "bg-rose-200 text-gray-800", color: "#F43F5E" },
  { name: "lime", classes: "bg-lime-200 text-gray-800", color: "#A3E635" },
];

export default function CSMentor() {
  // ② 상태 선언 (타입추가 없음)
  const [theme, setTheme] = useState(THEMES[0].name);
  const [question] = useState(
    "운영체제의 캐시 일관성(cache coherence)이란 무엇인가요?"
  );
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [history, setHistory] = useState([
    { q: "스레드와 프로세스 차이?", a: "스레드는 경량 프로세스..." },
    { q: "가비지 컬렉션 GC 동작 원리?", a: "Mark & Sweep 알고리즘..." },
  ]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ③ 현재 테마의 클래스 가져오기
  const themeClasses =
    THEMES.find((t) => t.name === theme)?.classes || THEMES[0].classes;

  // ④ 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // 히스토리에 새 질문·답변 남기기
    setHistory((prev) => [...prev, { q: question, a: input }]);

    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4.1-mini",
          messages: [
            { role: "system", content: "CS 멘토입니다." },
            {
              role: "user",
              content: `질문: ${question}\n내 답변: ${input}\n이 답이 맞는지 피드백만 주세요`,
            },
          ],
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const msg = data.choices?.[0]?.message?.content || "피드백이 없습니다";
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
    <div className="flex h-screen">
      {/* 히스토리 구간 */}
      <aside className="w-64 px-4 py-8 border-r border-[#1e40af] overflow-auto">
        <div className="flex items-end justify-between font-semibold mb-8">
          <h2 className="font-bold text-2xl text-[#1e40af]">History</h2>
          <button
            onClick={() => setHistory([])}
            className="text-sm text-red-500 hover:underline cursor-pointer"
          >
            Clear All
          </button>
        </div>
        <ul className="space-y-2 font-medium text-gray-700">
          <li className="p-2 hover:text-[#1e40af] hover:bg-blue-50 rounded cursor-pointer">
            질문 목록1
          </li>
          <li className="p-2 hover:text-[#1e40af] hover:bg-blue-50 rounded cursor-pointer">
            질문 목록2
          </li>
        </ul>
      </aside>

      <div className="px-4 w-[calc(100%-256px)]">
        {/* 컬러 모드 변경 */}
        <div className="fixed top-2 right-2">
          <button>컬러 모드 변환 버튼</button>
        </div>

        <main className="flex flex-col justify-center items-center gap-4 h-full">
          <h1 className="text-4xl text-[#1e40af] font-bold">CS Mentor</h1>
          <h3 className="text-xl font-medium">{question}</h3>
          <form className="flex flex-col gap-3">
            <input
              type="text"
              className="p-3 w-80 rounded-lg border border-[#1e40af]"
              placeholder="답변을 입력하세요..."
              onChange={(e) => {
                setInput(e.target.value);
                setFeedback("");
              }}
              value={input}
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading}
              className={`w-80 p-2 rounded-lg text-white font-bold cursor-pointer ${
                loading ? "bg-gray-500" : "bg-[#1e40af] hover:bg-[#1e30af]"
              }`}
            >
              {loading ? "로딩 중…" : "제출하기"}
            </button>
            {error && <p className="text-red-500">{error}</p>}
          </form>
        </main>
      </div>
    </div>
  );
}
