export default function Modal({ history, hoveredIndex, mousePosition }) {
  return (
    <>
      {hoveredIndex !== null && (
        <div
          className="absolute z-50 bg-white border border-gray-300 rounded p-3 text-sm shadow-lg max-w-xl"
          style={{
            top: mousePosition.y + 10,
            left: mousePosition.x + 10,
            position: "fixed",
          }}
        >
          <h3 className="font-semibold text-gray-700 mb-1">질문</h3>
          <p className="text-gray-800">{history[hoveredIndex].q}</p>
          <h3 className="font-semibold text-gray-700 mt-2 mb-1">답변</h3>
          <p className="text-gray-800">{history[hoveredIndex].a}</p>
        </div>
      )}
    </>
  );
}
