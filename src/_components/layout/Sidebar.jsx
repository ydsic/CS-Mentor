import Modal from "../BasicModal";
import { useOverlay } from "@toss/use-overlay";
import ConfirmModal from "../ConfirmModal";
import React from "react";

export default React.memo(function Sidebar({ history, setHistory }) {
  const overlay = useOverlay();
  const handleHistoryModal = (item) => {
    overlay.open(({ isOpen, close }) => (
      <Modal close={close} item={item} isOpen={isOpen} />
    ));
  };

  const handleClearConfirm = () => {
    overlay.open(({ isOpen, close }) => (
      <ConfirmModal
        isOpen={isOpen}
        close={close}
        message="모든 히스토리를 삭제하시겠습니까?"
        confirmText="삭제"
        cancelText="취소"
        onConfirm={() => {
          setHistory([]);
          localStorage.removeItem("csmentor-history");
        }}
      />
    ));
  };

  const handleDeleteItem = (index) => {
    overlay.open(({ isOpen, close }) => (
      <ConfirmModal
        isOpen={isOpen}
        close={close}
        message="이 항목을 삭제하시겠습니까?"
        confirmText="삭제"
        cancelText="취소"
        onConfirm={() => {
          const newHistory = [...history];
          newHistory.splice(index, 1);
          setHistory(newHistory);
          localStorage.setItem("csmentor-history", JSON.stringify(newHistory));
        }}
      />
    ));
  };

  console.log("history", history);
  console.log("🔁 Sidebar 렌더링");

  return (
    <>
      <aside className="w-64 px-4 py-8 border-r border-[#1e40af] overflow-auto">
        <div className="flex items-end justify-between font-semibold mb-6 pb-2 border-b border-[#1e40af]">
          <h2 className="font-bold text-2xl text-[#1e40af]">History</h2>
          <button
            onClick={handleClearConfirm}
            className={`text-sm hover:underline transition-opacity ${
              history.length === 0
                ? "text-gray-400 cursor-not-allowed opacity-50"
                : "text-red-500 cursor-pointer"
            }`}
            disabled={history.length === 0}
          >
            Clear All
          </button>
        </div>

        <ul className="space-y-2">
          {history.map((item, i) => (
            <li
              key={i}
              className="flex justify-between p-2 bg-gray-100 rounded text-sm text-black"
            >
              <button
                onClick={() => handleHistoryModal(item)}
                className="flex-1 py-2 overflow-hidden text-ellipsis whitespace-nowrap text-left cursor-pointer"
              >
                {item.question.length > 20
                  ? item.question.slice(0, 20) + "…"
                  : item.question}
              </button>
              <button
                onClick={() => handleDeleteItem(i)}
                className="cursor-pointer"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
});
