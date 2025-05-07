export async function OpenAIApi(question, input) {
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
  return data.choices?.[0]?.message?.content || "피드백이 없습니다.";
}
