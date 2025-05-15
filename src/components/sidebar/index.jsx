import { useState } from "react";
import Modal from "./Modal";

export default function History({ history, setHistory }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  return (
    <>
      <aside className="w-64 px-4 py-8 border-r border-[#1e40af] overflow-auto">
        <div className="flex items-end justify-between font-semibold mb-6 pb-2 border-b border-[#1e40af]">
          <h2 className="font-bold text-2xl text-[#1e40af]">History</h2>
          <button
            onClick={() => setHistory([])}
            className="text-sm text-red-500 hover:underline cursor-pointer"
          >
            Clear All
          </button>
        </div>

        <ul className="space-y-2">
          {history.map((item, i) => (
            <li
              key={i}
              className="p-2 bg-gray-100 rounded cursor-pointer relative"
              onMouseEnter={(e) => {
                setHoveredIndex(i);
              }}
              onMouseLeave={() => setHoveredIndex(null)}
              onMouseMove={(e) => {
                setMousePosition({ x: e.clientX, y: e.clientY });
              }}
            >
              {item.q.length > 20 ? item.q.slice(0, 20) + "…" : item.q}
            </li>
          ))}
        </ul>
      </aside>

      <Modal
        history={history}
        hoveredIndex={hoveredIndex}
        mousePosition={mousePosition}
      />
    </>
  );
}
