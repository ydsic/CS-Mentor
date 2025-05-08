export default function Answer({
  input,
  setInput,
  setFeedback,
  handleSubmit,
  loading,
}) {
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
        disabled={loading}
      />
      <button
        type="submit"
        disabled={loading}
        className={`w-full p-2 rounded-lg text-white font-bold ${
          loading ? "bg-gray-500" : "bg-[#1e40af] hover:bg-[#1e30af]"
        }`}
      >
        {loading ? "로딩 중…" : "제출하기"}
      </button>
    </form>
  );
}
