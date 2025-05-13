export default function Feedback({ feedback }) {
  return (
    <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-400">
      <strong>피드백:</strong>
      <p className="mt-2 whitespace-pre-line">{feedback}</p>
    </div>
  );
}
