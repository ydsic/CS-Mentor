export default function BasicModal({ close, isOpen, item }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
      <div className="flex flex-col gap-8 bg-white p-6 rounded-xl shadow-xl max-w-md w-full">
        <div>
          <h2 className="text-xl font-semibold text-gray-700">질문</h2>
          <p className="text-md text-gray-800">{item.question}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-700">답변</h2>
          <p className="text-md text-gray-800">{item.a}</p>
        </div>
        <button
          onClick={close}
          className="py-2 w-full text-center bg-blue-900 text-white rounded-md cursor-pointer"
        >
          닫기
        </button>
      </div>
    </div>
  );
}
