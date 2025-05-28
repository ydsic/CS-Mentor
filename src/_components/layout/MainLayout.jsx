import Answer from "../question/AnswerForm";
import Feedback from "../question/Feedback";
import LoadingComment from "../question/Loading";
import Question from "../question/Question";
import Title from "../question/Title";

export default function MainLayout({
  question,
  handleSubmit,
  setQuestion,
  setQuestionNum,
  feedback,
  loading,
  error,
  isInputDisabled,
  setIsInputDisabled,
  questions_list,
  setFeedback,
}) {
  console.log("MainLayout 리렌더링");
  return (
    <main className="flex flex-col justify-center items-center gap-4 h-dvh">
      <Title />
      <Question question={question} />
      <Answer
        setFeedback={setFeedback}
        handleSubmit={handleSubmit}
        setQuestion={setQuestion}
        setQuestionNum={setQuestionNum}
        loading={loading}
        questions_list={questions_list}
        isInputDisabled={isInputDisabled}
        setIsInputDisabled={setIsInputDisabled}
      />

      {/* openai api응답 시 나타나는 부분 */}
      {/* 피드백이 표시될 공간을 미리 마련하여 피드백이 표시될 시 UI위치가 달라지는 것을 방지 */}
      <div className="flex flex-col max-w-[80%] overflow-y-scroll ">
        {feedback && <Feedback feedback={feedback} />}
        {loading && <LoadingComment loading={loading} />}
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </main>
  );
}
