import ReactMarkdown from "react-markdown";

export default function Feedback({ feedback }) {
  return (
    <div className="mt-4 w-full max-w-5xl p-4 bg-white border-l-4 border-[#1e40af]">
      <strong>피드백:</strong>
      <div className="mt-2 prose prose-blue max-w-none">
        <ReactMarkdown>{feedback}</ReactMarkdown>
      </div>
    </div>
  );
}
