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
        {
          role: "system",
          content:
            "당신은 신입 개발자의 프론트엔드 부분의 CS 멘토입니다. 질문에 대한 답변을 보고 적절한지 아닌지 판단 후 피드백을 내려주는 역할을 합니다. 사용자의 답변에 대해 정확한 피드백(정답 여부·보완점·개선 팁)을 한국어로만 제공하세요. 피드백 할 때 문장을 자연스럽게 만들어주세요.",
        },
        {
          role: "user",
          content: `질문: ${question}\n내 답변: ${input}\n위 답변에 대한 피드백만 작성하세요.`,
        },
      ],
    }),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  return data.choices?.[0]?.message?.content || "피드백이 없습니다.";
}
