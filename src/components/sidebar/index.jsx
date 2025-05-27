import { useState } from "react";
import Modal from "./Modal";
import { useOverlay } from "@toss/use-overlay";

export default function History({ history, setHistory }) {
  const [hListModal, setHListModal] = useState(false);

  const overlay = useOverlay();
  const handleHistoryModal = (item) => {
    setHListModal(!hListModal);

    overlay.open(({ isOpen, close }) => (
      <Modal close={close} item={item} isOpen={isOpen} />
    ));
  };

  return (
    <>
      <aside className="w-64 px-4 py-8 border-r border-[#1e40af] overflow-auto">
        <div className="flex items-end justify-between font-semibold mb-6 pb-2 border-b border-[#1e40af]">
          <h2 className="font-bold text-2xl text-[#1e40af]">History</h2>
          <button
            onClick={() => {
              setHistory([]);
              localStorage.removeItem("csmentor-history");
            }}
            className="text-sm text-red-500 hover:underline cursor-pointer"
          >
            Clear All
          </button>
        </div>

        <ul className="space-y-2">
          {history.map((item, i) => (
            <li key={i} className="text-black">
              <button
                onClick={() => handleHistoryModal(item)}
                className="w-full p-2 bg-gray-100 rounded text-left text-sm cursor-pointer"
              >
                {item.q.length > 20 ? item.q.slice(0, 20) + "…" : item.q}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
