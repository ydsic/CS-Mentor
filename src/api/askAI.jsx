export async function askOpenAI(question, input) {
  const res = await fetch("https://may-study-project.vercel.app/api/openai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question, input }),
  });
  const data = await res.json();
  return data.result || "피드백이 없습니다.";
}
