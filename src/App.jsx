import { useState } from "react";

function App() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleClick = async () => {
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
          messages: [{ role: "user", content: "React가 뭐야?" }],
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const data = await res.json();
      setResult(data.choices?.[0]?.message?.content ?? "응답이 없습니다.");
    } catch (err) {
      setError("API 호출 중 오류가 발생했습니다.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button onClick={handleClick} disabled={loading}>
        {loading ? "로딩 중..." : "질문하기"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>{result}</p>
    </>
  );
}

export default App;
