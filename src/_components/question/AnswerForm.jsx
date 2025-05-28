import { useInputStore } from "../../store/inputStore";

export default function Answer({
  setFeedback,
  handleSubmit,
  loading,
  setQuestion,
  setQuestionNum,
  questions_list,
  isInputDisabled,
  setIsInputDisabled,
}) {
  const { input, setInput } = useInputStore();

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 w-full max-w-lg"
    >
      <input
        type="text"
        className="p-3 w-full rounded-lg bg-white border border-[#1e40af]"
        placeholder="답변을 입력하세요..."
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setFeedback("");
        }}
        disabled={loading || isInputDisabled}
      />
      <div className="flex gap-3">
        <button
          type="submit"
          disabled={isInputDisabled}
          className={`w-full mt-4 px-4 py-2 rounded-lg text-white font-bold ${
            isInputDisabled ? "bg-gray-500" : "bg-[#1e40af] hover:bg-[#1e30af]"
          }`}
        >
          {loading ? "로딩 중…" : "제출하기"}
        </button>

        <button
          onClick={() => {
            const next = Math.floor(Math.random() * questions_list.length);
            setQuestionNum(next);
            setQuestion(questions_list[next]);
            setFeedback("");
            setInput("");
            setIsInputDisabled(false);
          }}
          className="w-full mt-4 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          다음 질문 →
        </button>
      </div>
    </form>
  );
}
