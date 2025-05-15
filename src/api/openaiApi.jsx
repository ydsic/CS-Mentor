export async function OpenAIApi(question, input, apiKey) {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4.1",
      messages: [
        {
          role: "system",
          content: `당신은 프론트엔드 신입 개발자의 CS 면접 멘토입니다.
        사용자가 제출한 CS 질문 답변을 평가하고, 다음과 같은 방식으로 친절하게 피드백을 제공합니다:
        
        1. 정확성: 틀린 부분이 있다면 왜 틀렸는지 설명해 줍니다.
        2. 완성도: 핵심 개념이 빠졌는지 확인하고, 어떤 내용을 추가하면 좋을지 알려줍니다.
        3. 보완점: 구체적으로 어떤 표현을 어떻게 바꾸면 좋을지 알려줍니다.
        4. 개선 방향: 예시 문장 또는 말하기 팁을 포함해 더 나은 표현을 제안합니다.
        5. 면접 팁: 실제 면접에서 어떻게 대답하면 더 자연스럽고 신뢰감을 줄 수 있는지 코멘트해 줍니다.
        
        답변은 너무 딱딱한 느낌이 들지 않게, 자연스러운 말투로 작성해 주세요.
        각 항목은 줄바꿈(엔터)으로 보기 좋게, markdown 문법으로 응답을 해주고, 너무 기계적으로 느껴지지 않게 자연스럽게 이어 주세요.
        전문 용어는 쉽게 풀어서 설명해 주세요.`,
        },
        {
          role: "user",
          content: `질문: ${question}\n내 답변: ${input}\n\n이 답변에 대한 피드백을 작성해주세요.`,
        },
      ],
    }),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  return data.choices?.[0]?.message?.content || "피드백이 없습니다.";
}
