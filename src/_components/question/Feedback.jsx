import ReactMarkdown from "react-markdown";

export default function Feedback({ feedback }) {
  return (
    <div className="w-full h-96 max-w-5xl p-4">
      <strong className="inline-block w-fit px-4 bg-[#1e40af] text-white">
        피드백 :
      </strong>
      <div className="my-4 p-4 max-w-none bg-white border-l-4 border-[#1e40af] text-black">
        <ReactMarkdown>{feedback}</ReactMarkdown>
      </div>
    </div>
  );
}
