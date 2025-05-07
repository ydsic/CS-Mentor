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
              content: `질문: ${question}\n내 답변: ${input}\n이 답이 맞는지 피드백만 주세요.`,
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
    <div className={`flex h-screen ${themeClasses}`}>
      {/* ——— 왼쪽 히스토리 사이드바 ——— */}
      <aside className="w-64 p-4 border-r overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold">History</h2>
          <button
            onClick={() => setHistory([])}
            className="text-sm text-red-500 hover:underline"
          >
            Clear All
          </button>
        </div>
        <ul className="space-y-2">
          {history.map((item, i) => (
            <li
              key={i}
              className="p-2 bg-gray-100 rounded cursor-pointer"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {item.q.length > 20 ? item.q.slice(0, 20) + "…" : item.q}
            </li>
          ))}
        </ul>
      </aside>

      {/* 히스토리 모달 */}
      {hoveredIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="p-4 rounded shadow-lg bg-white text-gray-800 max-w-sm w-full">
            <h3 className="font-bold mb-2">질문</h3>
            <p>{history[hoveredIndex].q}</p>
            <h3 className="font-bold mt-4 mb-2">답변</h3>
            <p>{history[hoveredIndex].a}</p>
          </div>
        </div>
      )}

      {/* ——— 메인 콘텐츠 ——— */}
      <div className="flex-1 flex flex-col">
        {/* 헤더(테마 버튼) */}
        <header className="p-4 flex justify-between items-center border-b border-gray-300">
          <h1 className="text-2xl font-bold">CS Mentor</h1>
          <div className="flex space-x-2">
            {THEMES.map((t) => (
              <button
                key={t.name}
                onClick={() => setTheme(t.name)}
                className={`w-6 h-6 rounded-full border-2 ${
                  theme === t.name ? "border-black" : "border-gray-300"
                } hover:ring-2`}
                style={{ backgroundColor: t.color }}
                aria-label={`테마 ${t.name}`}
              />
            ))}
          </div>
        </header>

        {/* 중앙 퀴즈 영역 */}
        <main className="flex-1 flex flex-col items-center justify-center p-4">
          <h1 className="text-2xl font-semibold mb-6 text-center">
            {question}
          </h1>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg flex flex-col"
          >
            <input
              type="text"
              className="w-full p-3 border rounded mb-2"
              placeholder="답변을 입력하세요..."
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setFeedback("");
              }}
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading}
              className={`w-full p-2 rounded text-white ${
                loading ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? "로딩 중…" : "제출"}
            </button>
          </form>

          {error && <p className="mt-2 text-red-500">{error}</p>}

          {feedback && (
            <div className="mt-4 w-full max-w-lg p-4 bg-green-50 border-l-4 border-green-400">
              <strong>피드백:</strong>
              <p className="mt-2 whitespace-pre-line">{feedback}</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
