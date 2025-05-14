export default function Feedback({ feedback }) {
  return (
    <div className="mt-4 w-full max-w-lg p-4 bg-white border-l-4 border-[#1e40af]">
      <strong>피드백:</strong>
      <p className="mt-2 whitespace-pre-line">{feedback}</p>
    </div>
  );
}
