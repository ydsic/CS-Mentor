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
      <aside className="w-64 p-4 border-r overflow-auto">
        <div className="flex items-end justify-between font-semibold mb-8">
          <h2 className="font-bold text-2xl">History</h2>
          <button
            onClick={() => setHistory([])}
            className="text-sm text-red-500 hover:underline cursor-pointer"
          >
            Clear All
          </button>
        </div>
        <ul className="space-y-2 font-medium">
          <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">
            질문 목록1
          </li>
          <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">
            질문 목록2
          </li>
        </ul>
      </aside>

      <div>
        {/* 컬러 모드 변경 */}
        <header>
          <div>
            <button></button>
          </div>
        </header>

        <main>
          <h1></h1>
          <h3>{question}</h3>
          <form>
            <input type="text" />
            <button
              type="submit"
              disabled={loading}
              className={`w-full p-2 rounded text-white ${
                loading ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? "로딩 중…" : "제출"}
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </form>
        </main>
      </div>
    </div>
  );
}
